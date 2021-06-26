

class Task{
    task:string;
    date:Date;
    id:string;
    constructor(task:string,date:Date){
        this.task=task
        this.date=date
        this.id="id"+Math.random().toString(16).slice(2)
    }
}

class List{
    toDoList:Array<Task>=[];
    addTask(task:Task){
        try {
           this.toDoList.push(task); 
           localStorage.setItem("taskList", JSON.stringify(this.toDoList));
        } catch (e) {
            console.log("Error");
        }
    }
    displayList(){
         const root:HTMLElement=document.querySelector('#root');
         let html:any=this.toDoList.map(el=>{
             return(
                ` <li class="Test">${el.task}  ${el.date} <button onclick='handelRemove("${el.id}")'><i class="fas fa-trash"></i></button> </li>`
             )
         }).join('');
      root.innerHTML=html;
    }
    deleteList(id:string):void{
        this.toDoList = this.toDoList.filter((ev) => ev.id !== id);
        this.displayList();
    }
}
const list= new List();
function handelTask(ev:any):void{
    ev.preventDefault();
    const task:string=ev.target.elements.task.value;
    const date:Date= ev.target.elements.date.value;
    const newTask= new Task(task,date);
    list.addTask(newTask);
    list.displayList();
    ev.target.reset();
}
const handelRemove = (listId: string): void => {
    list.deleteList(listId);
  }
  