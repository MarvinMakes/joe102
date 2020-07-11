(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app"],{

/***/ "./assets/css/app.css":
/*!****************************!*\
  !*** ./assets/css/app.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./assets/js/app.js":
/*!**************************!*\
  !*** ./assets/js/app.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.timers */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_app_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/app.css */ "./assets/css/app.css");
/* harmony import */ var _css_app_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_app_css__WEBPACK_IMPORTED_MODULE_1__);


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */
// any CSS you import will output into a single css file (app.css in this case)
 // Need jQuery? Install it with "yarn add jquery", then uncomment to import it.
// import $ from 'jquery';

var ClaimChanger = function ClaimChanger() {
  var _this = this;

  _classCallCheck(this, ClaimChanger);

  this.claims = document.getElementsByClassName('claim');
  this.activeClaim = 0;
  setInterval(function () {
    _this.claims[_this.activeClaim].classList.remove('active');

    var nextClaim = (_this.activeClaim + 1) % _this.claims.length;

    _this.claims[nextClaim].classList.add('active');

    _this.activeClaim = nextClaim;
  }, 5000);
};

new ClaimChanger();

/***/ })

},[["./assets/js/app.js","runtime","vendors~app"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL2FwcC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2FwcC5qcyJdLCJuYW1lcyI6WyJDbGFpbUNoYW5nZXIiLCJjbGFpbXMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJhY3RpdmVDbGFpbSIsInNldEludGVydmFsIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwibmV4dENsYWltIiwibGVuZ3RoIiwiYWRkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSx1Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7OztBQU9BO0NBR0E7QUFDQTs7SUFFTUEsWSxHQUNGLHdCQUFjO0FBQUE7O0FBQUE7O0FBQ1YsT0FBS0MsTUFBTCxHQUFjQyxRQUFRLENBQUNDLHNCQUFULENBQWdDLE9BQWhDLENBQWQ7QUFDQSxPQUFLQyxXQUFMLEdBQW1CLENBQW5CO0FBRUFDLGFBQVcsQ0FBQyxZQUFNO0FBQ2QsU0FBSSxDQUFDSixNQUFMLENBQVksS0FBSSxDQUFDRyxXQUFqQixFQUE4QkUsU0FBOUIsQ0FBd0NDLE1BQXhDLENBQStDLFFBQS9DOztBQUNBLFFBQU1DLFNBQVMsR0FBRyxDQUFDLEtBQUksQ0FBQ0osV0FBTCxHQUFtQixDQUFwQixJQUF5QixLQUFJLENBQUNILE1BQUwsQ0FBWVEsTUFBdkQ7O0FBQ0EsU0FBSSxDQUFDUixNQUFMLENBQVlPLFNBQVosRUFBdUJGLFNBQXZCLENBQWlDSSxHQUFqQyxDQUFxQyxRQUFyQzs7QUFDQSxTQUFJLENBQUNOLFdBQUwsR0FBbUJJLFNBQW5CO0FBQ0gsR0FMVSxFQUtSLElBTFEsQ0FBWDtBQU1ILEM7O0FBR0wsSUFBSVIsWUFBSixHIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8qXG4gKiBXZWxjb21lIHRvIHlvdXIgYXBwJ3MgbWFpbiBKYXZhU2NyaXB0IGZpbGUhXG4gKlxuICogV2UgcmVjb21tZW5kIGluY2x1ZGluZyB0aGUgYnVpbHQgdmVyc2lvbiBvZiB0aGlzIEphdmFTY3JpcHQgZmlsZVxuICogKGFuZCBpdHMgQ1NTIGZpbGUpIGluIHlvdXIgYmFzZSBsYXlvdXQgKGJhc2UuaHRtbC50d2lnKS5cbiAqL1xuXG4vLyBhbnkgQ1NTIHlvdSBpbXBvcnQgd2lsbCBvdXRwdXQgaW50byBhIHNpbmdsZSBjc3MgZmlsZSAoYXBwLmNzcyBpbiB0aGlzIGNhc2UpXG5pbXBvcnQgJy4uL2Nzcy9hcHAuY3NzJztcblxuLy8gTmVlZCBqUXVlcnk/IEluc3RhbGwgaXQgd2l0aCBcInlhcm4gYWRkIGpxdWVyeVwiLCB0aGVuIHVuY29tbWVudCB0byBpbXBvcnQgaXQuXG4vLyBpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuXG5jbGFzcyBDbGFpbUNoYW5nZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmNsYWltcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2NsYWltJyk7XG4gICAgICAgIHRoaXMuYWN0aXZlQ2xhaW0gPSAwO1xuICAgICAgICBcbiAgICAgICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jbGFpbXNbdGhpcy5hY3RpdmVDbGFpbV0uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgICAgICBjb25zdCBuZXh0Q2xhaW0gPSAodGhpcy5hY3RpdmVDbGFpbSArIDEpICUgdGhpcy5jbGFpbXMubGVuZ3RoO1xuICAgICAgICAgICAgdGhpcy5jbGFpbXNbbmV4dENsYWltXS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlQ2xhaW0gPSBuZXh0Q2xhaW07XG4gICAgICAgIH0sIDUwMDApOyAgICAgICAgXG4gICAgfVxufVxuXG5uZXcgQ2xhaW1DaGFuZ2VyKCk7Il0sInNvdXJjZVJvb3QiOiIifQ==