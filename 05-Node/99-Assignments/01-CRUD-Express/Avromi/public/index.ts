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



const title = "new title"




//create form handle to submit title....
async function addTask(title) {
    try {
        const res = await axios.post('/tasks/newTask', { title })
      const allTasks = res.data
      console.log(allTasks);
    } catch (error) {
        console.log(error);
    }

}

addTask(title)
