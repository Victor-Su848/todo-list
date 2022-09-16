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
function createMain() {
    const content = document.querySelector('#content');
    

    const main = document.createElement('main');
    
    //create projects div
    const projectsDiv = document.createElement('div');
    projectsDiv.classList.add('projects-section');
    main.append(projectsDiv);
    //create todo div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo-section');
    main.append(todoDiv);

    content.append(main);
}

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/DOM/createMain.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlTWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFlO0FBQ2Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL0RPTS9jcmVhdGVNYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZU1haW4oKSB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG4gICAgXG5cbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xuICAgIFxuICAgIC8vY3JlYXRlIHByb2plY3RzIGRpdlxuICAgIGNvbnN0IHByb2plY3RzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcHJvamVjdHNEaXYuY2xhc3NMaXN0LmFkZCgncHJvamVjdHMtc2VjdGlvbicpO1xuICAgIG1haW4uYXBwZW5kKHByb2plY3RzRGl2KTtcbiAgICAvL2NyZWF0ZSB0b2RvIGRpdlxuICAgIGNvbnN0IHRvZG9EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0b2RvRGl2LmNsYXNzTGlzdC5hZGQoJ3RvZG8tc2VjdGlvbicpO1xuICAgIG1haW4uYXBwZW5kKHRvZG9EaXYpO1xuXG4gICAgY29udGVudC5hcHBlbmQobWFpbik7XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9