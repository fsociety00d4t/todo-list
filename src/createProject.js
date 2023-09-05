import createToDo from './createToDo';
let projects = [];
let id = 0;
const createProject = (value) => {
    

    function Projects (title) {
        this.title = title;
        this.id=id++;
    }
    
            const project = new Projects(value);
            projects.push(project);
 
}



export default createProject;