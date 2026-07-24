'use client';

import { useEffect, useRef, useCallback } from 'react';
import { Renderer, Program, Mesh, Triangle, Texture } from 'ogl';
import { animate } from 'motion/react';

const vertex = `
  attribute vec2 uv;
  attribute vec2 position;
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position, 0.0, 1.0);
  }
`;

const fragment = `
  precision highp float;
  uniform sampler2D uTexA;
  uniform sampler2D uTexB;
  uniform sampler2D uDisp;
  uniform float uProgress;
  varying vec2 vUv;
  void main() {
    vec2 dispVec = texture2D(uDisp, vUv).rg - 0.5;
    vec2 uvA = vUv + dispVec * uProgress * 0.55;
    vec2 uvB = vUv - dispVec * (1.0 - uProgress) * 0.55;
    vec4 colorA = texture2D(uTexA, uvA);
    vec4 colorB = texture2D(uTexB, uvB);
    gl_FragColor = mix(colorA, colorB, uProgress);
  }
`;

function loadImage(url: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new window.Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = url;
  });
}

// A single grayscale displacement map, loaded/generated once and reused
// across every tile's own WebGL context (each context still needs its own
// Texture object — WebGL textures aren't shareable across contexts — but the
// underlying pixel source only needs to exist once). No static asset tooling
// is available in this environment, so this is generated on an offscreen
// canvas: a handful of heavily-blurred soft radial blobs around a neutral
// mid-gray, which reads as a smooth "melt" displacement rather than the
// staticky look flat per-pixel random noise would produce.
let displacementSourcePromise: Promise<HTMLCanvasElement> | null = null;
function getDisplacementSource(): Promise<HTMLCanvasElement> {
  if (!displacementSourcePromise) {
    displacementSourcePromise = Promise.resolve().then(() => {
      const size = 256;
      const canvas = document.createElement('canvas');
      canvas.width = size;
      canvas.height = size;
      const ctx = canvas.getContext('2d')!;
      ctx.fillStyle = 'rgb(128, 128, 128)';
      ctx.fillRect(0, 0, size, size);
      ctx.filter = 'blur(18px)';
      // Larger, higher-contrast, overlapping blobs so most of the frame has
      // *some* meaningful displacement rather than only a few isolated soft
      // spots in an otherwise-neutral field — the earlier tuning was so
      // subtle it read as a flat cross-dissolve instead of a "melt".
      const blobs: [number, number, number, string][] = [
        [60, 70, 140, 'rgb(235, 130, 128)'],
        [190, 60, 150, 'rgb(60, 190, 128)'],
        [150, 190, 160, 'rgb(160, 50, 128)'],
        [40, 190, 130, 'rgb(90, 230, 128)'],
        [128, 128, 120, 'rgb(210, 210, 128)'],
      ];
      for (const [x, y, r, color] of blobs) {
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.fill();
      }
      return canvas;
    });
  }
  return displacementSourcePromise;
}

interface GLState {
  renderer: Renderer;
  program: Program;
  mesh: Mesh;
  raf: number | null;
}

export default function PhotoDistortionHover({
  photoAUrl,
  photoBUrl,
  hovering,
  className,
}: {
  photoAUrl: string;
  photoBUrl: string;
  hovering: boolean;
  className?: string;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const glStateRef = useRef<GLState | null>(null);
  const progressRef = useRef(0);
  const mountedRef = useRef(false);
  const readyRef = useRef(false);
  // Mirrors the `hovering` prop synchronously (assigned in the render body
  // below, not in an effect) so the async continuations inside ensureMounted
  // can check "is the user still hovering *right now*" rather than the stale
  // value captured when the mount attempt began.
  const hoveringRef = useRef(hovering);
  hoveringRef.current = hovering;
  const controlsRef = useRef<{ stop: () => void } | null>(null);
  const setReadyDom = useCallback((ready: boolean) => {
    readyRef.current = ready;
    if (canvasRef.current) canvasRef.current.style.opacity = ready ? '1' : '0';
  }, []);

  const teardown = useCallback(() => {
    const state = glStateRef.current;
    // If nothing's mounted yet, leave mountedRef alone rather than resetting
    // it here: an ensureMounted() call may still be in flight (awaiting
    // texture loads) using that flag as its "don't double-invoke" lock — it
    // resets the flag itself once it actually finishes or aborts. Clearing
    // it early would let a rapid re-hover race a second concurrent mount.
    if (!state) return;
    if (state.raf !== null) cancelAnimationFrame(state.raf);
    state.renderer.gl.getExtension('WEBGL_lose_context')?.loseContext();
    glStateRef.current = null;
    mountedRef.current = false;
    setReadyDom(false);
  }, [setReadyDom]);

  const ensureMounted = useCallback(async () => {
    if (glStateRef.current || mountedRef.current || !canvasRef.current) return;
    mountedRef.current = true;
    const canvas = canvasRef.current;

    // Measured *before* constructing the Renderer: its constructor calls
    // setSize(), which sets an inline canvas.style.width/height — if we don't
    // pass an explicit width/height here, it defaults to the canvas's raw
    // 300x150 HTML default and that inline style permanently overrides our
    // CSS sizing (any later setSize() call would just read back the same
    // wrong 300x150 the constructor already forced onto the element).
    const { width, height } = canvas.getBoundingClientRect();

    const renderer = new Renderer({
      canvas,
      alpha: true,
      dpr: Math.min(window.devicePixelRatio, 2),
      width: width || 1,
      height: height || 1,
    });
    const gl = renderer.gl;

    let imgA: HTMLImageElement, imgB: HTMLImageElement, disp: HTMLCanvasElement;
    try {
      [imgA, imgB, disp] = await Promise.all([
        loadImage(photoAUrl),
        loadImage(photoBUrl),
        getDisplacementSource(),
      ]);
    } catch {
      mountedRef.current = false;
      return;
    }
    // The component may have unmounted, or the mouse may have already left
    // while textures were loading — without this check the mount would still
    // complete afterward: setReadyDom(true) would show a fully-opaque canvas
    // over a tile nobody's hovering, and since the earlier (too-early)
    // teardown() call already ran as a no-op (glStateRef.current was still
    // null then), nothing would ever tear this stray mount back down until
    // the next unrelated hover cycle on the same tile happened to trigger it.
    if (!canvasRef.current || !hoveringRef.current) {
      gl.getExtension('WEBGL_lose_context')?.loseContext();
      mountedRef.current = false;
      return;
    }

    const program = new Program(gl, {
      vertex,
      fragment,
      transparent: true,
      uniforms: {
        uTexA: { value: new Texture(gl, { image: imgA }) },
        uTexB: { value: new Texture(gl, { image: imgB }) },
        uDisp: { value: new Texture(gl, { image: disp }) },
        uProgress: { value: progressRef.current },
      },
    });
    const mesh = new Mesh(gl, { geometry: new Triangle(gl), program });

    const state: GLState = { renderer, program, mesh, raf: null };
    glStateRef.current = state;
    setReadyDom(true);

    const loop = () => {
      if (!glStateRef.current) return;
      program.uniforms.uProgress.value = progressRef.current;
      renderer.render({ scene: mesh });
      glStateRef.current.raf = requestAnimationFrame(loop);
    };
    loop();
  }, [photoAUrl, photoBUrl, setReadyDom]);

  const animateProgress = useCallback(
    (target: number) => {
      controlsRef.current?.stop();
      controlsRef.current = animate(progressRef.current, target, {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
        onUpdate: (v) => {
          progressRef.current = v;
        },
        onComplete: () => {
          if (target === 0) teardown();
        },
      });
    },
    [teardown]
  );

  useEffect(() => {
    if (hovering) {
      // Don't start the progress clock until the canvas can actually paint
      // it. Starting it immediately on hover (in parallel with the async
      // texture load) meant a slow-loading pair of photos would arrive
      // already mid- or post-transition — the viewer never saw the melt
      // begin, only a partial/complete blend popping in.
      ensureMounted().then(() => {
        if (hoveringRef.current) animateProgress(1);
      });
    } else {
      animateProgress(0);
    }
    return () => controlsRef.current?.stop();
  }, [hovering, ensureMounted, animateProgress]);

  useEffect(() => teardown, [teardown]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className={`absolute inset-0 w-full h-full pointer-events-none transition-opacity duration-150 ${className ?? ''}`}
      style={{ opacity: 0 }}
    />
  );
}
