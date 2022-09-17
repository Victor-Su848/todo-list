import { projectList } from "..";

//add all the projects from projectList onto DOM
export default function loadProjects(projectList) {
    const div = document.querySelector('.projects-list'); //select project list ul
    div.innerHTML = ''; //clears the div before adding everything

    //for loop to add each project to DOM
    for (let i = 0; i < projectList.getListLength(); i++) {
        //create and append button for the project name
        const btn = document.createElement('button');
        btn.textContent = projectList.getListIndex(i);
        btn.addEventListener('click', function() {
            console.log(`button ${i} was clicked!`);
        });
        //create and append button for removing project
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'remove';
        removeBtn.addEventListener('click', function() {
            console.log(`remove button of project ${i} was clicked!`);
            projectList.remove(i);
            loadProjects(projectList);
        });


        div.append(btn);
        div.append(removeBtn);
    }
}