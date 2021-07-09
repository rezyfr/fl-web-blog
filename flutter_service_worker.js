'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "1bcd77b377a76afa446cafde42f21bda",
"index.html": "7594b9a3b47e77c643678c9576c562da",
"/": "7594b9a3b47e77c643678c9576c562da",
"styles.css": "7107e84ad2566c58723d0a7c0498d95f",
"main.dart.js": "86fb46022a97fec1943992645305c325",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "a0597f94c73bad60b2e5888527e1a4af",
".git/config": "f5b04122a78d5f83f3cbc59d0b6d756f",
".git/objects/92/72d3aa6669caaa35c6f1262ca08868296dae82": "14b691d34f578e88f270924f169a1c6f",
".git/objects/66/dc9a86f0f6a5121d545cb0ae9b4c86cf3cab4b": "0aec438186976ddc5f37292dee6a6701",
".git/objects/6f/2073ee85ef8bff60af5d532000f0d816a7cf74": "3e5f34987de119a489d89f66c62e4ce0",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/35/5b1085715976a4bf799964e387be13df2b66ee": "57624eb3529722a88d7c94888691a6a3",
".git/objects/58/bcb96800c30ec63d1a5a79cee94d487ae07ed9": "ae0a5ad9d9bac53fd983601c623d7d21",
".git/objects/93/0913e6ef7632ca251e453e73fde1083be54a5f": "100939d8031e82782756ee604d668a24",
".git/objects/60/9186cbfc9b47dda8f64dc42c469150fd842d94": "076175e14b2e1cac2ac3a905bab5cb59",
".git/objects/60/0e4fb11816b62339dd1b8593470be45c37efa0": "82633d5c90acc42418f627dba6e1ea00",
".git/objects/34/f17134e83eab491cb3ae1cc7be167cfcd4eca2": "27e1fb6633de8a4949b7962bfb4a9614",
".git/objects/34/5fb7bbf4873add493148a39b8196fb33672c6c": "1d78c9e34d5f621b29fd88885914d646",
".git/objects/5f/08fdc8f6816f02a44deb383ea27b7701584165": "744da5e191fe3f6f33ed51899fc56b8e",
".git/objects/33/db3fd63ef6cdb17e56e42b9e5dca5b0641d7e8": "cd74553d2f04beacb7fd10155563abfc",
".git/objects/a4/e976125048107f6b2330ec3e5d978294e94794": "b8738478d4c43dba96f65a2983f8d139",
".git/objects/ac/6c0102ee7af27fd3e2a509fea2ed79c0b0f735": "d397f48a2dc67c243a907db4c1217c56",
".git/objects/bb/34a38e6e3aa955b75217a668d4c7552a4e387d": "48a5fad55419ad8be41d7eb1ed79704d",
".git/objects/b4/621655a6cf0433d9921ff73c95d471eb81d4f8": "3a7cbb3058da14b9488d0068497e5216",
".git/objects/b4/6c02324f5f77667bab3597d27a97679c4132e6": "fce5f4a0318b28f8d9e3a2b72dd458d4",
".git/objects/bc/a67d5df9b30a94c6ba0b3ce6ab8557a56ac84b": "3cde62e19f77fcff097b4249bd0b5d2e",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/f5/df9fb56c2728cce2b802c6c52b2cf340da89c8": "6de2a3b9a9975cf0537d087d07ded01c",
".git/objects/ca/70fe173d241a3b9393fedc208bd5fea90b90c5": "9a6c9daa6b344de5396954cccd6ec6dc",
".git/objects/fb/fc0e6f51afdaa64eca644698b7738efe6d5ebc": "4d89a304b93ad3e40e733990ac2b54ed",
".git/objects/c1/d1d4b1ad2288c4c5cecefff7a6a607c7e0b2db": "6ec2b36e6470144d16c88b012778b770",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/27/29dd7e2b50af2533fea042095ae6dc1ea9e85b": "dacb0a5947d13ac0ca99bded3b4bb8be",
".git/objects/11/31aa5291c05f6f34b643387382d13c881378a1": "b7f02d7fd4e954d83cce9311c0b43314",
".git/objects/1f/66ef187388d1db998f0cb18cda9562313ffd7d": "7a34b2072a7cfa98d96abca95b48443e",
".git/objects/87/417410bcab9c7657e270796b354a61b3239946": "c783792984669f5138c476c6b87d37e1",
".git/objects/74/c87cb712c4935c2109d5d30fd0825c89b09b5d": "8a798c5a969d26ca271f157e64c8b203",
".git/objects/28/cd523df07c6b95856eea1216de0289adf18112": "50c78038d3a4e9055e9d30aae51bad0e",
".git/objects/8f/7dce05fcfcc0e70f766b9858392c851f776e19": "0a5a7298f960c44f19474ed22c902fa3",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/81/d44b2ce44a6a2fe0ee1f9d97ae51c4a20322ba": "0b0d7907a4275db166f3b55147894c18",
".git/objects/86/9e4d07387a03f4b894491690ef61e2cdf63424": "6c813e7bd309dc3bc98597f409933a34",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/b0c4304a3f1e3401e28b2361f14b6f45cc6b27": "b9e414df58359f0d1e18fca2850e367a",
".git/objects/6b/7752c51f6b094756d21f9b26a15b196dde6b0f": "bfa508639e0baaccea64894e3b3831b2",
".git/objects/6b/8520584434c353f80b1fae0e360a2ee69c622f": "37b358123d2bc051c0296e26d5d48ee5",
".git/objects/5c/1e8cb0c0d43677e4e5fa0ebac50b68768aabbf": "cd560f34e25cbd8c545c0ed982d19b38",
".git/objects/96/b84c8558ba3385966f3d6380aaf2706df5e745": "374dd27d930da59b921f6f518e0ae09a",
".git/objects/96/8b15146da0a33ebfb2179546687aae8bc11638": "45d8c3fd57571adc0c7bab4302848a9e",
".git/objects/3a/fa883a1362c7a6c3528c7e35ea39e020440bbe": "ed721f874b151d0f14c783104af64736",
".git/objects/3f/09a9de687279a4a2c6b6336851a25d1bd4027e": "c3c8f4c58f51d93906ffc207678bd513",
".git/objects/6d/74cb47042331a0f7c02a71991b2faf4577cfe7": "7d2ad01313b068ccf024603c61de1b18",
".git/objects/01/9b8688a2e66d4f8b5b64f7d963b15f3d85ae7c": "942476244f2231a15b46ffb838fa2c39",
".git/objects/6c/cfec3a0ff27b6d3256c9c4ec2fc9242c2b527c": "52a6d0705486f86937aabfa195c772bf",
".git/objects/6c/c5c2bdf03f04e6bf3c4e62686485d1f3101f13": "71a2b8e3baf2a856220ba3cbd3d37a96",
".git/objects/0f/b9b40765088371ac8e3a2204285073d96f4674": "2e2117556a9007e26858c7d09b570fd0",
".git/objects/bf/0aebdac23b58e23cbf1b9f848dfe1c9ffa0797": "e5e920f47f162713322e9f9c69c5f465",
".git/objects/bf/ddb562a59dfd213bbb2a4760b762dd8dc4f942": "7a987a9cc017cd83bea800dedb63863b",
".git/objects/dd/374d9bcfe68300679cf7ef09fdf143a383e260": "9417c64e45420bea2b9d8df499e7a5ce",
".git/objects/dc/73782f7da8139a0176e31cf7165f695b056cd4": "13ee32322da23ac13a9592cb36884852",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/f4b4b3211b33b92d3be8151662f219b45836bf": "d42aef49e349482a01d49c535ea8fa2c",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/cd/d36e499980137cd2854b7e6ae7178b37382cc5": "fa8d207c129667e6ca7331778f7e1876",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/ce/d2efbc6f24f14399ad9e53c8985b1b4e6e2283": "9094e09bb1ff254f04ffbfdda70dfa09",
".git/objects/e0/eda300f43f99393c5900b123e4a84717439ed6": "cbcd8d0ddc15d42710a232dab4bd1475",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/79/7b5c330e545f907cb110cf717f3d2799b860bf": "589c0a15a224a445dd4e34a4326abb08",
".git/objects/41/bc11408581cd7e77fb7f89ede005d81ef92ecf": "aa14b73b0321cf96dd34e20f5e6586e5",
".git/objects/8c/b30e5d587494ecae7d0b07e826a6e827ec6711": "97c068270e044604fa516ed46ac2e2e4",
".git/objects/8c/6a658ec0ff69fa2c7656044964b740e38600cb": "bffb0381a81d74041e4086c41d6fa8e4",
".git/objects/85/4b07d897183f38bbe94a8619535bd9f0fb5dde": "77cdc07e3913d6bb53618816671ee4fc",
".git/objects/71/d0a359064aa65c67da1a78a126a17e0779eab6": "142e869657a52c5b9ae8312141d804b6",
".git/objects/76/0d4928895b7e1ed319849434e132febf126548": "bca4d666fa514581034ce943aeca7f23",
".git/objects/49/cc0392210b0db614301ac024825a979f345c88": "0278e111506e62fa9b5acbfe60735b97",
".git/objects/8b/60ebea8a438c73ec496ffd1527c8a80144db23": "8efa3c8e1fec8d1671a58933666691e8",
".git/objects/7f/1860bda5ac348e6da502a72fd7d19b06151e05": "1c44604ef2e81df49e2425f309db317a",
".git/objects/14/285a0fe424e0c89aec15f0b7363d1422a3a2fe": "ac61502edd057afd1d8ea48dfcd3f193",
".git/objects/14/d3d5f2b434a6f2a53ab7664d8fd3b5c4d02fa7": "b900f90fcc975baaca8808f2e0996e2a",
".git/objects/22/2ae433871b340083ff40f72dfb3a269a2aeba5": "b03e5917c58b71e7a5c181017f3c497e",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "0aebccfd5866bfc3e7c8f625230c22f7",
".git/logs/HEAD": "091a7097d91068a58ff9f9228bea93be",
".git/logs/refs/heads/master": "091a7097d91068a58ff9f9228bea93be",
".git/logs/refs/remotes/origin/master": "9794b51e71b448f0a23865393308f49a",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/refs/heads/master": "7b6ef6398346027cb85e0b1a47db9a61",
".git/refs/remotes/origin/master": "7b6ef6398346027cb85e0b1a47db9a61",
".git/index": "bd5432774db30fbc8f2b4630b2a528db",
".git/COMMIT_EDITMSG": "7b1767f324d7141e8324722621831317",
"assets/AssetManifest.json": "e4da07da69035a69307edbad0c2ac1dc",
"assets/NOTICES": "03bfc7633e04b289c1cec50bbe9d9ce8",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/splash_screen.json": "10f3d71e76ebd930bc6ce87a1f6974ff",
"assets/assets/icon_instagram.svg": "0edab90859dd07a957f7c280dfc20fab",
"assets/assets/icon_twitter.svg": "34195aad2141276b3cb43ca50a7872c1",
"assets/assets/icon_github.svg": "1d785e90715c7717545caec7f8743f20",
"assets/assets/icon_linkedin.svg": "d2886dfd4ccd6c43de2bfaac44d1eed4"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
