let audioContext: AudioContext | null = null;
let noiseBuffer: AudioBuffer | null = null;
let muted = false;

function getAudioContext(): AudioContext | null {
  if (typeof window === "undefined") {
    return null;
  }

  if (!audioContext || audioContext.state === "closed") {
    const AudioContextClass =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;

    if (!AudioContextClass) {
      return null;
    }

    audioContext = new AudioContextClass();
  }

  if (audioContext.state === "suspended") {
    void audioContext.resume();
  }

  return audioContext;
}

function getNoiseBuffer(ctx: AudioContext): AudioBuffer {
  if (noiseBuffer && noiseBuffer.sampleRate === ctx.sampleRate) {
    return noiseBuffer;
  }

  const length = Math.floor(ctx.sampleRate * 0.5);
  const buffer = ctx.createBuffer(1, length, ctx.sampleRate);
  const data = buffer.getChannelData(0);

  for (let i = 0; i < length; i++) {
    data[i] = Math.random() * 2 - 1;
  }

  noiseBuffer = buffer;
  return buffer;
}

function triggerNoiseBurst(
  ctx: AudioContext,
  destination: AudioNode,
  startTime: number,
  duration: number,
  filterType: BiquadFilterType,
  filterFreq: number,
  q: number,
  peakGain: number
): void {
  const source = ctx.createBufferSource();
  source.buffer = getNoiseBuffer(ctx);

  const filter = ctx.createBiquadFilter();
  filter.type = filterType;
  filter.frequency.setValueAtTime(filterFreq, startTime);
  filter.Q.setValueAtTime(q, startTime);

  const gain = ctx.createGain();
  gain.gain.setValueAtTime(peakGain, startTime);
  gain.gain.linearRampToValueAtTime(0, startTime + duration);

  source.connect(filter);
  filter.connect(gain);
  gain.connect(destination);

  source.start(startTime);
  source.stop(startTime + duration);
}

function triggerOscillatorThump(
  ctx: AudioContext,
  destination: AudioNode,
  startTime: number,
  duration: number,
  startFreq: number,
  endFreq: number,
  peakGain: number,
  oscType: OscillatorType = "sine"
): void {
  const osc = ctx.createOscillator();
  osc.type = oscType;
  osc.frequency.setValueAtTime(startFreq, startTime);
  osc.frequency.exponentialRampToValueAtTime(Math.max(endFreq, 1), startTime + duration);

  const gain = ctx.createGain();
  gain.gain.setValueAtTime(peakGain, startTime);
  gain.gain.linearRampToValueAtTime(0, startTime + duration);

  osc.connect(gain);
  gain.connect(destination);

  osc.start(startTime);
  osc.stop(startTime + duration);
}

export function isMuted(): boolean {
  return muted;
}

export function toggleMute(force?: boolean): boolean {
  muted = force !== undefined ? force : !muted;
  return muted;
}

export function playShutterSound(): void {
  if (muted) {
    return;
  }

  const ctx = getAudioContext();
  if (!ctx) {
    return;
  }

  const now = ctx.currentTime;
  const master = ctx.createGain();
  master.gain.setValueAtTime(0.5, now);
  master.connect(ctx.destination);

  const shutterOpenTime = now;
  triggerNoiseBurst(ctx, master, shutterOpenTime, 0.02, "bandpass", 2200, 3.0, 0.35);
  triggerOscillatorThump(ctx, master, shutterOpenTime, 0.028, 260, 60, 0.3, "triangle");

  const shutterCloseTime = now + 0.068;
  triggerNoiseBurst(ctx, master, shutterCloseTime, 0.04, "bandpass", 1400, 2.0, 0.45);
  triggerNoiseBurst(ctx, master, shutterCloseTime + 0.005, 0.015, "highpass", 3200, 1.0, 0.25);
  triggerOscillatorThump(ctx, master, shutterCloseTime, 0.045, 180, 45, 0.4, "sine");
}

export function playDialClick(): void {
  if (muted) {
    return;
  }

  const ctx = getAudioContext();
  if (!ctx) {
    return;
  }

  const now = ctx.currentTime;
  const master = ctx.createGain();
  master.gain.setValueAtTime(0.35, now);
  master.connect(ctx.destination);

  triggerNoiseBurst(ctx, master, now, 0.012, "bandpass", 2800, 3.5, 0.3);
  triggerOscillatorThump(ctx, master, now, 0.01, 1600, 600, 0.2, "triangle");
}
