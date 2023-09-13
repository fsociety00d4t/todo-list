import {removeProjectCounter} from './displayDOM';
import {removeTodo} from './createToDo';
let projects = [];
let id = 0;
const createProject = (value) => {
    

    function Projects (title) {
        this.title = title;
        this.id=id++;
        this.projectsToDos=[];
    }
    
            const project = new Projects(value);
            projects.push(project);

            localStorage.setItem("project", JSON.stringify(project));
            let storedProjects = JSON.parse(localStorage.getItem("project"));
 
}


function removeTodoFromProject (target) {
    let activePage;
    let flag=0;
    const active = window.document.querySelectorAll('.dynamic-project');
    active.forEach((e,i)=> {
        if (e.classList.contains('active')){
            activePage=i; 
        } 
    })


    if (!activePage && activePage!=0) {
        projects.forEach((e,i)=> {
            projects[i].projectsToDos.forEach((el,ind) => {
                if (el.id==target)
                {
                    projects[i].projectsToDos.splice(ind,1);
                    removeProjectCounter(i, projects[i].projectsToDos.length);                   
                    flag=1;
                }
            })
        })
    }
    

    
   if (flag===0) {
    if (activePage || activePage==0) {
        projects[activePage].projectsToDos.forEach((e,i)=> {
            if (target==e.id) 
            {
                projects[activePage].projectsToDos.splice(i,1); 
                
            }
       })
        removeProjectCounter(activePage, projects[activePage].projectsToDos.length);

    }
   }
    
    }
   

function addTodos(project,toDo) {
    projects[project].projectsToDos.push(toDo);
    return projects[project].projectsToDos.length;
}

function deleteFromProjectArray (target) {
    projects.forEach((e,i)=> {
        if (e.id==target) {

        e.projectsToDos.forEach((el,ind)=> {
         
            removeTodo (el.id,1);  
        })

        projects.splice(i,1);
    } })

}


export {createProject,addTodos,removeTodoFromProject,deleteFromProjectArray};