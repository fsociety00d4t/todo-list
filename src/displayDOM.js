import createToDo from './createToDo';

const displayProjects = () => {

    const inputDiv = document.querySelector('.new-project-input');
    inputDiv.classList.add('hidden');
    
    const projectName = document.getElementById('input');
    const add = document.querySelector('.add-project');
    add.addEventListener('click',function() {
        console.log(projectName.value);
        //create new project display
    const list = document.querySelector('.projects');
    const display = document.createElement('li');
    const displayBtn = document.createElement('button');
    const span = document.createElement('span');
    span.innerHTML='6';
    displayBtn.innerHTML = projectName.value;
    display.appendChild(displayBtn);
    display.appendChild(span);
    list.appendChild(display);
    })

    const cancel = document.querySelector('.cancel-project');
    cancel.addEventListener('click',function(){
        inputDiv.classList.remove('hidden');
    })

}



export {displayProjects};