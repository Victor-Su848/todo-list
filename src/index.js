import Todo from "./objects/Todo";
import createHeader from "./DOM/createHeader";
import './styles.css';

const content = document.createElement('div');
content.setAttribute('id', 'content');
document.body.append(content);


//const task = new Todo('t','t','t','t');
//content.append(task.title);

createHeader();