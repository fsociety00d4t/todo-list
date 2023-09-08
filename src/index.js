import {removeTodo} from './createToDo';
import {displayInput,displayTodoContainer,displayDone,
  displayBack,deleteDisplayTodo,deleteProject} from './displayDOM';
import {deleteFromProjectArray} from './createProject';

//handle new project
const newProject = document.querySelector('.new-project-btn');
newProject.addEventListener('click',function(){
   displayInput();
})

//handle Tabs
const tabs = document.querySelectorAll('[data-tab-target]');

tabs.forEach(tab => {
    tab.addEventListener('click',()=> {
        const allTabs = window.document.querySelectorAll('[data-tab-target');
        const tabContent = window.document.querySelectorAll('[data-tab-content]');
        const target = window.document.querySelector(tab.dataset.tabTarget);
        tabContent.forEach(tabContent=>tabContent.classList.remove('active'));

        allTabs.forEach(tab => {
            tab.classList.remove('active');
        })
        tab.classList.add('active');
        target.classList.add('active');
    })
    
})

//handle dynamically created projects
 /document.addEventListener('click',function(e){
    const target = e.target.closest('.dynamic-project');
    const createdProjects = document.querySelectorAll('[data-tab-target]');
    const createProjectsContent = document.querySelectorAll('[data-tab-content]');
    if (target){
        const targetContent = document.querySelector(target.dataset.tabTarget);

        createProjectsContent.forEach(e=>e.classList.remove('active'));

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
})



//handle checked ToDos 

document.addEventListener('click',function(e){
    const target = e.target.closest('.checkbox');
    if (target) {

        
        if (target.checked===false) {  //works opposite.
            console.log(target.checked===false);
            let id = target.parentElement.id;
            displayBack(id);
        }

      else {
        let id = target.parentElement.id;
        console.log('value is ' + target.value);
        displayDone(id);
      }

    }
})

//handle delete toDo

document.addEventListener('click',function(e){
    const target = e.target.closest('.delete');
    if (target) {
        let id = target.parentElement.id;
        removeTodo(target.parentElement.id);
        deleteDisplayTodo(id);
        
        
    }
})

//handle new Todo on dynamic projects
window.document.addEventListener('click',function(e){
  const target = e.target.closest('.add-new-project-todo');
  if (target) {
     displayTodoContainer();
  }
}) 

//handle delete project
window.document.addEventListener('click',function(e){
  const target = e.target.closest('.delete-Project');
  if (target) {
     deleteProject(target.parentElement.id);
      deleteFromProjectArray(target.parentElement.id);
     // removeTodo(target.parentElement.id);
      
      
  }
})

