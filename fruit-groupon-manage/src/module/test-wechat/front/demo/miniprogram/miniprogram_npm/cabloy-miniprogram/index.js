module.exports = (function() {
  const __MODS__ = {};
  const __DEFINE__ = function(modId, func, req) { const m = { exports: {}, _tempexports: {} }; __MODS__[modId] = { status: 0, func, req, m }; };
  const __REQUIRE__ = function(modId, source) { if (!__MODS__[modId]) return require(source); if (!__MODS__[modId].status) { const m = __MODS__[modId].m; m._exports = m._tempexports; const desp = Object.getOwnPropertyDescriptor(m, 'exports'); if (desp && desp.configurable) Object.defineProperty(m, 'exports', { set(val) { if (typeof val === 'object' && val !== m._exports) { m._exports.__proto__ = val.__proto__; Object.keys(val).forEach(function(k) { m._exports[k] = val[k]; }); } m._tempexports = val; }, get() { return m._tempexports; } }); __MODS__[modId].status = 1; __MODS__[modId].func(__MODS__[modId].req, m, m.exports); } return __MODS__[modId].m.exports; };
  const __REQUIRE_WILDCARD__ = function(obj) { if (obj && obj.__esModule) { return obj; } const newObj = {}; if (obj != null) { for (const k in obj) { if (Object.prototype.hasOwnProperty.call(obj, k)) newObj[k] = obj[k]; } } newObj.default = obj; return newObj; };
  const __REQUIRE_DEFAULT__ = function(obj) { return obj && obj.__esModule ? obj.default : obj; };
  __DEFINE__(1598144896684, function(require, module, exports) {
    (function webpackUniversalModuleDefinition(root, factory) {
      if (typeof exports === 'object' && typeof module === 'object') { module.exports = factory(); } else if (typeof define === 'function' && define.amd) { define([], factory); } else if (typeof exports === 'object') { exports.cabloy = factory(); } else { root.cabloy = factory(); }
    })(window, function() {
      return /** ****/ (function(modules) { // webpackBootstrap
        /** ****/ 	// The module cache
        /** ****/ 	const installedModules = {};
        /** ****/
        /** ****/ 	// The require function
        /** ****/ 	function __webpack_require__(moduleId) {
          /** ****/
          /** ****/ 		// Check if module is in cache
          /** ****/ 		if (installedModules[moduleId]) {
            /** ****/ 			return installedModules[moduleId].exports;
            /** ****/ 		}
          /** ****/ 		// Create a new module (and put it into the cache)
          /** ****/ 		const module = installedModules[moduleId] = {
            /** ****/ 			i: moduleId,
            /** ****/ 			l: false,
            /** ****/ 			exports: {},
            /** ****/ 		};
          /** ****/
          /** ****/ 		// Execute the module function
          /** ****/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
          /** ****/
          /** ****/ 		// Flag the module as loaded
          /** ****/ 		module.l = true;
          /** ****/
          /** ****/ 		// Return the exports of the module
          /** ****/ 		return module.exports;
          /** ****/ 	}
        /** ****/
        /** ****/
        /** ****/ 	// expose the modules object (__webpack_modules__)
        /** ****/ 	__webpack_require__.m = modules;
        /** ****/
        /** ****/ 	// expose the module cache
        /** ****/ 	__webpack_require__.c = installedModules;
        /** ****/
        /** ****/ 	// define getter function for harmony exports
        /** ****/ 	__webpack_require__.d = function(exports, name, getter) {
          /** ****/ 		if (!__webpack_require__.o(exports, name)) {
            /** ****/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
            /** ****/ 		}
          /** ****/ 	};
        /** ****/
        /** ****/ 	// define __esModule on exports
        /** ****/ 	__webpack_require__.r = function(exports) {
          /** ****/ 		if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
            /** ****/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
            /** ****/ 		}
          /** ****/ 		Object.defineProperty(exports, '__esModule', { value: true });
          /** ****/ 	};
        /** ****/
        /** ****/ 	// create a fake namespace object
        /** ****/ 	// mode & 1: value is a module id, require it
        /** ****/ 	// mode & 2: merge all properties of value into the ns
        /** ****/ 	// mode & 4: return value when already ns object
        /** ****/ 	// mode & 8|1: behave like require
        /** ****/ 	__webpack_require__.t = function(value, mode) {
          /** ****/ 		if (mode & 1) value = __webpack_require__(value);
          /** ****/ 		if (mode & 8) return value;
          /** ****/ 		if ((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
          /** ****/ 		const ns = Object.create(null);
          /** ****/ 		__webpack_require__.r(ns);
          /** ****/ 		Object.defineProperty(ns, 'default', { enumerable: true, value });
          /** ****/ 		if (mode & 2 && typeof value !== 'string') for (const key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
          /** ****/ 		return ns;
          /** ****/ 	};
        /** ****/
        /** ****/ 	// getDefaultExport function for compatibility with non-harmony modules
        /** ****/ 	__webpack_require__.n = function(module) {
          /** ****/ 		const getter = module && module.__esModule ?
          /** ****/ 			function getDefault() { return module.default; } :
          /** ****/ 			function getModuleExports() { return module; };
          /** ****/ 		__webpack_require__.d(getter, 'a', getter);
          /** ****/ 		return getter;
          /** ****/ 	};
        /** ****/
        /** ****/ 	// Object.prototype.hasOwnProperty.call
        /** ****/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
        /** ****/
        /** ****/ 	// __webpack_public_path__
        /** ****/ 	__webpack_require__.p = '';
        /** ****/
        /** ****/
        /** ****/ 	// Load entry module and return exports
        /** ****/ 	return __webpack_require__(__webpack_require__.s = 0);
        /** ****/ })([
        /* 0 */
        /***/ function(module, exports, __webpack_require__) {

          const Util = __webpack_require__(1);

          const Api = __webpack_require__(2);

          const Data = __webpack_require__(3);

          const Config = __webpack_require__(4);

          module.exports = function(app, options) {
            let _util;

            let _api;

            let _data;

            let _config;

            const cabloy = {
              get app() {
                return app;
              },

              get util() {
                if (!_util) {
                  _util = Util(this);
                }

                return _util;
              },

              get api() {
                if (!_api) {
                  _api = Api(this);
                }

                return _api;
              },

              get data() {
                if (!_data) {
                  _data = Data(this);
                }

                return _data;
              },

              get config() {
                if (!_config) {
                  _config = Config(this, options);
                }

                return _config;
              },

              set config(value) {
                if (!_config) {
                  _config = Config(this, options);
                }

                _config = this.util.extend({}, _config, value);
              },

            };
            return cabloy;
          };

          /***/ },
        /* 1 */
        /***/ function(module, exports) {

          function _typeof(obj) { '@babel/helpers - typeof'; if (typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol') { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj; }; } return _typeof(obj); }

          module.exports = function(cabloy) {
            return {
              preferredLocale: function preferredLocale(locale) {
                locale = locale.toLowerCase().replace(/_/g, '-');
                const locales = cabloy.config.locales;
                if (locales[locale]) return locale;
                const localeShort = locale.split('-')[0];
                return Object.keys(locales).find(function(item) {
                  return item.indexOf(localeShort) === 0;
                });
              },
              login: function login(options) {
                if (cabloy.data.dingtalk) {
                  return this.__login_dingtalk(options);
                } else if (cabloy.data.wechat) {
                  return this.__login_wechat(options);
                } else if (cabloy.data.wxwork) {
                  return this.__login_wxwork(options);
                }
              },
              __login_wechat: function __login_wechat(options) {
                const _this = this;

                return new Promise(function(resolve, reject) {
                  const scene = cabloy.config.base.scene;

                  if (options && options.detail) {
                    _this.__login({
                      scene,
                      code: null,
                      detail: options.detail,
                    }).then(resolve).catch(reject);
                  } else {
                    wx.login({
                      success: function success(res) {
                        const code = res.code;
                        wx.getSetting({
                          success: function success(res) {
                            if (res.authSetting['scope.userInfo']) {
                              wx.getUserInfo({
                                success: function success(detail) {
                                  _this.__login({
                                    scene,
                                    code,
                                    detail,
                                  }).then(resolve).catch(reject);
                                },
                              });
                            } else {
                              _this.__login({
                                scene,
                                code,
                                detail: null,
                              }).then(resolve).catch(reject);
                            }
                          },
                        });
                      },
                    });
                  }
                });
              },
              __login_wxwork: function __login_wxwork(options) {
                const _this2 = this;

                return new Promise(function(resolve, reject) {
                  wx.qy.login({
                    success: function success(res) {
                      const scene = cabloy.config.base.scene;
                      const code = res.code;

                      _this2.__login({
                        scene,
                        code,
                      }).then(resolve).catch(reject);
                    },
                  });
                });
              },
              __login_dingtalk: function __login_dingtalk(options) {
                const _this3 = this;

                return new Promise(function(resolve, reject) {
                  dd.getAuthCode({
                    success: function success(res) {
                      const scene = cabloy.config.base.scene;
                      const code = res.authCode;

                      _this3.__login({
                        scene,
                        code,
                      }).then(resolve).catch(reject);
                    },
                  });
                });
              },
              __login: function __login(_ref) {
                const scene = _ref.scene,
                  code = _ref.code,
                  detail = _ref.detail;
                const url = '/a/'.concat(cabloy.data.container, '/authMini/login?locale=').concat(cabloy.data.locale);
                return cabloy.api.post(url, {
                  scene,
                  code,
                  detail,
                }).then(function(data) {
                  cabloy.data.user = data.user;
                  cabloy.data.instance = data.instance;
                  cabloy.config = data.config;
                  return data.user;
                });
              },
              isObject: function isObject(o) {
                return _typeof(o) === 'object' && o !== null && o.constructor && o.constructor === Object;
              },
              extend: function extend() {
                let deep = true;
                let to;
                let from;

                for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                  args[_key] = arguments[_key];
                }

                if (typeof args[0] === 'boolean') {
                  deep = args[0];
                  to = args[1];
                  args.splice(0, 2);
                  from = args;
                } else {
                  to = args[0];
                  args.splice(0, 1);
                  from = args;
                }

                for (let i = 0; i < from.length; i += 1) {
                  const nextSource = args[i];

                  if (nextSource !== undefined && nextSource !== null) {
                    const keysArray = Object.keys(Object(nextSource));

                    for (let nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1) {
                      const nextKey = keysArray[nextIndex];
                      const desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);

                      if (desc !== undefined && desc.enumerable) {
                        if (!deep) {
                          to[nextKey] = nextSource[nextKey];
                        } else if (this.isObject(to[nextKey]) && this.isObject(nextSource[nextKey])) {
                          this.extend(to[nextKey], nextSource[nextKey]);
                        } else if (!this.isObject(to[nextKey]) && this.isObject(nextSource[nextKey])) {
                          to[nextKey] = {};
                          this.extend(to[nextKey], nextSource[nextKey]);
                        } else {
                          to[nextKey] = nextSource[nextKey];
                        }
                      }
                    }
                  }
                }

                return to;
              },
            };
          };

          /***/ },
        /* 2 */
        /***/ function(module, exports) {

          module.exports = function(cabloy) {
            return {
              request: function request(options) {
                if (options.url.indexOf('/') === 0) {
                  options.url = ''.concat(cabloy.config.api.baseURL, '/api').concat(options.url);
                }

                if (cabloy.data.dingtalk) {
                  if (!options.headers) options.headers = {};
                  options.headers.Authorization = 'Bearer '.concat(cabloy.data.jwt || '');
                } else {
                  if (!options.header) options.header = {};
                  options.header.Authorization = 'Bearer '.concat(cabloy.data.jwt || '');
                }

                return new Promise(function(resolve, reject) {
                  options.success = function(res) {
                    const _statusCode = res.statusCode || res.status;

                    if (_statusCode !== 200) {
                      const error = new Error();
                      error.code = _statusCode;
                      return reject(error);
                    }

                    if (res.data.code !== 0) {
                      const _error = new Error();

                      _error.code = res.data.code;
                      _error.message = res.data.message;
                      return reject(_error);
                    }

                    if (res.data['eb-jwt']) {
                      cabloy.data.jwt = res.data['eb-jwt'];
                    }

                    resolve(res.data.data);
                  };

                  options.fail = function(err) {
                    reject(err);
                  };

                  if (cabloy.data.dingtalk) {
                    dd.httpRequest(options);
                  } else {
                    wx.request(options);
                  }
                });
              },
              get: function get(url, options) {
                options = options || {};
                options.url = url;
                options.method = 'GET';
                return this.request(options);
              },
              post: function post(url, data, options) {
                options = options || {};
                options.url = url;
                options.method = 'POST';
                options.data = data;
                return this.request(options);
              },
            };
          };

          /***/ },
        /* 3 */
        /***/ function(module, exports) {

          module.exports = function(cabloy, options) {
            let _instance = null;
            let _user = null;
            let _jwt = null;
            let _locale = null;

            const _wxSystemInfo = typeof wx !== 'undefined' && wx.getSystemInfoSync();

            const _ddSysmtemInfo = typeof dd !== 'undefined' && dd.getSystemInfoSync();

            let _container;

            if (typeof dd !== 'undefined') {
              _container = 'dingtalk';
            } else if (typeof wx !== 'undefined' && _wxSystemInfo.environment !== 'wxwork') {
              _container = 'wechat';
            } else if (typeof wx !== 'undefined' && _wxSystemInfo.environment === 'wxwork') {
              _container = 'wxwork';
            }

            return {
              get systemInfo() {
                return _wxSystemInfo || _ddSysmtemInfo;
              },

              get container() {
                return _container;
              },

              get dingtalk() {
                return _container === 'dingtalk';
              },

              get wechat() {
                return _container === 'wechat';
              },

              get wxwork() {
                return _container === 'wxwork';
              },

              get jwt() {
                return _jwt;
              },

              set jwt(value) {
                _jwt = value;
              },

              get user() {
                return _user;
              },

              set user(value) {
                _user = value;
              },

              get loggedIn() {
                const user = this.user;
                return user && user.agent.anonymous === 0;
              },

              get instance() {
                return _instance;
              },

              set instance(value) {
                _instance = value;
              },

              get locale() {
                if (!_locale) {
                  _locale = cabloy.util.preferredLocale(this.systemInfo.language);
                }

                if (!_locale) {
                  _locale = cabloy.config.base.locale;
                }

                if (!_locale) {
                  _locale = 'en-us';
                }

                return _locale;
              },

            };
          };

          /***/ },
        /* 4 */
        /***/ function(module, exports) {

          const configDefault = {
            base: {
              scene: 'default',
              locale: 'en-us',
            },
            api: {
              baseURL: '',
            },
            locales: {
              'en-us': 'English',
              'zh-cn': 'Chinese',
            },
          };

          module.exports = function(cabloy, options) {
            return cabloy.util.extend({}, configDefault, options);
          };

          /***/ },
        /** ****/ ]);
    });
    // # sourceMappingURL=index.js.map
  }, function(modId) { const map = {}; return __REQUIRE__(map[modId], modId); });
  return __REQUIRE__(1598144896684);
})();
// # sourceMappingURL=index.js.map
