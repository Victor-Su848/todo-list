import Todo from "./objects/Todo";
import './styles.css';

import createHeader from "./DOM/createHeader";
import createMain from "./DOM/createMain";
import createProjectList from "./DOM/createProjectList";
import createTodoList from "./DOM/createTodoList";
import createProject from "./functions/createProject";
import loadProjects from "./DOM/loadProjects";

export let projectList = [];

const content = document.createElement('div');
content.setAttribute('id', 'content');
document.body.append(content);


//const task = new Todo('t','t','t','t');
//content.append(task.title);

createHeader();
createMain();
createProjectList();
createTodoList();

createProject('example project');
createProject('Urgent');
createProject('Do later ig');
loadProjects();
