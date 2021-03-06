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


var _jquery = __webpack_require__(1);

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _jquery2.default)(document).ready(function () {
    (0, _jquery2.default)('[data-toggle="tooltip"]').tooltip();

    if ((0, _jquery2.default)('#indexSlider').length > 0) {
        (0, _jquery2.default)('#indexSlider').owlCarousel({
            items: 1,
            autoHeight: true,
            dots: false,
            nav: true
        });
    }

    if ((0, _jquery2.default)('.js-placeholder-search').length > 0) {
        (0, _jquery2.default)('.js-placeholder-search').select2();
    }
    if ((0, _jquery2.default)('.js-placeholder-single').length > 0) {
        (0, _jquery2.default)('.js-placeholder-single').select2({
            minimumResultsForSearch: 10
        });
    }

    // filter
    (0, _jquery2.default)(".filter__item").on("click", function () {
        var filter = (0, _jquery2.default)(this).attr("id");
        var leftFilterContainer = (0, _jquery2.default)(".filter .container").offset().left;
        var leftFilter = (0, _jquery2.default)(this).offset().left;
        (0, _jquery2.default)(".filter-dropdown").each(function () {
            if ((0, _jquery2.default)(this).data("filter") === filter) {
                (0, _jquery2.default)(this).css("left", leftFilter - leftFilterContainer);
                (0, _jquery2.default)(this).slideToggle();
            } else {
                (0, _jquery2.default)(this).css("display", "none");
            }
        });
    });
    (0, _jquery2.default)(".filter__item#filter-security").on("click", function () {
        (0, _jquery2.default)(this).toggleClass("filter__item--active");
    });

    (0, _jquery2.default)(window).scroll(function () {
        if ((0, _jquery2.default)(this).scrollTop() > 150) {
            // $('#scroll_top').css('opacity','1');
            (0, _jquery2.default)('.sticky-top').addClass("scroll");
            (0, _jquery2.default)('.sticky-top .header-top').slideUp();
        } else if ((0, _jquery2.default)(this).scrollTop() < 60) {
            // $('#scroll_top').css('opacity','0');
            (0, _jquery2.default)('.sticky-top').removeClass("scroll");
            (0, _jquery2.default)('.sticky-top .header-top').slideDown();
        }
    });
});

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = jQuery;

/***/ })
/******/ ]);