export default function createHeader() {
    const content = document.querySelector('#content');
    
    const header = document.createElement('header')
    const title = document.createElement('h1');
    title.textContent = 'Todo List';
    header.append(title);

    content.append(header);
}