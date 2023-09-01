import {displayTodaysTodos,displayWeeksTodos,displayTodo} from './displayDOM';

let toDos=[];
let todaytoDos=[];
let weektoDos=[];

function createToDo  (title, date, checkbox) {
  
    function ToDo (title, dueDate, priority){
        this.title = title;
        this.dueDate = dueDate;
        this.priority=priority;
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

    addToday (date,newToDo);
    addWeek (date,newToDo);

}

function addToday(date,toDo) {

    
    let q = new Date();
    let m = q.getMonth()+1;
    let d = q.getDate();
    let y = q.getFullYear();

  //  console.log(q);

    if (m<10){
      //  console.log(typeof(m));
        m = m.toString().padStart(2,'0');
       // console.log(`m is ${m}`);
    }

    if (d<10){
      //  console.log(typeof(m));
        d = d.toString().padStart(2,'0');
       // console.log(`m is ${m}`);
    }

    let today = `${y}-${m}-${d}`;
   // console.log(today);
    //console.log(`today is ${y} ${m} ${d}`);
   // console.log(`the date is ${date}`);
    //  console.log(today);
   //   console.log(date);

    if (today===date) {
      //  console.log('same');
     // console.log('here');
        todaytoDos.push(toDo)
       displayTodaysTodos(toDo);
     //  return true;
    }
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
}

export  {createToDo,addToday,addWeek};