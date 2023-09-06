//console.log("HI");
import {createToDo,removeTodo} from './createToDo';
import {createProject} from './createProject';
import {displayInput,displayProjects,displayProjectsContent,displayTodoContainer,displayDone,displayBack,deleteDisplayTodo,createProjectContent,addContent,displayProjectTodos} from './displayDOM';

//createProject();
//createToDo();
let activePage;
const newProject = document.querySelector('.new-project-btn');
newProject.addEventListener('click',function(){
  //  const projectName = document.getElementById('input');
  //  createProject(projectName.value);
  //  displayProjects();
   // console.log('it is ' +createProject.projects);
   displayInput();
  // console.log(projectsArray);
})

//handle Tabs
const tabs = document.querySelectorAll('[data-tab-target]');
//const projects = window.document.querySelectorAll('.dynamic-project');
//const tabContent = document.querySelectorAll('[data-tab-content]');

tabs.forEach(tab => {
    tab.addEventListener('click',()=> {
        const tabContent = document.querySelectorAll('[data-tab-content]');
        const target = document.querySelector(tab.dataset.tabTarget);
        tabContent.forEach(tabContent=>tabContent.classList.remove('active'));

        tabs.forEach(tab => {
            tab.classList.remove('active');
          //  projects.classList.remove('active');
        })
        tab.classList.add('active');
        target.classList.add('active');
    })
    
})

//handle dynamically created projects
document.addEventListener('click',function(e){
    const target = e.target.closest('.dynamic-project');
    const createdProjects = document.querySelectorAll('[data-tab-target]');
    const createProjectsContent = document.querySelectorAll('[data-tab-content]');
  //  const createProjectsContent = document.querySelectorAll('.dynamic-project');
    if (target){
       // displayProjectsContent();
      // createProjectContent (target);
     // addContent ();
      //  createProjectContent ();
      
        const targetContent = document.querySelector(target.dataset.tabTarget);

        createProjectsContent.forEach(e=>e.classList.remove('active'));

     //  console.log(target);
       createdProjects.forEach(tab=>{
        tab.classList.remove('active');
       })
        targetContent.classList.add('active');
        target.classList.add('active');
        addContent();
    }
    
})

//handle newTodo
const ToDo = document.querySelector('.new-todo');
ToDo.addEventListener('click',function(){
    displayTodoContainer();
   // console.log('x is' + x);
   // createToDo();
})



//handle checked ToDos 

document.addEventListener('click',function(e){
    const target = e.target.closest('.checkbox');
    if (target) {

        
        if (target.checked===false) {  //works opposite. why? DOn't fking know...
            console.log(target.checked===false);
            let id = target.parentElement.id;
            displayBack(target,id);
        }

      else {
        let id = target.parentElement.id;
        console.log('value is ' + target.value);
        displayDone(target,id);
      }

    }
})

//handle delete toDo

document.addEventListener('click',function(e){
    const target = e.target.closest('.delete');
    if (target) {
        console.log(`from index target is ${target.parentElement.id}`);
        let id = target.parentElement.id;
        deleteDisplayTodo(target,id);
        console.log(`after remove from index target is ${target.parentElement.id}`);
        removeTodo(target.parentElement.id);
        
    }
})

//handle new Todo on dynamic projects
window.document.addEventListener('click',function(e){
  const target = e.target.closest('.add-new-project-todo');
  if (target) {
     displayTodoContainer();
    //find active page
  /*  const activeProject = window.document.querySelectorAll('.dynamic-project');
    const activePage = window.document.querySelectorAll('.project-divs');
    activePage.forEach((e,i)=> {
      if (e.classList.contains('active'))
      {
        console.log(e.id);
        displayProjectTodos(e.id);
      }
    }) */
  }
}) 

