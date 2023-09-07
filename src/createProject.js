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
    let flag=0;
    const active = window.document.querySelectorAll('.dynamic-project');
    const ifInPage = window.document.querySelectorAll('data-tab-content');
    active.forEach((e,i)=> {
        if (e.classList.contains('active')){
            activePage=i; 
        } 
    })

   /* ifInPage.forEach((e,i)=> {
        if (e.getElementById(target)!=null)
        console.log('it contains it');
    }) */
    if (!activePage && activePage!=0) {
        projects.forEach((e,i)=> {
            projects[i].projectsToDos.forEach((el,ind) => {
             //   console.log(`el is ${el.id}`);
           //     console.log(`target is ${target}`);
                if (el.id==target)
                {
                    let x= projects[i].projectsToDos.splice(ind,1);
                    removeProjectCounter(i, projects[i].projectsToDos.length);
                    console.log(x);
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
                let y= projects[activePage].projectsToDos.splice(i,1); //FIX THIS
                console.log(y);
            }
       })
        removeProjectCounter(activePage, projects[activePage].projectsToDos.length);

    }
   }
    
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