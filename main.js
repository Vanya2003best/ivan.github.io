window.onload = () => {
    'use strict';
    // Проверяем, поддерживает ли браузер Service Worker
    if ('serviceWorker' in navigator) {
      // Регистрируем Service Worker, указывая путь к файлу sw.js
      navigator.serviceWorker.register('./sw.js')
        .then((registration) => {
          console.log('Service Worker зарегистрирован успешно:', registration);
        })
        .catch((error) => {
          console.log('Ошибка при регистрации Service Worker:', error);
        });
    }
  };
  