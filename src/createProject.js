import createToDo from './createToDo';
let projects = [];
const createProject = (value) => {
    

    function Projects (title) {
        this.title = title;
    }
    
            const project = new Projects(value);
            projects.push(project);
 
}



export default createProject;