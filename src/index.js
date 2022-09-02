import Todo from "./objects/Todo";
import createHeader from "./DOM/createHeader";

const content = document.createElement('div');
content.setAttribute('id', 'content');
document.body.append(content);

const text = document.createElement('p');
text.textContent = "hello wmmggwgwmmmmorld";
content.append(text);

const task = new Todo('t','t','t','t');
content.append(task.title);

content.append(createHeader());