/*
 * PWA support: registers the service worker and shows an "Install App" button
 * when the browser offers installation.
 *
 * Service workers only run on https:// or http://localhost, not when
 * index.html is opened directly as a file - the app still works, just not offline.
 */
(function () {
  let deferredInstallPrompt = null;

  function installButton() {
    return document.getElementById("installAppBtn");
  }

  function toast(msg) {
    if (window.app && typeof window.app.showToast === "function") window.app.showToast(msg);
  }

  if ("serviceWorker" in navigator && window.isSecureContext) {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("./sw.js").catch((err) => {
        console.warn("Service worker registration failed:", err);
      });
    });
  }

  // Chrome / Edge / Android: the browser tells us the app can be installed
  window.addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault();
    deferredInstallPrompt = event;
    const btn = installButton();
    if (btn) btn.classList.remove("hidden");
  });

  window.addEventListener("appinstalled", () => {
    deferredInstallPrompt = null;
    const btn = installButton();
    if (btn) btn.classList.add("hidden");
    toast("📲 App ကို ထည့်သွင်းပြီးပါပြီ! (App installed)");
  });

  window.installPwa = async function () {
    if (!deferredInstallPrompt) {
      // Safari (iPhone / iPad) has no install prompt: explain the manual steps
      toast("📲 Share ခလုတ် ➜ \"Add to Home Screen\" ကိုနှိပ်ပါ။");
      return;
    }
    deferredInstallPrompt.prompt();
    await deferredInstallPrompt.userChoice;
    deferredInstallPrompt = null;
    const btn = installButton();
    if (btn) btn.classList.add("hidden");
  };

  // Let the user know when they go offline / come back online
  window.addEventListener("offline", () => toast("📴 Offline ဖြစ်နေပါသည် - App ဆက်သုံးနိုင်ပါသည်။"));
  window.addEventListener("online", () => toast("🌐 Online ပြန်ဖြစ်ပါပြီ။"));
})();
