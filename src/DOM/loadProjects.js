import { projectList } from "..";

//add all the projects from projectList onto DOM
export default function loadProjects() {
    const div = document.querySelector('.projects-list'); //select project list ul
    div.innerHTML = ''; //clears the div before adding everything

    

    //for loop to add each project to DOM
    for (let i = 0; i < projectList.length; i++) {
        const btn = document.createElement('button');
        btn.textContent = projectList[i].name;
        btn.addEventListener('click', function() {
            console.log(`button ${i} was clicked!`);
        });
        div.append(btn);
    }
}