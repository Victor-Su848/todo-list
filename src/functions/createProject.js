import Project from "../objects/Project";
import { projectList } from "..";

//add
export default function createProject(name) {
    let newProject = new Project(name);
    console.log('New project was created');

    projectList.push(newProject);
    console.log(projectList);
}