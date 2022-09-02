import createHeader from "../DOM/createHeader";

export default function renderMainPage(project) {
    const content = document.createElement('div');
    content.setAttribute('id', 'content');
    
    content.append(createHeader());
}