import createToDo from './createToDo';
import {removeProjectCounter} from './displayDOM';
let projects = [];
let id = 0;
let toDos=[];
const createProject = (value) => {
    

    function Projects (title) {
        this.title = title;
        this.id=id++;
        this.projectsToDos=[];
    }
    
            const project = new Projects(value);
            projects.push(project);
 
}

/*function getProjects (target) {
    console.log(`target is ${target}`)
    console.log(`it is ${projects[2].projectsToDos}`);
    return projects.projectsToDos;
    //get active project page

} */

function removeTodoFromProject (target) {
    let activePage;
    const active = window.document.querySelectorAll('.dynamic-project');
    active.forEach((e,i)=> {
        if (e.classList.contains('active')){
            activePage=i; 
        } 
    }) 

   projects[activePage].projectsToDos.forEach((e,i)=> {
        if (target==e.id) 
        {
            projects[activePage].projectsToDos.splice(i,1);
        }
   })
   //console.log(`the counter is ${projects[activePage].projectsToDos.length}`);
  // console.log(`target is ${target}`)
    removeProjectCounter(activePage, projects[activePage].projectsToDos.length);
}

function addTodos(project,toDo) {
    let x = project.toString().charAt(project.length-1);
  //  projects[Number(x)].toDos= toDo;
    projects[Number(x)].projectsToDos.push(toDo);
  //  console.log(`for project with id ${project}`);
  //  console.log(projects[Number(x)].projectsToDos.length);
   // console.log((projects[Number(x)]).toDo.length);
    return projects[Number(x)].projectsToDos.length;  
}


export {createProject,addTodos,removeTodoFromProject};