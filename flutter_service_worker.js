'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "8179a11cc19806f90bd0159e6c1fc97f",
".git/config": "026691916eb4f4a72993c0cc561570b0",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "3d9a344140135b2a38fe43a77156996b",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "abd641094ded9dc4b59d3d2d31d26ca7",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "aaf04d1bdb99bbe91b7041623110aae7",
".git/logs/refs/heads/main": "165add43ceefa22602cb41de129a5e6d",
".git/logs/refs/remotes/origin/main": "f6d3478822832585286181a2477808b8",
".git/objects/00/a50cba703b86731cc50af13d403d07d0d3f8be": "26a89205f1a3db5a396182325b6b0f56",
".git/objects/02/a8c39d7fd0f5c214b6d5eabc80bc58e28151b1": "f86bdeeb8d076c36a53aee751bed9db0",
".git/objects/07/89f1b37caa3e01791bf3b02f4c2deb2c1b35ea": "898be7a9868651d2f3aec8c9b5c9c595",
".git/objects/08/451c5702be18c288caf48206a84af0b1aa19b2": "2b02faa6c43d0d1659996100b7e5cdf3",
".git/objects/0e/29a3762be593827514b6ac5411752db553b5ab": "dbefc6b4a2dfab216d0d388876b9f8b5",
".git/objects/19/3a93c4ba4ea7e7cf6e2a468ac60b277a1a426f": "ddfbc9c02633b1ce95820b3d9c54e574",
".git/objects/1d/08869cb92baabf19316780ecebfda6f8f0ba27": "2e03fb44a3637b852f14c244458d5e83",
".git/objects/1d/c9f20b286956cfb590ed03efd55321f249f15c": "8fdd5b42994a14dd5e05b4691af72b2a",
".git/objects/23/3b1d513aecd6e760ab87f56dbb0f9f1be443ef": "a6a4bd14c0a175fd2a0fd754e333515d",
".git/objects/24/16124836b0581940fabb0b217cb4d7793bedbc": "1012a8ce88e5aa17cb8888fe22de9c1a",
".git/objects/28/78d3f069559aab8f4e3cab6ea25b200b45b7ff": "e5f72e75722e1de011970b986f1f45c0",
".git/objects/2f/c5395100cc33da29b578d25703a1f58c16bb62": "8f9c52da48aec9da4cbe8bcaa59a3ad7",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/35/6bc598b6e8f3e450c7d6720d27616c17a9d99b": "3e44b04ebbf79f5b144a5cac59061cea",
".git/objects/36/b9fbb51027f98503944f4f9e5ad9050b3550d3": "947a33a1598bef5595b208cdeef95646",
".git/objects/3b/5d692803091a77dc1254176a4cfae9832594d5": "598705b153e97d440e60b974b5465c3f",
".git/objects/3f/0fd1bfed93921275269bb568e20874ed553ce2": "e6c1065c78f05cbbded2783351d1a9ca",
".git/objects/40/c8f63b3551c2b69a6889cf63d6efc0df3b70d3": "39bc131b3f516922c49dd9c1bcd18f8e",
".git/objects/42/9200e6df2b22768191146f360f13ddbffde708": "0a52428a2524b79beb211516f4410e49",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/6e0f1f0a7e344c42ceca98ff1e1f868e41fe76": "7f2725b7dd69c4fb554f9c6ef54df6c4",
".git/objects/4f/35be2b2cc89c1d63050c56fb1f0320394eb8fc": "4de44c2e7a98595fd25776abf950262d",
".git/objects/57/4f0fd5b1d44fa16c40d4a6a810978d3e14e99e": "20aec8d807fd1c7825d1132df6cbc85e",
".git/objects/58/93a424c56f90a013c6675638671ca80c5a615d": "a4a08dd794b8170fd2dfb87e6263b58e",
".git/objects/5c/9211e78e559f921644a421a80b0f09a826c2a6": "759c08be354ce679c3d06729227c35f0",
".git/objects/5d/9bbfead0b047d1ab94723c5cc3f7cff000e972": "78ef74279f0532129193ca6ca3cff081",
".git/objects/6d/57c2032b540257acfbcef972e1cfadcf5d89eb": "87f95cea9a37fc80df7684763a8fb9e7",
".git/objects/6f/c70be652b0809f9e38fd8607c3988cbe089ea1": "42a97cab3389853b640aaac9a73942bd",
".git/objects/76/acb4b87e5bcaca7147405d9a2aff3b96264fd9": "44ff949d03df810f416fe9183840470b",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/84/a221ccb839aefd82827a2d0a6dd698f89853d1": "24490695a6ae73d0f655fe57e9ecb217",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/6abcc6418eb3942f83791c8ce0e6018873629c": "47c7c18d8173c3a4d34b846681f0af1d",
".git/objects/8f/1d4ec238da5b4ad0a5ffde5d434a8770381c83": "233ef4b6bfb5ecbc0a7ffb0a72f4316c",
".git/objects/8f/35933e7d04a232326017f877048a9d491f3111": "f978199ceb243813ddbe89dbdbe62f28",
".git/objects/90/c753752eaf1af378e23f1f043429f8461bb730": "490ef23928995c9e3c88b12be6c9b2a2",
".git/objects/90/fa7a6fa9dbbd1a3a14696aeffaa02a32a21668": "f37a15dabf88a9234575f64d119d4abb",
".git/objects/96/603f89aff34836f6f95b7dd0839dd782a6fc86": "2e75a8ded219cd74562343a18d897376",
".git/objects/9b/d5739cb6ecf1aa74706a0f71c7c4270b3a70e8": "f4c5bcc13447ec7b56d862de5d597316",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ac/233e191acd6895c0c650bcbfda9b44034a8fee": "2cec86f95ec8ef8434625565fd480d82",
".git/objects/ac/8f3437c7f06907a6caecc81228803847949390": "48f2b83040eeba65eb94ee6e3a02300e",
".git/objects/ad/8174d3e3649c8b191fe1b0ea0e3dd336922997": "f09993e837f76db1ad906bf58a7bad2d",
".git/objects/b3/a92589ac06a23230f35a559eebd2a52ecd290a": "94e291d218ce30c80d25e6daf1edb75f",
".git/objects/b6/5e298422a3af2199b67c71f86970da33999435": "6c5d86f6ab2cf003285c5d1b5434588c",
".git/objects/b6/5f4960bcfd808800798329d00f1b362446b52b": "4ec7576d22854d11b4a56b2f37eeffb4",
".git/objects/b7/6a1fad90ef38e367f702392387c6b7171c8420": "f49b833f7eda4a3a20f1d57f49c57373",
".git/objects/ba/b21cb03c7982889217485abd813c778e548e9f": "37131675c7bf2bc36eb901451048f9cd",
".git/objects/bf/e3580916b9f1c1337f48b8ac92cf907299930c": "5d9831e779989d1694a7c1e09c6b1942",
".git/objects/c4/d3c832ac0d9ac99b9338aff3b1054b4f9ecbb6": "d13c10d2cbcc7b5520722d0acd92a5af",
".git/objects/c5/681745bf5e23ed4d46d2ab63334cc4ea5d5e96": "b4d53cd7d340eedd7b3c9ec588003e5b",
".git/objects/c6/bdfb3df389aae255603f5479252bbe6dc3b9f6": "e794e778c8d4463a538f12b14a031995",
".git/objects/cd/99c6db4c6939144021a7ef17cefaf4106ffeb5": "85d16aa37cac8e81f427d860431c2f5e",
".git/objects/d2/909461388d69046446cc8cd8faf25ddb147c2b": "9545b3bab3cddbfc0a5e9d55ea3c0f01",
".git/objects/d2/d5b6309422e45990d7f5facf5c78715d295f56": "74a4354c997f7a8cf5155d7045be7a6e",
".git/objects/d6/70c6bc3157fe5d0b370e852ca91224c0fe2fa7": "3977861fee792cd8a175824ee0d7382b",
".git/objects/d7/f9779e1a43f5152257391153d5acaa333fba4c": "c398b668855d1a98f1c8fc308a301c3a",
".git/objects/d8/ed6e48dc89471af50afe414eea126b91ca23d6": "90cb4e2f252fe5a5a8d985782011f16c",
".git/objects/da/dd619e0cf249647d382dcdcea3621c928a9d11": "af03fd6d1058ef47bbf46eeb2ef13167",
".git/objects/de/7da5a5c8daa3dba04569171f3214a7c6f12eb3": "022f779ca6c311ae30323964b9592974",
".git/objects/e5/900f8cf143cb03dd9a44d29d5e56a169da65c3": "34e7a1720b984544e480a5f76b1ffe7d",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/52465f94cc701abd5cddf0da26bbd0bba7809e": "5856abef58009b7c950ae8a6f5e1a9f9",
".git/objects/f0/1a923f9c41266812437aeceda911773ebd34a1": "b15feda1f18570131ed107e23951b716",
".git/objects/f0/74624d68404e5ed30b2b1735df8aee51d3b430": "e6de149f512e0cb5571be631af09072c",
".git/objects/f2/1ead34c56a9c78531a01a510990a6953e5f2a8": "668ce3e3aa89d371752da6cef210d7de",
".git/objects/fb/75f1a68f9f7d3e03eae95748d6e13cccb9d95c": "f67c02aeb1186c30ef8b431e25face04",
".git/ORIG_HEAD": "4088269140a2caeb9a01d15652221f3a",
".git/refs/heads/main": "2b4685282db2a93e1e20c0ad8e15546a",
".git/refs/remotes/origin/main": "2b4685282db2a93e1e20c0ad8e15546a",
"assets/AssetManifest.json": "e8caa5f1c5f8ff0bfcb834d9c7772d9a",
"assets/assets/images/farmer_ccexpress.png": "dd04594ee2a8a192ac7b154b18a1461c",
"assets/assets/images/header.png": "35ac44e57caa8cef7ae0ca3f68a55c4b",
"assets/assets/images/ibuibu.png": "5ced2b58417707edad7016a0a9b9c992",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "a470db84d3475bc71f1a7ca6ce2d06b2",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "43fa9e17039a625450b6aba93baf521e",
"canvaskit/canvaskit.wasm": "04ed3c745ff1dee16504be01f9623498",
"canvaskit/profiling/canvaskit.js": "f3bfccc993a1e0bfdd3440af60d99df4",
"canvaskit/profiling/canvaskit.wasm": "a9610cf39260f60fbe7524a785c66101",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/farmer_192.png": "641110f299590a61773897e1325482f2",
"icons/farmer_512.png": "2f6e0bb73b3c87d64402a641ee541bf7",
"index.html": "859b09896be861616e39fc01a16dcedd",
"/": "859b09896be861616e39fc01a16dcedd",
"main.dart.js": "1ed771ba494cfa03b4a45655e97dfab4",
"manifest.json": "c1aafa4553b10b96adb5fb98371c56bc",
"version.json": "c4e35e29036ee2e58d24753160e6c082"
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
