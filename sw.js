// Имя кэша для вашего PWA-приложения
var cacheName = 'piac-pwa';

// Список файлов, которые необходимо кэшировать
var filesToCache = [
  '/',
  '/index.html',
  '/style.css',
  '/js/main.js'
];

// Событие установки Service Worker: открытие кэша и добавление указанных ресурсов
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll(filesToCache);
    })
  );
});

// Событие fetch: перехват сетевых запросов и возврат данных из кэша при наличии
self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
window.onload = () => {
    'use strict';
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('./sw.js')
        .then(() => {
          console.log('Service Worker registered successfully.');
        })
        .catch((error) => {
          console.log('Service Worker registration failed:', error);
        });
    }
  };
  