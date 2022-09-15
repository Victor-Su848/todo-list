import createProject from "../functions/createProject";
import loadProjects from "./loadProjects";

export default function createProjectList() {
    const div = document.querySelector('.projects-section'); //selects projects section
    
    //create and add title to DOM
    const title = document.createElement('h2');
    title.textContent = 'Projects';
    div.append(title);
    //create and add ul for projects to DOM
    const projectList = document.createElement('ul');
    projectList.classList.add('projects-list');
    div.append(projectList);
    //create and add button for creating new projects to DOM
    const btn = document.createElement('button');
    btn.textContent = "add";

    btn.addEventListener('click', function() {
        createProject('btn created project');
        loadProjects();
    });

    div.append(btn);
}