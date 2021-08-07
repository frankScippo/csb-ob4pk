importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/3.6.1/workbox-sw.js"
);

workbox.setConfig({ debug: false });

workbox.routing.registerRoute(
  /\.(?:js|css)$/,
  new workbox.strategies.NetworkFirst({
    cacheName: "scripts"
  })
);

workbox.routing.registerRoute(
  /\.(?:png|gif|jpg|jpeg|svg)$/,
  new workbox.strategies.NetworkFirst({
    cacheName: "images"
  })
);

workbox.routing.registerRoute(
  /\.(?:ttf|woff|woff2|otf|eot)$/,
  new workbox.strategies.CacheFirst({
    cacheName: "fonts"
  })
);
