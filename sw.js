const CACHE_NAME = 'lili-pet-v34.2';
const assets = ['./', './index.html', './20260508_043325_0000.png', './cat_orange.png', './ig.png', './line.png'];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(assets)));
});

self.addEventListener('fetch', (e) => {
  e.respondWith(caches.match(e.request).then(res => res || fetch(e.request)));
});
