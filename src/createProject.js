import {removeProjectCounter} from './displayDOM';
let projects = [];
let id = 0;
let counter=0;
const createProject = (value) => {
    

    function Projects (title) {
        this.title = title;
        this.id=id++;
        this.projectsToDos=[];
    }
    
            const project = new Projects(value);
            projects.push(project);
 
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
    let x = project.toString().charAt(project.length-1);
    projects[Number(x)].projectsToDos.push(toDo);
    return projects[Number(x)].projectsToDos.length;  
}

function deleteFromProjectArray (target) {
    projects.forEach((e,i)=> {
        if (e.id==target)
        projects.splice(i,1);
    })
}


export {createProject,addTodos,removeTodoFromProject,deleteFromProjectArray};