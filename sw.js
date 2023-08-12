/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/08/09/Start/index.html","b1322dda0690b4590667134e2a2cc9bc"],["/2023/08/10/free_picture_bed/index.html","2f0bf4b24e96f24a28d84a95d9a728cb"],["/2023/08/10/front_matter/index.html","722d98b92205b05482cd7529f271d997"],["/404.html","5f610ceb614288b39b668653d1470f75"],["/about/index.html","b94316ee30285646ced427ab73c34869"],["/air-conditioner/index.html","04d2bf86133f7ae775d2cc1f23cf338a"],["/album/index.html","cf2ff9b795dcacee7461714e7c562f26"],["/anzhiyu/random.js","9ecd07283618d6dfa43e61f3d2fd462c"],["/archives/2023/08/index.html","ae23987c18bbfdde2676b0049a90b974"],["/archives/2023/index.html","2555341f30885299f73ec0d9157b2413"],["/archives/index.html","dbcb04d897c1c97390c48daf9317ef07"],["/bangumis/index.html","2482815c2824873ef5ae7328a6af0a5c"],["/beautiful-clouds/index.html","330fccc1e99f5ff26063c6c31038ebca"],["/categories/Hexo/index.html","a65da7b79d31d9d1ec5ff35736244039"],["/categories/Start/index.html","5ab05bb267d514b63a8df024108e43c6"],["/categories/index.html","7572e26ac1fc891ed5a66eb8b051384b"],["/categories/图床/index.html","1f9b90b42917f5c2f12cedda9ca07c89"],["/charts/index.html","017791a3ebb569eacff211a1d11e905e"],["/comments/index.html","a8868b5243f9be878a99992204c8dd22"],["/css/custom.css","047c0535df2570ebcd547e2962f373ad"],["/css/index.css","6fa05aecd81eeefce15e51790269ab3a"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/equipment/index.html","f7b9684b06708fbeef74043c741e12d9"],["/essay/index.html","3af1f6d1d673251b8355564c20c03a1a"],["/img/404.jpg","8190796a570d269ef04b777d93d44e6d"],["/img/512.png","701819a72025df4d8e2a111c1c8f2c72"],["/img/Aspire Go’s.png","3eb33f18364ddfffbe2663610e4a115c"],["/img/TX.png","a06dcb59603675174ea7c42787820c68"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/alipay.jpg","582de890e895f28f53ace88f0a338228"],["/img/cd.png","6ea30972e5a4cf9a4aab96a4d8b2e82c"],["/img/cd_tou.png","59405021bc4d52cadd758edda09b8ea5"],["/img/comment_bg.png","fe6bbe142eb7dc7b4f876ae4f5af97d0"],["/img/default_cover.jpg","8b35831759dc5f66710c2839422109d5"],["/img/friend_404.gif","d09ab53cb5bb15079ce8e3d90b157353"],["/img/loading.gif","05fb29f4e677ff6057ef55925f46e9b0"],["/img/logo.png","24ca40688e669a4c4f2ed1ca9a9fb151"],["/img/siteicon/16.png","3de470acb5237bf16318d827443dd5f1"],["/img/siteicon/32.png","802aa4685b3652d5a1b6e5a6323cf3c0"],["/img/siteicon/apple-icon-180.png","ac045b7b6012d72ccbcffb07727c7b11"],["/img/siteicon/manifest-icon-192.maskable.png","87c1b5883834c2164e20e737bd5c2517"],["/img/siteicon/manifest-icon-512.maskable.png","85b846b5722c684339c8bb3e520bcc6a"],["/img/wechat.jpg","295582846da202f3d886c75281f86a07"],["/index.html","a023196584d5f9b7ca6af97e37f0616a"],["/js/day.js","49bff64a4d0ec073e491da79a3ad45f5"],["/js/lunar.js","f03d66cf237b91182bf5e98537721bb8"],["/js/main.js","cdd5970350f40e50e1d9b7dd1557909b"],["/js/search/algolia.js","cdb2dcd4b387fbb5ea25ff877fb946c6"],["/js/search/local-search.js","0f5dddc0c88389610bae38a044ee7a8a"],["/js/tw_cn.js","bd9f7c3f385d1a9a448243c0bf966625"],["/js/utils.js","abc188c87ccf64f31fa3d0eb47649a4f"],["/link/index.html","ab76d388030a24a83c22b099c8ac3ce6"],["/map/index.html","5045cb4fa8438cd8a4cebc9d74652d42"],["/movies/index.html","816a47736328315040618a11c94803f9"],["/music/index.html","ae97af10fcfd0511d058b2fc1b571edd"],["/muyu/index.html","f5f524061956d77495ebe4e881f0279d"],["/service-worker.js","3d5f8c2f93fc220b75f48c397f398a18"],["/shenghuozaobao/index.html","be672a0fbd002d20a433b4b32bb6f41e"],["/sw-register.js","a68d9d69436e3e29e9f1cf4f1103dac2"],["/tags/CDN加速/index.html","aa55321913c5073d857798193bd3553c"],["/tags/Front-matter/index.html","e4097765539913c80988f0cd870a8eff"],["/tags/Github/index.html","8b7457c48017fe276985afe3c805be2b"],["/tags/Hexo/index.html","a8ec8d37a7d99ee7f83b5d1611856637"],["/tags/Start/index.html","1601ec5b9b3284da5ef9f462b1a4b3a4"],["/tags/index.html","2e59e32de7c780873b537fd55f2c68db"],["/tags/图床/index.html","76505884efcdf70a20d17b2682bf7027"],["/todolist/index.html","cbaa41cd645f419ca6c9612e592e0997"],["/workbox-afb8f5db.js","ebc1993f97e4ed8be61d781d6a3e3b6e"]];
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
