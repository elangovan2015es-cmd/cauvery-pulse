/*
 * Cauvery Pulse — Service Worker v4
 * Copyright © 2026 S. Elangovan / Elango Industries Limited
 * Build: 20260414-2230
 */

self.addEventListener('install', function() {
  self.skipWaiting();
});

self.addEventListener('activate', function(e) {
  e.waitUntil(
    caches.keys().then(function(keys) {
      return Promise.all(keys.map(function(k) {
        return caches.delete(k);
      }));
    }).then(function() {
      return self.clients.claim();
    })
  );
});

self.addEventListener('fetch', function(e) {
  e.respondWith(
    fetch(e.request, { cache: 'no-store' })
  );
});
