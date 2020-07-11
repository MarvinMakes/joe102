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
  this.claims[this.activeClaim].classList.add('active');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL2FwcC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2FwcC5qcyJdLCJuYW1lcyI6WyJDbGFpbUNoYW5nZXIiLCJjbGFpbXMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJhY3RpdmVDbGFpbSIsImNsYXNzTGlzdCIsImFkZCIsInNldEludGVydmFsIiwicmVtb3ZlIiwibmV4dENsYWltIiwibGVuZ3RoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSx1Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7OztBQU9BO0NBR0E7QUFDQTs7SUFFTUEsWSxHQUNGLHdCQUFjO0FBQUE7O0FBQUE7O0FBQ1YsT0FBS0MsTUFBTCxHQUFjQyxRQUFRLENBQUNDLHNCQUFULENBQWdDLE9BQWhDLENBQWQ7QUFDQSxPQUFLQyxXQUFMLEdBQW1CLENBQW5CO0FBRUEsT0FBS0gsTUFBTCxDQUFZLEtBQUtHLFdBQWpCLEVBQThCQyxTQUE5QixDQUF3Q0MsR0FBeEMsQ0FBNEMsUUFBNUM7QUFFQUMsYUFBVyxDQUFDLFlBQU07QUFDZCxTQUFJLENBQUNOLE1BQUwsQ0FBWSxLQUFJLENBQUNHLFdBQWpCLEVBQThCQyxTQUE5QixDQUF3Q0csTUFBeEMsQ0FBK0MsUUFBL0M7O0FBQ0EsUUFBTUMsU0FBUyxHQUFHLENBQUMsS0FBSSxDQUFDTCxXQUFMLEdBQW1CLENBQXBCLElBQXlCLEtBQUksQ0FBQ0gsTUFBTCxDQUFZUyxNQUF2RDs7QUFDQSxTQUFJLENBQUNULE1BQUwsQ0FBWVEsU0FBWixFQUF1QkosU0FBdkIsQ0FBaUNDLEdBQWpDLENBQXFDLFFBQXJDOztBQUNBLFNBQUksQ0FBQ0YsV0FBTCxHQUFtQkssU0FBbkI7QUFDSCxHQUxVLEVBS1IsSUFMUSxDQUFYO0FBTUgsQzs7QUFHTCxJQUFJVCxZQUFKLEciLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLypcbiAqIFdlbGNvbWUgdG8geW91ciBhcHAncyBtYWluIEphdmFTY3JpcHQgZmlsZSFcbiAqXG4gKiBXZSByZWNvbW1lbmQgaW5jbHVkaW5nIHRoZSBidWlsdCB2ZXJzaW9uIG9mIHRoaXMgSmF2YVNjcmlwdCBmaWxlXG4gKiAoYW5kIGl0cyBDU1MgZmlsZSkgaW4geW91ciBiYXNlIGxheW91dCAoYmFzZS5odG1sLnR3aWcpLlxuICovXG5cbi8vIGFueSBDU1MgeW91IGltcG9ydCB3aWxsIG91dHB1dCBpbnRvIGEgc2luZ2xlIGNzcyBmaWxlIChhcHAuY3NzIGluIHRoaXMgY2FzZSlcbmltcG9ydCAnLi4vY3NzL2FwcC5jc3MnO1xuXG4vLyBOZWVkIGpRdWVyeT8gSW5zdGFsbCBpdCB3aXRoIFwieWFybiBhZGQganF1ZXJ5XCIsIHRoZW4gdW5jb21tZW50IHRvIGltcG9ydCBpdC5cbi8vIGltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5cbmNsYXNzIENsYWltQ2hhbmdlciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuY2xhaW1zID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnY2xhaW0nKTtcbiAgICAgICAgdGhpcy5hY3RpdmVDbGFpbSA9IDA7XG5cbiAgICAgICAgdGhpcy5jbGFpbXNbdGhpcy5hY3RpdmVDbGFpbV0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgIFxuICAgICAgICBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNsYWltc1t0aGlzLmFjdGl2ZUNsYWltXS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIGNvbnN0IG5leHRDbGFpbSA9ICh0aGlzLmFjdGl2ZUNsYWltICsgMSkgJSB0aGlzLmNsYWltcy5sZW5ndGg7XG4gICAgICAgICAgICB0aGlzLmNsYWltc1tuZXh0Q2xhaW1dLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgdGhpcy5hY3RpdmVDbGFpbSA9IG5leHRDbGFpbTtcbiAgICAgICAgfSwgNTAwMCk7ICAgICAgICBcbiAgICB9XG59XG5cbm5ldyBDbGFpbUNoYW5nZXIoKTsiXSwic291cmNlUm9vdCI6IiJ9