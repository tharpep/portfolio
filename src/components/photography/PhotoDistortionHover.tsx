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
    vec2 uvA = vUv + dispVec * uProgress * 0.3;
    vec2 uvB = vUv - dispVec * (1.0 - uProgress) * 0.3;
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
      ctx.filter = 'blur(28px)';
      const blobs: [number, number, number, string][] = [
        [60, 70, 90, 'rgb(190, 150, 128)'],
        [190, 60, 100, 'rgb(100, 170, 128)'],
        [150, 190, 110, 'rgb(150, 90, 128)'],
        [40, 190, 80, 'rgb(120, 200, 128)'],
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
  const setReadyDom = useCallback((ready: boolean) => {
    readyRef.current = ready;
    if (canvasRef.current) canvasRef.current.style.opacity = ready ? '1' : '0';
  }, []);

  const teardown = useCallback(() => {
    const state = glStateRef.current;
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

    const renderer = new Renderer({
      canvas,
      alpha: true,
      dpr: Math.min(window.devicePixelRatio, 2),
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
    // Component may have unmounted or stopped hovering while textures loaded.
    if (!canvasRef.current) return;

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

    const { clientWidth, clientHeight } = canvas;
    renderer.setSize(clientWidth || 1, clientHeight || 1);

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

  useEffect(() => {
    if (hovering) {
      ensureMounted();
    }
    const controls = animate(progressRef.current, hovering ? 1 : 0, {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => {
        progressRef.current = v;
      },
      onComplete: () => {
        if (!hovering) teardown();
      },
    });
    return () => controls.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hovering]);

  useEffect(() => teardown, [teardown]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className={`absolute inset-0 pointer-events-none transition-opacity duration-150 ${className ?? ''}`}
      style={{ opacity: 0 }}
    />
  );
}
