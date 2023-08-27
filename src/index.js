//console.log("HI");
import createToDo from './createToDo';
import createProject from './createProject';
import {displayProjects} from './displayDOM';

//createProject();
//createToDo();
let activePage;
const newProject = document.querySelector('.new-project-btn');


newProject.addEventListener('click',function(){
    createProject();
    displayProjects();
})

//handle Tabs
const tabs = document.querySelectorAll('[data-tab-target]');
const tabContent = document.querySelectorAll('[data-tab-content]');

tabs.forEach(tab => {
    tab.addEventListener('click',()=> {
        const target = document.querySelector(tab.dataset.tabTarget);
        tabContent.forEach(tabContent=>tabContent.classList.remove('active'));

        tabs.forEach(tab => {
            tab.classList.remove('active');
        })
        tab.classList.add('active');
        target.classList.add('active');
    })
    
})


