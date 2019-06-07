/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

  "use strict";


  var _ajax = __webpack_require__(1);

  var _ajax2 = _interopRequireDefault(_ajax);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var offset = 0,
      i = 0;
  var loadEvents = document.querySelector('#load-past-editions');
  if (loadEvents) {

    loadEvents.addEventListener('click', function () {
      var pastEditions = document.querySelector('#past-editions ul li');
      var loading = document.querySelector('.loading');
      var params = { action: 'load_past_events', offset: ++offset * 50 };
      (0, _ajax2.default)(params).then(function (params) {
        if (params != '') {
          loading.style.display = 'block';
          setTimeout(function () {
            i = ++i;
            document.querySelector('#past-editions ul').appendChild(document.createElement('span')).setAttribute('class', 'event-' + i);
            document.querySelector('.event-' + i).innerHTML = params;
            // console.log(params)
            loading.style.display = 'none';
          }, 1500);
        } else {
          // console.log('loaded!')
          loading.innerHTML = 'All events were loaded.';
          loading.style.display = 'block';
          loadEvents.style.display = 'none';
          setTimeout(function () {
            loading.style.display = 'none';
          }, 3000);
        }
      });
    });
  }
  setTimeout(function () {
    var templateContainer = document.querySelector('.templateContainer');
    if (templateContainer) {
      templateContainer.style.setProperty('width', '100%', 'important');
      templateContainer.style.setProperty('max-width', '100%', 'important');
    }
    var mcnImages = document.querySelectorAll('img.mcnImage');
    if (mcnImages) {
      for (var _i = 0; _i < mcnImages.length; _i++) {
        mcnImages[_i].style.width = '100%';
      }
    }
  }, 500);

  /***/ }),
  /* 1 */
  /***/ (function(module, exports, __webpack_require__) {

  "use strict";


  Object.defineProperty(exports, "__esModule", {
      value: true
  });

  exports.default = function (data) {

      var prm = function prm(pr) {
          return encodeURIComponent(pr);
      };
      var prms = Object.keys(data).map(function (k) {
          return prm(k) + "=" + prm(data[k]);
      }).join('&');

      return new Promise(function (resolve, reject) {

          var REQ = new XMLHttpRequest();

          REQ.open("POST", ajax_global, true);

          REQ.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

          REQ.onload = function () {

              if (REQ.readyState == 4 && REQ.status == 200) resolve(REQ.response);else reject(Error(REQ.statusText));
          };

          REQ.onerror = function () {
              return reject(Error("Network Error"));
          };
          REQ.send(prms);
      });
  };

  /***/ })
  /******/ ]);
  //# sourceMappingURL=script.js.map
