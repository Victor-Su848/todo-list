export default function createProjectList() {
    const div = document.querySelector('.projects-section');
    

    const title = document.createElement('h2');
    title.textContent = 'Projects';
    div.append(title);

    const projectList = document.createElement('ul');

    const li1 = document.createElement('li');
    li1.textContent = 'Project 1';
    const li2 = document.createElement('li');
    li2.textContent = 'Project 2';
    const li3 = document.createElement('li');
    li3.textContent = 'Project 3';
    projectList.append(li1,li2,li3);
    div.append(projectList);

    const btn = document.createElement('button');
    btn.textContent = "add";
    div.append(btn);

    
}