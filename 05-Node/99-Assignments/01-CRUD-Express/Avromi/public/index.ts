// function allowDrop(ev) {
//     ev.preventDefault();
//   }
  
//   function drag(ev) {
//     ev.dataTransfer.setData("text", ev.target.id);
//   }
  
//   function drop(ev) {
//     ev.preventDefault();
//     const data = ev.dataTransfer.getData("text");
//     ev.target.appendChild(document.getElementById(data));
//   }


class Title{
    title:string 
    constructor(title:string){
    this.title = title;
}}
const title = new Title( 'notwe one ');




//create form handle to submit title....

axios.post('/newTask',{title})
.then(res=>{
    console.log(res.data)
})
.catch(e=>{
    console.error(e)
})