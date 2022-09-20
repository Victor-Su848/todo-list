import loadProjects from "./loadProjects";

export default function loadProjectForm(projectList) {
    const content = document.querySelector('#content');
    const projectsSection = document.querySelector('.projects-section');

    //create form
    const form = document.createElement('form');
    //form.setAttribute('method', 'get');
    form.setAttribute('id','new-project-form');
    //create and add label to form
    const label = document.createElement('label');
    label.setAttribute('for', 'name');
    label.textContent = 'Add Project:';
    form.append(label);
    //create and add input to form
    const input = document.createElement('input');
    input.setAttribute('type','text');
    input.setAttribute('name','name');
    input.setAttribute('id','name');
    form.append(input);
    //create and add button to form
    const btn = document.createElement('button');
    btn.setAttribute('type', 'submit');
    btn.textContent = 'Submit';
    form.append(btn);

    

    //add event listener for creating a new project
    btn.addEventListener('click', function(e) {
        e.preventDefault();
        console.log('new project form submit button clicked.')
        const newProjectName = document.getElementById('name').value;
        projectList.add(newProjectName);
        loadProjects(projectList);
    });

    projectsSection.append(form);
}