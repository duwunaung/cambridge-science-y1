/*
 * Service worker: makes the app work offline and installable.
 *
 * - App files (HTML, CSS, JS, icons) are saved to the cache when the worker installs.
 * - Local files use "stale-while-revalidate": served instantly from the cache,
 *   then refreshed in the background so the next visit gets the latest version.
 * - Tailwind (CDN) and Google Fonts are cached the first time they load online,
 *   so the page keeps its styling when offline.
 *
 * Bump CACHE_VERSION whenever you add, rename or remove files in APP_SHELL.
 */
const CACHE_VERSION = "v1";
const APP_CACHE = `science-y1-app-${CACHE_VERSION}`;
const CDN_CACHE = `science-y1-cdn-${CACHE_VERSION}`;

const APP_SHELL = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./css/styles.css",
  "./js/data/illustrations.js",
  "./js/data/units.js",
  "./js/data/questions.js",
  "./js/data/sample-html-templates.js",
  "./js/services/storage.js",
  "./js/services/sound.js",
  "./js/app/app.js",
  "./js/app/render.js",
  "./js/app/html-apps.js",
  "./js/app/bulk-import.js",
  "./js/app/quiz.js",
  "./js/app/question-editor.js",
  "./js/app/backup.js",
  "./js/app/ui-utils.js",
  "./js/pwa.js",
  "./js/main.js",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./icons/icon-maskable-192.png",
  "./icons/icon-maskable-512.png",
  "./icons/apple-touch-icon.png",
  "./icons/favicon-32.png"
];

// Third-party hosts whose responses we keep for offline use
const CDN_HOSTS = ["cdn.tailwindcss.com", "fonts.googleapis.com", "fonts.gstatic.com"];

self.addEventListener("install", (event) => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(APP_CACHE);
      await cache.addAll(APP_SHELL);
      // Try to pre-cache Tailwind too; ignore failures (e.g. installing while offline)
      try {
        // (cache.add() rejects opaque no-cors responses, so fetch + put instead)
        const tailwindReq = new Request("https://cdn.tailwindcss.com", { mode: "no-cors" });
        const res = await fetch(tailwindReq);
        await (await caches.open(CDN_CACHE)).put(tailwindReq, res);
      } catch (err) {
        console.warn("[SW] Could not pre-cache Tailwind:", err);
      }
      await self.skipWaiting();
    })()
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      const keep = [APP_CACHE, CDN_CACHE];
      const names = await caches.keys();
      await Promise.all(
        names.filter((n) => n.startsWith("science-y1-") && !keep.includes(n)).map((n) => caches.delete(n))
      );
      await self.clients.claim();
    })()
  );
});

async function staleWhileRevalidate(request, cacheName) {
  const cache = await caches.open(cacheName);
  const cached = await cache.match(request, { ignoreSearch: true });
  const network = fetch(request)
    .then((response) => {
      // Opaque (no-cors) CDN responses have status 0 but are still usable
      if (response && (response.ok || response.type === "opaque")) {
        cache.put(request, response.clone());
      }
      return response;
    })
    .catch(() => null);

  if (cached) return cached;
  const fresh = await network;
  if (fresh) return fresh;

  // Offline and not cached: for page loads, fall back to the app's start page
  if (request.mode === "navigate") {
    const shell = await caches.match("./index.html");
    if (shell) return shell;
  }
  return new Response("Offline", { status: 503, statusText: "Offline" });
}

self.addEventListener("fetch", (event) => {
  const { request } = event;
  if (request.method !== "GET") return;

  const url = new URL(request.url);
  if (url.origin === self.location.origin) {
    event.respondWith(staleWhileRevalidate(request, APP_CACHE));
  } else if (CDN_HOSTS.includes(url.hostname)) {
    event.respondWith(staleWhileRevalidate(request, CDN_CACHE));
  }
  // Anything else goes straight to the network as normal.
});
