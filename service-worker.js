const CACHE_NAME = 'xxx';

// List of files which are store in cache.
let filesToCache = [
    '/',
    '/css/style.css',
    '/images/gredient.png',
    '/js/app.js'
];

self.addEventListener('install', function (evt) {
    evt.waitUntil(
        caches.open(CACHE_NAME).then(function (cache) {
            return cache.addAll(filesToCache);
        }).catch(function (err) {
            // Snooze errors...
            // console.error(err);
        })
    );
});
