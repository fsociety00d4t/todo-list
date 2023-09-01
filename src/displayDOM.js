import {createToDo} from './createToDo';
import createProject from './createProject';
let title = [];
let divCounter=0;
const displayInput = () => {
    const inputDiv = document.querySelector('.new-project-input');
    inputDiv.classList.add('hidden');
  //  const projectName = document.getElementById('input');
    const add = document.querySelector('.add-project');
    add.addEventListener('click',displayProjects);

    const cancel = document.querySelector('.cancel-project');
    cancel.addEventListener('click',function(){
        inputDiv.classList.remove('hidden');
    })
    return title;
}

const displayProjects = () => {

   // const inputDiv = document.querySelector('.new-project-input');
   // inputDiv.classList.add('hidden');
    
    const projectName = document.getElementById('input');
   // const add = document.querySelector('.add-project');
   // add.addEventListener('click',function() {
      //  console.log(projectName.value);
        //create new project display
       let x = createProject(projectName.value);
    const list = document.querySelector('.projects');
    const display = document.createElement('li');
    const displayBtn = document.createElement('button');
    const span = document.createElement('span');
    span.innerHTML='6';
    displayBtn.innerHTML = projectName.value;
    displayBtn.classList.add('dynamic-project');
    displayBtn.dataset.tabTarget = '#hello';
    display.appendChild(displayBtn);
    display.appendChild(span);
    list.appendChild(display);
   // })
    //add the project to array
  // title.push(projectName.value);
   

}

//create new project page
const displayProjectsContent = () => {
    const mainDiv = document.querySelector('.main');
    let test = document.createElement('p');
    test.innerHTML = 'OK';
    test.id='hello';
    test.dataset.tabContent='';
    mainDiv.appendChild(test);
}

const displayTodoContainer = () => {
    const todoContainer = document.querySelector('.new-todo-container');
    todoContainer.classList.add('active');
    const addTodo = document.querySelector('.add-todo');
    addTodo.addEventListener('click',addNewTodo);
    const cancelTodo = document.querySelector('.cancel-todo');
    cancelTodo.addEventListener('click',hideTodoContainer);
    }


const hideTodoContainer = () => {
    const todoContainer = document.querySelector('.new-todo-container');
    const title = document.getElementById('title');
    const date = document.getElementById('date');
    const checkboxes = document.querySelectorAll('.priority');

    title.value='';
    date.value='';
    todoContainer.classList.remove('active');
    checkboxes.forEach(checkbox=> {
       if(checkbox.checked)
            checkbox.checked=false;  //no need
    })

}

const addNewTodo = () => {
    let checkedCheckbox;
    const title = document.getElementById('title');
    const date = document.getElementById('date');
    const checkboxes = document.querySelectorAll('.priority');
  //  console.log(title.value);
 //   console.log(date.value);
    checkboxes.forEach(checkbox => {
        if(checkbox.checked) {
            checkedCheckbox = checkbox.id;
           // console.log(checkbox.id);
        }
    })
    if (title.value!='')
    displayTodo(title,date,checkedCheckbox);
    //return title,date,checkedCheckbox;
    
 }

 const displayTodo = (title,date,checkedCheckbox) => {

   // createToDo(title.value,date.value,checkedCheckbox); 

    const home = document.getElementById('home');
    const checkbox = document.createElement('input');
    checkbox.type='checkbox';
    checkbox.classList.add('checkbox');
    const newTodoDiv = document.createElement('div');
    newTodoDiv.classList.add('todo-div');
    divCounter++;
    newTodoDiv.id=divCounter;
    const toDotitle = document.createElement('p');
    const toDoDate = document.createElement('p');
    const deleteTodo = document.createElement('img');
    deleteTodo.classList.add('delete');
    toDotitle.innerHTML = title.value;
    toDoDate.innerHTML = date.value;
    deleteTodo.src='../images/trash-outline.svg'
    newTodoDiv.appendChild(checkbox);
    newTodoDiv.appendChild(toDotitle);
    newTodoDiv.appendChild(toDoDate);
    newTodoDiv.appendChild(deleteTodo);
    home.appendChild(newTodoDiv);

    // handle priority color
    console.log(checkedCheckbox);
    if (checkedCheckbox==='high-priority')
        newTodoDiv.style.backgroundColor= 'red';
    else if (checkedCheckbox==='medium-priority')
        newTodoDiv.style.backgroundColor='orange';
    else if (checkedCheckbox==='low-priority')
        newTodoDiv.style.backgroundColor='green';
    else
        newTodoDiv.style.backgroundColor='white';

        createToDo(title.value,date.value,checkedCheckbox); 
 }

 const displayTodaysTodos = (toDo) => {
    const today = document.getElementById('today');
    const checkbox = document.createElement('input');
    checkbox.type='checkbox';
    checkbox.classList.add('checkbox');
    const newTodoDiv = document.createElement('div');
    newTodoDiv.classList.add('todo-div');
    newTodoDiv.id=divCounter;
    const toDotitle = document.createElement('p');
    const toDoDate = document.createElement('p');
    const deleteTodo = document.createElement('img');
    deleteTodo.classList.add('delete');
    toDotitle.innerHTML = toDo.title;
    toDoDate.innerHTML = date.value;
    deleteTodo.src='../images/trash-outline.svg'
    newTodoDiv.appendChild(checkbox);
    newTodoDiv.appendChild(toDotitle);
    newTodoDiv.appendChild(toDoDate);
    newTodoDiv.appendChild(deleteTodo);
    today.appendChild(newTodoDiv);

       // handle priority color
    console.log(toDo.priority);
    if (toDo.priority==='high-priority')
        newTodoDiv.style.backgroundColor= 'red';
    else if (toDo.priority==='medium-priority')
        newTodoDiv.style.backgroundColor='orange';
    else if (toDo.priority==='low-priority')
        newTodoDiv.style.backgroundColor='green';
    else
        newTodoDiv.style.backgroundColor='white';

 }

 const displayWeeksTodos = (toDo) => {
    const week = document.getElementById('week');
    const checkbox = document.createElement('input');
    checkbox.type='checkbox';
    checkbox.classList.add('checkbox');
    const newTodoDiv = document.createElement('div');
    newTodoDiv.classList.add('todo-div');
    newTodoDiv.id=divCounter;
    const toDotitle = document.createElement('p');
    const toDoDate = document.createElement('p');
    const deleteTodo = document.createElement('img');
    deleteTodo.classList.add('delete');
    toDotitle.innerHTML = toDo.title;
    toDoDate.innerHTML = date.value;
    deleteTodo.src='../images/trash-outline.svg'
    newTodoDiv.appendChild(checkbox);
    newTodoDiv.appendChild(toDotitle);
    newTodoDiv.appendChild(toDoDate);
    newTodoDiv.appendChild(deleteTodo);
    week.appendChild(newTodoDiv);

       // handle priority color
       console.log(toDo.priority);
       if (toDo.priority==='high-priority')
           newTodoDiv.style.backgroundColor= 'red';
       else if (toDo.priority==='medium-priority')
           newTodoDiv.style.backgroundColor='orange';
       else if (toDo.priority==='low-priority')
           newTodoDiv.style.backgroundColor='green';
       else
           newTodoDiv.style.backgroundColor='white';
 }

 function displayDone(target,id) {
    const Divs = document.querySelectorAll('.todo-div');
    const checkboxes = document.querySelectorAll('.checkbox');
    Divs.forEach(e=> {
      if (e.id===id) {
        e.style.textDecoration='line-through';
        if (e.firstChild.checked===false)
            e.firstChild.checked=true;          
      }     
    }) 
    
 }

 function displayBack (target,id) {
    const Divs = document.querySelectorAll('.todo-div');
    Divs.forEach(e=> {
        if (e.id===id) {
            e.style.textDecoration='none';
        if (e.firstChild.checked===true)
            e.firstChild.checked=false;
        }
        
    })
 }

 function deleteDisplayTodo (target,id) {
    console.log(target);
    const Divs = document.querySelectorAll('.todo-div');
    const home = document.getElementById('home');
    const today = document.getElementById('today');
    const week = document.getElementById('week');
    const active = document.querySelectorAll('[data-tab-content]');

    //being able to remove from every page
    active.forEach(el=> {
        if(el.classList.contains('active')) {
            Divs.forEach(e=> {
                if(e.contains(target))
                {
                    el.removeChild(e);
                }
                
            })
        }
    })
    //remove from every page the element
    Divs.forEach(e=> {
        if (home.contains(e) && e.id===id) {
            home.removeChild(e);
        }
        if (today.contains(e) && e.id===id){
            today.removeChild(e);
        }

        if (week.contains(e) && e.id===id){
            week.removeChild(e);
        }
    }) 
 }



export {displayInput,displayProjects,displayProjectsContent,displayTodoContainer,displayTodo,displayTodaysTodos,displayWeeksTodos,displayDone,displayBack,deleteDisplayTodo};

