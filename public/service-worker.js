self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("codeiq-cache").then((cache) => {
      return cache.addAll(["/", "/offline.html"]);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
