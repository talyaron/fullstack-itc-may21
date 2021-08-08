const express = require('express');
const app = express();
const port = process.env.PORT || 5500;
const { v4: uuidv4 } = require('uuid');



let tasks = [];

// READ JSON
app.use(express.json());
// READ PUBLIC 
app.use(express.static('public'));
// GET TASKS
app.get('/tasks', (req, res)=>{ //YS: Error handling?
    res.send(tasks)
})
app.get('/tasks/:id', (req, res)=>{  //YS: ?
    res.send(tasks)
})
// POST TASKS
app.post('/tasks', (req, res)=>{ //YS: Error handling?
    const task = req.body;
    task.id = uuidv4();
    tasks.push(task);
    console.log(tasks); //YS: ?
    res.send(tasks)
})
// DELETE TASKS
app.delete('/tasks/:id', (req, res)=>{ //YS: Error handling?
    const {id} = req.params;
    let deleteTask = tasks.filter((task)=>task.id !== id);
    tasks = deleteTask;
    res.send(deleteTask)
})
// UPDATE TASKS
app.put('/tasks', (req, res)=>{  //YS: Error handling? Also, ID should go in params and not the body!
const {taskEdit, dateEdit, statusEdit, id} =  req.body; 
const taskUpdate = tasks.find(task => task.id === id)
taskUpdate.task = taskEdit;
taskUpdate.date = dateEdit;
taskUpdate.status = statusEdit;
taskUpdate.id = id;
console.log(taskUpdate)
res.send(tasks);
})

app.listen(port, ()=>{console.log('Server listen on port', port)})


