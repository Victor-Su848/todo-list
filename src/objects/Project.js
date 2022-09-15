export default class Project {
    constructor(name) {
        this.todos;
        this.name = name;
    } 
    addToList(todo) {
        this.todos.push(todo);
    }
    removeFromList(index) {
        this.todos.splice(index, 1);
    }
}