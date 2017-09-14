const CACHE_NAME = 'xxx';

// List of files which are store in cache.
let filesToCache = [
    '/10clouds_form/',
    '/10clouds_form/css/style.css',
    '/10clouds_form/images/gredient.png',
    '/10clouds_form/js/app.js'
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
