const createToDo = ()  => {
    function ToDo (title, description, dueDate, priority){
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority=priority;
    }

    ToDo.prototype.display = function() {
        console.log(`task is ${this.title}, description is ${this.description},
        date is ${this.dueDate}, priority is ${this.priority}`);
    }

   /* ToDo.prototype.getToDo = function () {
    } 
    */



    const toDo = new ToDo('study','math','26','high');

    toDo.display();

    function newTask () {
        let task = prompt('enter task');
        let tasks = task.split(',');
        //console.log(tasks);

        return new ToDo(tasks[0],tasks[1],tasks[2],tasks[3]);
    }

    newTask().display();
}

export default createToDo;