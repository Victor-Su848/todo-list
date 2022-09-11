import Todo from "./objects/Todo";
import './styles.css';

import createHeader from "./DOM/createHeader";
import createMain from "./DOM/createMain";

const content = document.createElement('div');
content.setAttribute('id', 'content');
document.body.append(content);


//const task = new Todo('t','t','t','t');
//content.append(task.title);

createHeader();
createMain();