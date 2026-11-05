# Cambridge Primary Science Year 1 – Quick Test

A kid-friendly science quiz game for Cambridge Primary Science Year 1, in English and Myanmar (Burmese).
It runs entirely in the browser — no server or database needed — and can be installed as an app (PWA) that works offline.

**Live app:** https://duwunaung.github.io/cambridge-science-y1/

## Features

- 6 units × Focus / Practice / Challenge levels, 162 built-in questions with illustrations
- Levels unlock with stars; points and progress are saved in the browser
- Teacher Studio: add and edit questions, bulk-import questions, and add custom HTML mini-games
- Backup to a `.json` file and local restore points
- Installable on phones, tablets and computers, and works offline after the first visit

## Run it locally

Service workers (offline + install) need `https://` or `localhost`, so serve the folder instead of double-clicking `index.html`:

```bash
python3 -m http.server 8765
```

Then open http://localhost:8765.

## Project structure

```
index.html               page markup
manifest.webmanifest     PWA app info (name, icons, colours)
sw.js                    service worker (offline caching)
css/styles.css           custom styles (Tailwind is loaded from its CDN)
icons/                   app icons
js/
  data/                  illustrations, units, questions, sample HTML labs
  services/              storage (localStorage + IndexedDB) and sound effects
  app/                   ScienceApp class, split by feature (quiz, render, backup, ...)
  pwa.js                 service worker registration + Install button
  main.js                starts the app
```

Scripts are plain `<script>` tags loaded in order (data → services → app → main).

## Updating the app

When you add, rename or remove files, update the `APP_SHELL` list in `sw.js` and bump `CACHE_VERSION`
(e.g. `"v1"` → `"v2"`) so installed copies pick up the change.
