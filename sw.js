const CACHE_NAME = "ultimate-pong-v2";

const FILES = [
  "./",
  "./index.html",
  "./css/style.css",
  "./js/script.js"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(FILES))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
