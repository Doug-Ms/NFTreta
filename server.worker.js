var cacheName = 'pwaTeste+-v1.2';

self.addEventListener('install', event => {

  self.skipWaiting();

  event.waitUntil(
    caches.open(cacheName)
      .then(cache => cache.addAll([

        './index.html',
        './AppIconsNFLogo/Assets.xcassets/AppIcon.appiconset/128.png',
        './AppIconsNFLogo/Assets.xcassets/AppIcon.appiconset/144.png',
        './AppIconsNFLogo/Assets.xcassets/AppIcon.appiconset/152.png',
        './AppIconsNFLogo/Assets.xcassets/AppIcon.appiconset/167.png',
        './AppIconsNFLogo/Assets.xcassets/AppIcon.appiconset/180.png',
        './AppIconsNFLogo/Assets.xcassets/AppIcon.appiconset/196.png',
        './AppIconsNFLogo/Assets.xcassets/AppIcon.appiconset/256.png',
        './AppIconsNFLogo/Assets.xcassets/AppIcon.appiconset/512.png',
      ]))
  );
});

self.addEventListener('message', function (event) {
  if (event.data.action === 'skipWaiting') {
    self.skipWaiting();
  }
});

self.addEventListener('fetch', function (event) {
  //Atualizacao internet
  event.respondWith(async function () {
     try {
       return await fetch(event.request);
     } catch (err) {
       return caches.match(event.request);
     }
   }());

  //Atualizacao cache
  /*event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );*/

});