"use strict";
(self["webpackChunktodo_list"] = self["webpackChunktodo_list"] || []).push([["createTodoList"],{

/***/ "./src/DOM/createTodoList.js":
/*!***********************************!*\
  !*** ./src/DOM/createTodoList.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createTodoList)
/* harmony export */ });
function createTodoList(project) {
    console.log(project);
    //select todo section
    const div = document.querySelector('.todo-section');
    div.innerHTML = ''; //reset todo section
    
    //create and append header
    const header = document.createElement('h2');
    header.textContent = `${project.getName()} Todos`;
    div.append(header);
    
    //create and add ul for todos to DOM
    const ul = document.createElement('ul');
    ul.classList.add('todo-list');
    div.append(ul);
    
    //create and add new todo button to DOM
    loadNewTodoForm(project);

    loadTodoList(project);
}

function loadNewTodoForm(project) {
    const div = document.querySelector('.todo-section');

    //create the form
    const form = document.createElement('form');

    //create title label
    const titleLabel = document.createElement('label');
    titleLabel.textContent = 'Title: ';
    titleLabel.setAttribute('for', 'title');
    //create title input
    const titleInput = document.createElement('input');
    titleInput.setAttribute('id', 'title');
    titleInput.setAttribute('name', 'title');
    titleInput.setAttribute('type', 'text');
    //create title div
    const titleDiv = document.createElement('div');
    titleDiv.classList.add('form-group');
    titleDiv.append(titleLabel, titleInput);
    form.append(titleDiv);

    //create description label
    const descriptionLabel = document.createElement('label');
    descriptionLabel.textContent = 'Description: ';
    descriptionLabel.setAttribute('for', 'description');
    //create description input
    const descriptionInput = document.createElement('input');
    descriptionInput.setAttribute('id', 'description');
    descriptionInput.setAttribute('name', 'description');
    descriptionInput.setAttribute('type', 'text');
    //create description div
    const descriptionDiv = document.createElement('div');
    descriptionDiv.classList.add('form-group');
    descriptionDiv.append(descriptionLabel, descriptionInput);
    form.append(descriptionDiv);

    //create description label
    const priorityLabel = document.createElement('label');
    priorityLabel.textContent = 'Priority: ';
    priorityLabel.setAttribute('for', 'priority');
    //create description input
    const priorityInput = document.createElement('input');
    priorityInput.setAttribute('id', 'priority');
    priorityInput.setAttribute('name', 'priority');
    priorityInput.setAttribute('type', 'text');
    //create description div
    const priorityDiv = document.createElement('div');
    priorityDiv.classList.add('form-group');
    priorityDiv.append(priorityLabel, priorityInput);
    form.append(priorityDiv);

    //create submit button
    const submitBtn = document.createElement('button');
    submitBtn.textContent = 'Submit';
    submitBtn.setAttribute('type', 'submit');
    submitBtn.addEventListener('click', function(e) {
        e.preventDefault();
        console.log('new todo form submit button clicked.')
        const newTodoTitle = document.getElementById('title').value;
        const newTodoDescription = document.getElementById('description').value;
        const newTodoPriority = document.getElementById('priority').value;
        
        project.add(newTodoTitle, newTodoDescription, "ASAP", newTodoPriority);
        createTodoList(project);
    })
    form.append(submitBtn); 

    div.append(form); //add form to DOM
}

function loadTodoList(project) {
    const div = document.querySelector('.todo-list');
    console.log('loadTodoList() called');
    console.log(project);
    for (let i = 0; i < project.getListLength(); i++) {
        const row = document.createElement('div');
        row.classList.add('todo-row');

        const title = document.createElement('p');
        title.textContent = project.getElementAt(i).title;
        const description = document.createElement('p');
        description.textContent = project.getElementAt(i).description;
        const priority = document.createElement('p');
        priority.textContent = project.getElementAt(i).priority;

        //const dueDate = document.createElement('p');
        //dueDate.textContent = 'ASAP';

        row.append(title);
        row.append(description);
        row.append(priority);
        //row.append(dueDate);

        //create remove button
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'remove';
        removeBtn.addEventListener('click', function() {
            console.log(`remove button of todo ${i} was clicked!`);
            project.remove(i);
            createTodoList(project);
        });
        row.append(removeBtn);

        
        div.append(row);
    }
}

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/DOM/createTodoList.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlVG9kb0xpc3QuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsbUJBQW1CO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQSxzQkFBc0I7QUFDdEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsNkJBQTZCO0FBQ2pEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQsR0FBRztBQUNwRDtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL0RPTS9jcmVhdGVUb2RvTGlzdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVUb2RvTGlzdChwcm9qZWN0KSB7XG4gICAgY29uc29sZS5sb2cocHJvamVjdCk7XG4gICAgLy9zZWxlY3QgdG9kbyBzZWN0aW9uXG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8tc2VjdGlvbicpO1xuICAgIGRpdi5pbm5lckhUTUwgPSAnJzsgLy9yZXNldCB0b2RvIHNlY3Rpb25cbiAgICBcbiAgICAvL2NyZWF0ZSBhbmQgYXBwZW5kIGhlYWRlclxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgaGVhZGVyLnRleHRDb250ZW50ID0gYCR7cHJvamVjdC5nZXROYW1lKCl9IFRvZG9zYDtcbiAgICBkaXYuYXBwZW5kKGhlYWRlcik7XG4gICAgXG4gICAgLy9jcmVhdGUgYW5kIGFkZCB1bCBmb3IgdG9kb3MgdG8gRE9NXG4gICAgY29uc3QgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgIHVsLmNsYXNzTGlzdC5hZGQoJ3RvZG8tbGlzdCcpO1xuICAgIGRpdi5hcHBlbmQodWwpO1xuICAgIFxuICAgIC8vY3JlYXRlIGFuZCBhZGQgbmV3IHRvZG8gYnV0dG9uIHRvIERPTVxuICAgIGxvYWROZXdUb2RvRm9ybShwcm9qZWN0KTtcblxuICAgIGxvYWRUb2RvTGlzdChwcm9qZWN0KTtcbn1cblxuZnVuY3Rpb24gbG9hZE5ld1RvZG9Gb3JtKHByb2plY3QpIHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kby1zZWN0aW9uJyk7XG5cbiAgICAvL2NyZWF0ZSB0aGUgZm9ybVxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG5cbiAgICAvL2NyZWF0ZSB0aXRsZSBsYWJlbFxuICAgIGNvbnN0IHRpdGxlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIHRpdGxlTGFiZWwudGV4dENvbnRlbnQgPSAnVGl0bGU6ICc7XG4gICAgdGl0bGVMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICd0aXRsZScpO1xuICAgIC8vY3JlYXRlIHRpdGxlIGlucHV0XG4gICAgY29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3RpdGxlJyk7XG4gICAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAndGl0bGUnKTtcbiAgICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gICAgLy9jcmVhdGUgdGl0bGUgZGl2XG4gICAgY29uc3QgdGl0bGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aXRsZURpdi5jbGFzc0xpc3QuYWRkKCdmb3JtLWdyb3VwJyk7XG4gICAgdGl0bGVEaXYuYXBwZW5kKHRpdGxlTGFiZWwsIHRpdGxlSW5wdXQpO1xuICAgIGZvcm0uYXBwZW5kKHRpdGxlRGl2KTtcblxuICAgIC8vY3JlYXRlIGRlc2NyaXB0aW9uIGxhYmVsXG4gICAgY29uc3QgZGVzY3JpcHRpb25MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgZGVzY3JpcHRpb25MYWJlbC50ZXh0Q29udGVudCA9ICdEZXNjcmlwdGlvbjogJztcbiAgICBkZXNjcmlwdGlvbkxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ2Rlc2NyaXB0aW9uJyk7XG4gICAgLy9jcmVhdGUgZGVzY3JpcHRpb24gaW5wdXRcbiAgICBjb25zdCBkZXNjcmlwdGlvbklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBkZXNjcmlwdGlvbklucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCAnZGVzY3JpcHRpb24nKTtcbiAgICBkZXNjcmlwdGlvbklucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsICdkZXNjcmlwdGlvbicpO1xuICAgIGRlc2NyaXB0aW9uSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgICAvL2NyZWF0ZSBkZXNjcmlwdGlvbiBkaXZcbiAgICBjb25zdCBkZXNjcmlwdGlvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRlc2NyaXB0aW9uRGl2LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tZ3JvdXAnKTtcbiAgICBkZXNjcmlwdGlvbkRpdi5hcHBlbmQoZGVzY3JpcHRpb25MYWJlbCwgZGVzY3JpcHRpb25JbnB1dCk7XG4gICAgZm9ybS5hcHBlbmQoZGVzY3JpcHRpb25EaXYpO1xuXG4gICAgLy9jcmVhdGUgZGVzY3JpcHRpb24gbGFiZWxcbiAgICBjb25zdCBwcmlvcml0eUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBwcmlvcml0eUxhYmVsLnRleHRDb250ZW50ID0gJ1ByaW9yaXR5OiAnO1xuICAgIHByaW9yaXR5TGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAncHJpb3JpdHknKTtcbiAgICAvL2NyZWF0ZSBkZXNjcmlwdGlvbiBpbnB1dFxuICAgIGNvbnN0IHByaW9yaXR5SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHByaW9yaXR5SW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICdwcmlvcml0eScpO1xuICAgIHByaW9yaXR5SW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgJ3ByaW9yaXR5Jyk7XG4gICAgcHJpb3JpdHlJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICAgIC8vY3JlYXRlIGRlc2NyaXB0aW9uIGRpdlxuICAgIGNvbnN0IHByaW9yaXR5RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcHJpb3JpdHlEaXYuY2xhc3NMaXN0LmFkZCgnZm9ybS1ncm91cCcpO1xuICAgIHByaW9yaXR5RGl2LmFwcGVuZChwcmlvcml0eUxhYmVsLCBwcmlvcml0eUlucHV0KTtcbiAgICBmb3JtLmFwcGVuZChwcmlvcml0eURpdik7XG5cbiAgICAvL2NyZWF0ZSBzdWJtaXQgYnV0dG9uXG4gICAgY29uc3Qgc3VibWl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgc3VibWl0QnRuLnRleHRDb250ZW50ID0gJ1N1Ym1pdCc7XG4gICAgc3VibWl0QnRuLnNldEF0dHJpYnV0ZSgndHlwZScsICdzdWJtaXQnKTtcbiAgICBzdWJtaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc29sZS5sb2coJ25ldyB0b2RvIGZvcm0gc3VibWl0IGJ1dHRvbiBjbGlja2VkLicpXG4gICAgICAgIGNvbnN0IG5ld1RvZG9UaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXRsZScpLnZhbHVlO1xuICAgICAgICBjb25zdCBuZXdUb2RvRGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVzY3JpcHRpb24nKS52YWx1ZTtcbiAgICAgICAgY29uc3QgbmV3VG9kb1ByaW9yaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByaW9yaXR5JykudmFsdWU7XG4gICAgICAgIFxuICAgICAgICBwcm9qZWN0LmFkZChuZXdUb2RvVGl0bGUsIG5ld1RvZG9EZXNjcmlwdGlvbiwgXCJBU0FQXCIsIG5ld1RvZG9Qcmlvcml0eSk7XG4gICAgICAgIGNyZWF0ZVRvZG9MaXN0KHByb2plY3QpO1xuICAgIH0pXG4gICAgZm9ybS5hcHBlbmQoc3VibWl0QnRuKTsgXG5cbiAgICBkaXYuYXBwZW5kKGZvcm0pOyAvL2FkZCBmb3JtIHRvIERPTVxufVxuXG5mdW5jdGlvbiBsb2FkVG9kb0xpc3QocHJvamVjdCkge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvLWxpc3QnKTtcbiAgICBjb25zb2xlLmxvZygnbG9hZFRvZG9MaXN0KCkgY2FsbGVkJyk7XG4gICAgY29uc29sZS5sb2cocHJvamVjdCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0LmdldExpc3RMZW5ndGgoKTsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICByb3cuY2xhc3NMaXN0LmFkZCgndG9kby1yb3cnKTtcblxuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSBwcm9qZWN0LmdldEVsZW1lbnRBdChpKS50aXRsZTtcbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gcHJvamVjdC5nZXRFbGVtZW50QXQoaSkuZGVzY3JpcHRpb247XG4gICAgICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBwcmlvcml0eS50ZXh0Q29udGVudCA9IHByb2plY3QuZ2V0RWxlbWVudEF0KGkpLnByaW9yaXR5O1xuXG4gICAgICAgIC8vY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgLy9kdWVEYXRlLnRleHRDb250ZW50ID0gJ0FTQVAnO1xuXG4gICAgICAgIHJvdy5hcHBlbmQodGl0bGUpO1xuICAgICAgICByb3cuYXBwZW5kKGRlc2NyaXB0aW9uKTtcbiAgICAgICAgcm93LmFwcGVuZChwcmlvcml0eSk7XG4gICAgICAgIC8vcm93LmFwcGVuZChkdWVEYXRlKTtcblxuICAgICAgICAvL2NyZWF0ZSByZW1vdmUgYnV0dG9uXG4gICAgICAgIGNvbnN0IHJlbW92ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICByZW1vdmVCdG4udGV4dENvbnRlbnQgPSAncmVtb3ZlJztcbiAgICAgICAgcmVtb3ZlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgcmVtb3ZlIGJ1dHRvbiBvZiB0b2RvICR7aX0gd2FzIGNsaWNrZWQhYCk7XG4gICAgICAgICAgICBwcm9qZWN0LnJlbW92ZShpKTtcbiAgICAgICAgICAgIGNyZWF0ZVRvZG9MaXN0KHByb2plY3QpO1xuICAgICAgICB9KTtcbiAgICAgICAgcm93LmFwcGVuZChyZW1vdmVCdG4pO1xuXG4gICAgICAgIFxuICAgICAgICBkaXYuYXBwZW5kKHJvdyk7XG4gICAgfVxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==