import Todo from "./objects/Todo";
import './styles.css';

import createHeader from "./DOM/createHeader";
import createMain from "./DOM/createMain";
import createProjectList from "./DOM/createProjectList";
import createTodoList from "./DOM/createTodoList";

import loadProjects from "./DOM/loadProjects";
import ProjectList from "./objects/ProjectList";
import loadProjectForm from "./DOM/loadProjectForm";


export let projectList = [];

//creating and appending content div
const content = document.createElement('div');
content.setAttribute('id', 'content');
document.body.append(content);

let newProjectList = new ProjectList();
newProjectList.add('Project 5');
newProjectList.add('Project 8');

//const task = new Todo('t','t','t','t');
//content.append(task.title);

createHeader();
createMain();
createProjectList(newProjectList);
createTodoList();



loadProjects(newProjectList);
loadProjectForm(newProjectList);
