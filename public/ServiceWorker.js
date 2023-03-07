self.addEventListener("install", e => {
    e.waitUntil (
        caches.open("static").then(cache => {
            return cache.addAll([
                "./", 
                "../src/styles/App.scss", 
                "./favicon.png"]);
        })
    );
});

self.addEventListener("fetch", e => {
    e.respondWith(
        cachescaches.match(e.request).then(response => {
            return response || fetch(e.request);
        })
    );
});