import {createToDo} from './createToDo';
import {createProject} from './createProject';
let title = [];
let divCounter=0;
let cnt=0;
let projectCounter=0;

const displayInput = () => {
    const inputDiv = document.querySelector('.new-project-input');
    inputDiv.classList.add('hidden');
    const add = document.querySelector('.add-project');
    add.addEventListener('click',displayProjects);

    const cancel = document.querySelector('.cancel-project');
    cancel.addEventListener('click',function(){
        inputDiv.classList.remove('hidden');
    })
    return title;
}

const displayProjects = () => {
    const projectName = document.getElementById('input');

        //ADD CONTENT
    const div = document.createElement('div');
    div.classList.add('project-divs');
    div.dataset.tabContent='';
    div.id = `project${cnt}`;
    const title = document.createElement('h2');
    title.innerHTML = projectName.value + ' List:'
    const button = document.createElement('button');
    button.classList.add('add-new-project-todo');
    button.innerHTML = '+ Add new ';
    div.appendChild(title);
    div.appendChild(button);
    const main = document.querySelector('.main');
    main.appendChild(div);
   
    if (projectName.value!='') {
        createProject(projectName.value);
        const list = document.querySelector('.projects');
        const display = document.createElement('li');
        display.id=projectCounter++;
        display.classList.add('project-container');
        const displayBtn = document.createElement('button');
        const span = document.createElement('span');
        const deleteProject = document.createElement('img');
        deleteProject.src='../images/trash-outline.svg';
        deleteProject.classList.add('delete-Project');
        span.classList.add('project-span');
        span.innerHTML='0';
        displayBtn.innerHTML = projectName.value;
        displayBtn.classList.add('dynamic-project');
        displayBtn.dataset.tabTarget= `#project${cnt}`;
        display.appendChild(displayBtn);
        display.appendChild(span);
        display.appendChild(deleteProject);
        list.appendChild(display);
    
    cnt++;
    }
    
 
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
    checkboxes.forEach(checkbox => {
        if(checkbox.checked) {
            checkedCheckbox = checkbox.id;
        }
    })
    if (title.value!='')
    displayTodo(title,date,checkedCheckbox);
    
 }

 const displayTodo = (title,date,checkedCheckbox) => {

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

        getColor(checkedCheckbox, newTodoDiv);

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

     getColor(toDo.priority, newTodoDiv);

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

     getColor(toDo.priority, newTodoDiv);
 }

 function displayDone(id) {
    const Divs = document.querySelectorAll('.todo-div');
    Divs.forEach(e=> {
      if (e.id===id) {
        e.style.textDecoration='line-through';
        if (e.firstChild.checked===false)
            e.firstChild.checked=true;          
      }     
    }) 
    
 }

 function displayBack (id) {
    const Divs = document.querySelectorAll('.todo-div');
    Divs.forEach(e=> {
        if (e.id===id) {
            e.style.textDecoration='none';
        if (e.firstChild.checked===true)
            e.firstChild.checked=false;
        }
        
    })
 }

 function deleteDisplayTodo (id) {
    const Divs = document.querySelectorAll('.todo-div');
    const active = document.querySelectorAll('[data-tab-content]');

    //remove from every page the element
    Divs.forEach(e=> {
        active.forEach((el,i)=> {
            if (el.contains(e) && e.id===id) {
                el.removeChild(e);
            }
        })
    }) 
 }


    function AddHomeCounter (length) {
        const counter = document.getElementById('home');
        const page = document.querySelectorAll('.number-of-todo');
        page[0].innerHTML=length;
    }

    function addTodayCounter (length) {
        const counter = document.getElementById('today');
        const page = document.querySelectorAll('.number-of-todo');
        page[1].innerHTML=length;
    }

    function addWeekCounter (length) {
        const counter = document.getElementById('week');
        const page = document.querySelectorAll('.number-of-todo');
        page[2].innerHTML=length;
    }

    function removeHomeCounter (length) {
        const counter = document.getElementById('home');
        const page = document.querySelectorAll('.number-of-todo');
        page[0].innerHTML=length;
    }

    function removeTodayCounter(length) {
        const counter = document.getElementById('today');
        const page = document.querySelectorAll('.number-of-todo');
        page[1].innerHTML=length;
    }

    function removeWeekCounter(length) {
        const counter = document.getElementById('week');
        const page = document.querySelectorAll('.number-of-todo');
        page[2].innerHTML=length;
    }

    function addProjectCounter(div,length) {
        const counter = window.document.querySelectorAll('.project-span');
        counter.forEach((e,i)=> {
            if (i==div) {
                e.innerHTML=length;
            }
        })
    }

    function removeProjectCounter (project, length) {
        const counter = window.document.querySelectorAll('.project-span');
        counter.forEach((e,i)=> {
            if (project==i) 
            {
                e.innerHTML=length;
            }
        })
    }

    function displayProjectTodos (page,toDo) {
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
        toDoDate.innerHTML = toDo.value;
        deleteTodo.src='../images/trash-outline.svg'
        newTodoDiv.appendChild(checkbox);
        newTodoDiv.appendChild(toDotitle);
        newTodoDiv.appendChild(toDoDate);
        newTodoDiv.appendChild(deleteTodo);
        //get all divs
        const pages = window.document.querySelectorAll('.project-divs');
        pages.forEach(e=> {
            if (e.id==page)
            e.appendChild(newTodoDiv);
        })
        
        getColor(toDo.priority, newTodoDiv);
    }
 
    //handle priority color 
    function getColor (prio,div) {
            if (prio==='high-priority')
            div.style.backgroundColor= 'red';
            else if (prio==='medium-priority')
            div.style.backgroundColor='orange';
            else if (prio==='low-priority')
            div.style.backgroundColor='green';
            else
            div.style.backgroundColor='white';
    }

    //delete project display
    function deleteProject (target) {
        const containers = window.document.querySelectorAll('.project-container');
        const contentContainers = window.document.querySelectorAll('.project-divs');
        const list = document.querySelector('.projects');
        const main = document.querySelector('.main');
        containers.forEach((e,i)=> {
            if (target==e.id) {
                let arr=[];
                list.removeChild(e);
                const todos = contentContainers[i].children;
                for (let i=0; i<todos.length;i++) {
                 arr[i]=todos[i].id;
                }
                arr.forEach((e,i)=>{
                    deleteDisplayTodo(e);
                })
                main.removeChild(contentContainers[i]);
            }
        })
    }
 



export {displayInput,displayProjects,displayTodoContainer,
    displayTodo,displayTodaysTodos,displayWeeksTodos,displayDone,displayBack,deleteDisplayTodo,AddHomeCounter,addTodayCounter,
    addWeekCounter,removeHomeCounter,removeTodayCounter,removeWeekCounter,
    displayProjectTodos,addProjectCounter,removeProjectCounter,deleteProject};
