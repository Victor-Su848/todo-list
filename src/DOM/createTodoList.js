export default function createTodoList(project) {
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