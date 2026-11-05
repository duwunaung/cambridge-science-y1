/* Sound toggle and toast notifications. */
Object.assign(ScienceApp.prototype, {
  /* ---------------- SOUND & TOAST UTILITIES ---------------- */
  toggleSound() {
    this.sfx.enabled = !this.sfx.enabled;
    document.getElementById("soundToggleBtn").textContent = this.sfx.enabled ? "🔊" : "🔇";
    this.showToast(this.sfx.enabled ? "🔊 အသံဖွင့်ထားပါသည်" : "🔇 အသံပိတ်ထားပါသည်");
  },

  showToast(msg) {
    const toast = document.getElementById("toastNotice");
    document.getElementById("toastMessage").textContent = msg;
    toast.classList.remove("hidden");
    clearTimeout(this.toastTimer);
    this.toastTimer = setTimeout(() => {
      toast.classList.add("hidden");
    }, 3200);
  }
});
