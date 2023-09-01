import {displayTodaysTodos,displayWeeksTodos,displayTodo,AddHomeCounter,addTodayCounter,addWeekCounter,removeHomeCounter,removeTodayCounter,removeWeekCounter} from './displayDOM';

let toDos=[];
let todaytoDos=[];
let weektoDos=[];
let n=1;
let id=1;

function createToDo  (title, date, checkbox) {
  
    function ToDo (title, dueDate, priority){
        this.title = title;
        this.dueDate = dueDate;
        this.priority=priority;
        this.id = id++;
    }

    ToDo.prototype.display = function() {
        console.log(`task is ${this.title}, date is ${this.dueDate}, priority is ${this.priority}`);
    }

    //const toDo = new ToDo('study','26','high');

   // toDo.display();
   

    const newToDo = new ToDo(title,date,checkbox);
    toDos.push(newToDo);

   //toDos.forEach(e=> {
     //   console.log(e);
  //  })

    AddHomeCounter(toDos.length);

    addToday (date,newToDo);
    addWeek (date,newToDo);

}

function addToday(date,toDo) {

    
    let q = new Date();
    let m = q.getMonth()+1;
    let d = q.getDate();
    let y = q.getFullYear();

    if (m<10){
        m = m.toString().padStart(2,'0');
    }

    if (d<10){
        d = d.toString().padStart(2,'0');
    }

    let today = `${y}-${m}-${d}`;
    if (today===date) {
        todaytoDos.push(toDo)
       displayTodaysTodos(toDo);
    }

    addTodayCounter(todaytoDos.length);
}

function addWeek (date,toDo) {
    let myDate = new Date (date);
    let now = new Date();
    let inAWeek = new Date();
    inAWeek.setDate(inAWeek.getDate()+ 1 * 7);
   if (myDate>=now && myDate<=inAWeek) {
        weektoDos.push(toDo);
        displayWeeksTodos(toDo);
   }

   addWeekCounter(weektoDos.length);
}

function removeTodo (target) {
  toDos.forEach((e,i)=> {
    if (target==e.id)
      toDos.splice(i,1); 
      removeHomeCounter(toDos.length);
  })


  todaytoDos.forEach((e,i)=> {
    if (target==e.id)
      todaytoDos.splice(i,1);
      removeTodayCounter(todaytoDos.length);
  })

  weektoDos.forEach((e,i)=> {
    if (target==e.id)
      weektoDos.splice(i,1);
      removeWeekCounter(weektoDos.length);
    
  })
}


export  {createToDo,addToday,addWeek,removeTodo};