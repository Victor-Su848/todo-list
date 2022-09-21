import Todo from "./objects/Todo";
import './styles.css';

import createHeader from "./DOM/createHeader";
import createMain from "./DOM/createMain";
import createProjectList from "./DOM/createProjectList";
import createTodoList from "./DOM/createTodoList";

import loadProjects from "./DOM/loadProjects";
import ProjectList from "./objects/ProjectList";
import loadProjectForm from "./DOM/loadProjectForm";


//creating and appending content div
const content = document.createElement('div');
content.setAttribute('id', 'content');
document.body.append(content);
//create instance of ProjectList and add some default projects
let newProjectList = new ProjectList();

//checks if local storage is supported and available
//https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API
function storageAvailable(type) {
    let storage;
    try {
        storage = window[type];
        const x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch (e) {
        return e instanceof DOMException && (
            // everything except Firefox
            e.code === 22 ||
            // Firefox
            e.code === 1014 ||
            // test name field too, because code might not be present
            // everything except Firefox
            e.name === 'QuotaExceededError' ||
            // Firefox
            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
            // acknowledge QuotaExceededError only if there's something already stored
            (storage && storage.length !== 0);
    }
}


createHeader();
createMain();
createProjectList();
loadProjects(newProjectList);
loadProjectForm(newProjectList);
