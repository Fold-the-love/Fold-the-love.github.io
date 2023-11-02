/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/08/09/Start/index.html","70b6fb362d1823b049876caffd452b12"],["/2023/08/10/free_picture_bed/index.html","31f4655ca747faa7861f863da264ba67"],["/2023/08/10/front_matter/index.html","52e1638762722364d787bab47f989765"],["/404.html","f4e8e1a3aaa44a768536c18eaedc7bbe"],["/about/index.html","d9c1b04da6ae3b58bc2629c69734c707"],["/air-conditioner/index.html","ef009f8063cce939a17ba3759438610c"],["/album/index.html","f9e52888ca30c1141d26d7f66451b967"],["/anzhiyu/random.js","9ecd07283618d6dfa43e61f3d2fd462c"],["/archives/2023/08/index.html","ea2e868253eceb046ec953e14c2f185d"],["/archives/2023/index.html","56c510b03089a5f8b49ad4c1d0dc947e"],["/archives/index.html","00dded42adfcb2ed6bac576202871918"],["/bangumis/index.html","e6c51467ae42c1e520ef653d16721892"],["/beautiful-clouds/index.html","36dbd949b01dba4b98cd587826d57881"],["/categories/Hexo/index.html","b4adf1e961a5276e4e4fe8cb7be86d1f"],["/categories/Start/index.html","d80920f25965d8cd377b49bd3a226b16"],["/categories/index.html","ffb7dedcdd8b738ce19805c6f24ce77e"],["/categories/图床/index.html","e30ab90045d97e10c0ed52a2d404451d"],["/charts/index.html","e4094dae575560a4c7776882dd4a01ef"],["/comments/index.html","99a582de2deabcb06433abe0245fe403"],["/css/custom.css","047c0535df2570ebcd547e2962f373ad"],["/css/index.css","2f5d582978c1e1ac994517537af14437"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/equipment/index.html","13b545358a495af84abd3634ad56c855"],["/essay/index.html","056e9aab5a33f27b50dd7e8e4e1c68ff"],["/img/404.jpg","8190796a570d269ef04b777d93d44e6d"],["/img/512.png","701819a72025df4d8e2a111c1c8f2c72"],["/img/Aspire Go’s.png","3eb33f18364ddfffbe2663610e4a115c"],["/img/TX.png","a06dcb59603675174ea7c42787820c68"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/alipay.jpg","582de890e895f28f53ace88f0a338228"],["/img/cd.png","6ea30972e5a4cf9a4aab96a4d8b2e82c"],["/img/cd_tou.png","59405021bc4d52cadd758edda09b8ea5"],["/img/comment_bg.png","fe6bbe142eb7dc7b4f876ae4f5af97d0"],["/img/default_cover.jpg","8b35831759dc5f66710c2839422109d5"],["/img/friend_404.gif","d09ab53cb5bb15079ce8e3d90b157353"],["/img/loading.gif","05fb29f4e677ff6057ef55925f46e9b0"],["/img/logo.png","24ca40688e669a4c4f2ed1ca9a9fb151"],["/img/siteicon/16.png","3de470acb5237bf16318d827443dd5f1"],["/img/siteicon/32.png","802aa4685b3652d5a1b6e5a6323cf3c0"],["/img/siteicon/apple-icon-180.png","ac045b7b6012d72ccbcffb07727c7b11"],["/img/siteicon/manifest-icon-192.maskable.png","87c1b5883834c2164e20e737bd5c2517"],["/img/siteicon/manifest-icon-512.maskable.png","85b846b5722c684339c8bb3e520bcc6a"],["/img/wechat.jpg","295582846da202f3d886c75281f86a07"],["/index.html","c38eb2c0d9d1d97cf2d54ceeaf778e5f"],["/js/day.js","49bff64a4d0ec073e491da79a3ad45f5"],["/js/lunar.js","f03d66cf237b91182bf5e98537721bb8"],["/js/main.js","cdd5970350f40e50e1d9b7dd1557909b"],["/js/search/algolia.js","cdb2dcd4b387fbb5ea25ff877fb946c6"],["/js/search/local-search.js","0f5dddc0c88389610bae38a044ee7a8a"],["/js/tw_cn.js","bd9f7c3f385d1a9a448243c0bf966625"],["/js/utils.js","abc188c87ccf64f31fa3d0eb47649a4f"],["/link/index.html","9af89b07248dd1ce94cebed1526b8366"],["/map/index.html","553d9a2e379d7c68ebb2a6781123dc7f"],["/movies/index.html","503812379343f0ebe5d94418782a6e4a"],["/music/index.html","09bbba6e7d3a82e15b8399549b49c0d3"],["/muyu/index.html","cbd9ff7367ebf1e22c1681cddba5727b"],["/service-worker.js","71523c17dc7eb8d55f146445f65d28aa"],["/shenghuozaobao/index.html","bce9e8d67ca9a29ea83e345ef1ff2fa9"],["/sw-register.js","9d29f053226b134858cf30f948feff3b"],["/tags/CDN加速/index.html","2b5b9c302b26500ac348ed295808c2d7"],["/tags/Front-matter/index.html","7fe21ebc9181666f6c0e9de6ac6e9e11"],["/tags/Github/index.html","c45d952ce4cbfb5cf812fd6dc9c0c3df"],["/tags/Hexo/index.html","0c1b82f5bdc46ac886f2e8127515b382"],["/tags/Start/index.html","f31eb4409a6d9899c297bf82190c1c7d"],["/tags/index.html","88d69b3ab569b654226bb509ae2d5bd2"],["/tags/图床/index.html","b65442e33630412cb7064228dfd89749"],["/todolist/index.html","741f9b191057b38923ec4caef9e9bae6"],["/workbox-afb8f5db.js","ebc1993f97e4ed8be61d781d6a3e3b6e"]];
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
