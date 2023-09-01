//console.log("HI");
import createToDo from './createToDo';
import createProject from './createProject';
import {displayInput,displayProjects,displayProjectsContent,displayTodoContainer,displayDone,displayBack,deleteDisplayTodo} from './displayDOM';

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
//const tabContent = document.querySelectorAll('[data-tab-content]');

tabs.forEach(tab => {
    tab.addEventListener('click',()=> {
        const tabContent = document.querySelectorAll('[data-tab-content]');
        const target = document.querySelector(tab.dataset.tabTarget);
        tabContent.forEach(tabContent=>tabContent.classList.remove('active'));

        tabs.forEach(tab => {
            tab.classList.remove('active');
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
    if (target){
        displayProjectsContent();
        const targetContent = document.querySelector(target.dataset.tabTarget);

        createProjectsContent.forEach(e=>e.classList.remove('active'));

     //  console.log(target);
       createdProjects.forEach(tab=>{
        tab.classList.remove('active');
       })
        targetContent.classList.add('active');
        target.classList.add('active');
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
        let id = target.parentElement.id;
        deleteDisplayTodo(target,id);
        removeTodo();
    }
})



