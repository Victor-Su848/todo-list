export default function createHeader() {
    const content = document.createElement('div');
    content.setAttribute('id', 'content');
    
    const header = document.createElement('header')
    const title = document.createElement('h1');
    title.textContent = 'Todo List';
    header.append(title);

    return header;
}