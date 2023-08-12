/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/08/09/Start/index.html","74611d2612a3b7f794f97418d6d0d6d7"],["/2023/08/10/free_picture_bed/index.html","12b80afa626cee8bd5cd6772cca1186b"],["/2023/08/10/front_matter/index.html","efe8569eda35b26160e87bec636e44d5"],["/404.html","a70ccd1d8486d0d10fda8c72e84197e8"],["/about/index.html","aa54ed89f29af1c5e2fb1c68da17719d"],["/air-conditioner/index.html","6e451b0462884a0756370688c986a973"],["/album/index.html","6a143bae05badae41520d4ee424aefab"],["/anzhiyu/random.js","b8f8918ed1117d57ef44c9b591f350b6"],["/archives/2023/08/index.html","15e797e52e6124d9cbf9277e2a5f631e"],["/archives/2023/index.html","2cc1175dd6af10238d4c50ee18b42b89"],["/archives/index.html","ddfea4329cb44ab0d5d8b3da4a7ff690"],["/bangumis/index.html","5cbc28e440138c2519d293bc5aee5118"],["/beautiful-clouds/index.html","a6b3ee590d0e2e6e221fc2e795b9fabd"],["/categories/Hexo/index.html","f61224c491f5e906d393c21ec8b7cb6e"],["/categories/Start/index.html","f03323ac7485b4026157f86a70705636"],["/categories/index.html","61a8f76169286d5f2cefff2ec1c046f3"],["/categories/图床/index.html","968b321be7d6e92c3fe6b78d0f2769d9"],["/charts/index.html","5a13e508945189d80aac8d45112269e9"],["/comments/index.html","6bd16eca7739e5d9c4c6976c6239cd19"],["/css/custom.css","047c0535df2570ebcd547e2962f373ad"],["/css/index.css","6fa05aecd81eeefce15e51790269ab3a"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/equipment/index.html","8d2996132206cd743f7e30f1c700f62e"],["/essay/index.html","5645ce44e9c541e77298893c957a374f"],["/img/404.jpg","8190796a570d269ef04b777d93d44e6d"],["/img/512.png","701819a72025df4d8e2a111c1c8f2c72"],["/img/Aspire Go’s.png","3eb33f18364ddfffbe2663610e4a115c"],["/img/TX.png","a06dcb59603675174ea7c42787820c68"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/alipay.jpg","582de890e895f28f53ace88f0a338228"],["/img/cd.png","6ea30972e5a4cf9a4aab96a4d8b2e82c"],["/img/cd_tou.png","59405021bc4d52cadd758edda09b8ea5"],["/img/comment_bg.png","fe6bbe142eb7dc7b4f876ae4f5af97d0"],["/img/default_cover.jpg","8b35831759dc5f66710c2839422109d5"],["/img/friend_404.gif","d09ab53cb5bb15079ce8e3d90b157353"],["/img/loading.gif","05fb29f4e677ff6057ef55925f46e9b0"],["/img/logo.png","24ca40688e669a4c4f2ed1ca9a9fb151"],["/img/siteicon/16.png","3de470acb5237bf16318d827443dd5f1"],["/img/siteicon/32.png","802aa4685b3652d5a1b6e5a6323cf3c0"],["/img/siteicon/apple-icon-180.png","ac045b7b6012d72ccbcffb07727c7b11"],["/img/siteicon/manifest-icon-192.maskable.png","87c1b5883834c2164e20e737bd5c2517"],["/img/siteicon/manifest-icon-512.maskable.png","85b846b5722c684339c8bb3e520bcc6a"],["/img/wechat.jpg","295582846da202f3d886c75281f86a07"],["/index.html","c94f0230f4d6b090eef65a62f5c31bcd"],["/js/day.js","49bff64a4d0ec073e491da79a3ad45f5"],["/js/lunar.js","f03d66cf237b91182bf5e98537721bb8"],["/js/main.js","cdd5970350f40e50e1d9b7dd1557909b"],["/js/search/algolia.js","cdb2dcd4b387fbb5ea25ff877fb946c6"],["/js/search/local-search.js","0f5dddc0c88389610bae38a044ee7a8a"],["/js/tw_cn.js","bd9f7c3f385d1a9a448243c0bf966625"],["/js/utils.js","abc188c87ccf64f31fa3d0eb47649a4f"],["/link/index.html","ca913615201af1863458c1eebef2932f"],["/map/index.html","77700a3cbd88c3591b44b4336feb10ee"],["/movies/index.html","9c82cf4141c1730b65286c78c9ab15ea"],["/music/index.html","cdf9df00c983f3fbaf4c5d9561036518"],["/muyu/index.html","aef14559a44c24455541d320371f175c"],["/service-worker.js","cc6d6534f3f912536b47c6a9ff880b85"],["/shenghuozaobao/index.html","ce6a5d5a83bb08154fbc55b8702ae242"],["/sw-register.js","58c035002de78dd88f9d847637d48d22"],["/tags/CDN加速/index.html","1cf065c9920ff8ec49d98ecd82ffeb95"],["/tags/Front-matter/index.html","81ba585c06aa94f754d127e9dede9edd"],["/tags/Github/index.html","c8b2afc2c643f0982038e6713d6e5fd5"],["/tags/Hexo/index.html","162c41b77243417d47bb63d31f673fc9"],["/tags/Start/index.html","c8d693d3b259aa95a3017774ec0d81f6"],["/tags/index.html","7ce8c7b5cc4b5e230c40bc2d705e894c"],["/tags/图床/index.html","fcab3eb2690c9fa3e4923ebb9d0f1c9c"],["/todolist/index.html","173709c4bcc1bc8d7a3dbd0c571ac473"],["/workbox-afb8f5db.js","ebc1993f97e4ed8be61d781d6a3e3b6e"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
