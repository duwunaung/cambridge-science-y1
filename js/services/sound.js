/*************************************************************************
 * 4. WEB AUDIO SYNTHESIZER (Kid-friendly Chimes & Fanfare, Zero External MP3s)
 *************************************************************************/
class SoundEffects {
  constructor() {
    this.enabled = true;
    this.ctx = null;
  }

  initContext() {
    if (!this.ctx && (window.AudioContext || window.webkitAudioContext)) {
      this.ctx = new (window.AudioContext || window.webkitAudioContext)();
    }
  }

  playTone(freq, type = "sine", duration = 0.18, delay = 0, gainVal = 0.15) {
    if (!this.enabled) return;
    try {
      this.initContext();
      if (this.ctx.state === "suspended") this.ctx.resume();
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime + delay);
      gain.gain.setValueAtTime(gainVal, this.ctx.currentTime + delay);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + delay + duration);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(this.ctx.currentTime + delay);
      osc.stop(this.ctx.currentTime + delay + duration);
    } catch (e) {}
  }

  playCorrect() {
    this.playTone(523.25, "triangle", 0.15, 0, 0.18);   // C5
    this.playTone(659.25, "triangle", 0.15, 0.1, 0.18); // E5
    this.playTone(783.99, "triangle", 0.28, 0.2, 0.2);  // G5
  }

  playWrong() {
    this.playTone(240, "sawtooth", 0.2, 0, 0.12);
    this.playTone(190, "sawtooth", 0.3, 0.15, 0.12);
  }

  playFanfare(stars) {
    if (stars <= 0) {
      this.playWrong();
      return;
    }
    const notes = [523.25, 659.25, 783.99, 1046.5];
    notes.slice(0, stars + 1).forEach((n, idx) => {
      this.playTone(n, "triangle", 0.25, idx * 0.12, 0.2);
    });
  }
}
