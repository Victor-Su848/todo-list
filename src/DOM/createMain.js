import createProjectList from "./createProjectList";

export default function createMain() {
    const content = document.querySelector('#content');
    

    const main = document.createElement('main');
    const text = document.createElement('p');
    text.textContent = 'Test';
    main.append(text);


    content.append(main);
    main.append(createProjectList());
}