import Project from "../objects/Project";

export default class projectList {
    constructor() {
        this.list = [];
    }
    add(name) {
        let project = new Project(name);
        this.list.push(project);
    }
    remove(index) {
        this.list.splice(index, 1);
    }
    //return length of project list
    getListLength() {
        return this.list.length;
    }
    //return index of project list
    getListIndex(index) {
        return this.list[index].name;
    }
}