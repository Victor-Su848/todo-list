export default class Project {
    constructor() {
        this.todos;
    } 
    addToList(todo) {
        this.todos.push(todo);
    }
    removeFromList(index) {
        this.todos.splice(index, 1);
    }
}