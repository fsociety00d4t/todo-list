import createToDo from './createToDo';

const createProject = () => {
    let projects = [];

    function Projects (title) {
        this.title = title;
    }
    
            const project = new Projects('stuffy');
            projects.push(project);

    console.log(projects[0].title);
}



export default createProject;