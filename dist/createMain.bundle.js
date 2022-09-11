"use strict";
(self["webpackChunktodo_list"] = self["webpackChunktodo_list"] || []).push([["createMain"],{

/***/ "./src/DOM/createMain.js":
/*!*******************************!*\
  !*** ./src/DOM/createMain.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createMain)
/* harmony export */ });
/* harmony import */ var _createProjectList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createProjectList */ "./src/DOM/createProjectList.js");


function createMain() {
    const content = document.querySelector('#content');

    const main = document.createElement('main');

    (0,_createProjectList__WEBPACK_IMPORTED_MODULE_0__["default"])();

    content.append(main);
}

/***/ }),

/***/ "./src/DOM/createProjectList.js":
/*!**************************************!*\
  !*** ./src/DOM/createProjectList.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createProjectList)
/* harmony export */ });
function createProjectList() {
    const main = document.getElementsByTagName('main');
    console.log(main);
    const projectList = document.createElement('div');

    const title = document.createElement('h2');
    title.textContent = 'Projects';
    projectList.append(title);

    main.append(projectList);
}

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/DOM/createMain.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlTWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBb0Q7O0FBRXJDO0FBQ2Y7O0FBRUE7O0FBRUEsSUFBSSw4REFBaUI7O0FBRXJCO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDVmU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvRE9NL2NyZWF0ZU1haW4uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL0RPTS9jcmVhdGVQcm9qZWN0TGlzdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY3JlYXRlUHJvamVjdExpc3QgZnJvbSBcIi4vY3JlYXRlUHJvamVjdExpc3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlTWFpbigpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcblxuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XG5cbiAgICBjcmVhdGVQcm9qZWN0TGlzdCgpO1xuXG4gICAgY29udGVudC5hcHBlbmQobWFpbik7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlUHJvamVjdExpc3QoKSB7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdtYWluJyk7XG4gICAgY29uc29sZS5sb2cobWFpbik7XG4gICAgY29uc3QgcHJvamVjdExpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9ICdQcm9qZWN0cyc7XG4gICAgcHJvamVjdExpc3QuYXBwZW5kKHRpdGxlKTtcblxuICAgIG1haW4uYXBwZW5kKHByb2plY3RMaXN0KTtcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=