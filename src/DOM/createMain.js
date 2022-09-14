export default function createMain() {
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