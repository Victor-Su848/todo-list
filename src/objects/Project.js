import Todo from "./Todo";

export default class Project {
    constructor(name) {
        this.todoList = [];
        this.name = name;
    } 
    add(title, description, dueDate, priority) {
        let newTodo = new Todo(title, description, dueDate, priority);
        this.todoList.push(newTodo);
    }
    remove(index) {
        this.todoList.splice(index, 1);
    }
    getName() {
        return this.name;
    }
    //return length of project list
    getListLength() {
        return this.todoList.length;
    }
    getElementAt(index) {
        return this.todoList[index];
    }
}