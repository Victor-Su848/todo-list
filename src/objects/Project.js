import Todo from "./Todo";

export default class Project {
    constructor(name) {
        this.todoList;
        this.name = name;
    } 
    add(todo) {
        this.todoList.push(todo);
    }
    remove(index) {
        this.todoList.splice(index, 1);
    }
    getName() {
        return this.name;
    }
}