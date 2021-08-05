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
app.get('/tasks', (req, res)=>{
    res.send(tasks)
})
app.get('/tasks/:id', (req, res)=>{
    res.send(tasks)
})
// POST TASKS
app.post('/tasks', (req, res)=>{
    const task = req.body;
    task.id = uuidv4();
    tasks.push(task);
    console.log(tasks);
    res.send(tasks)
})
// DELETE TASKS
app.delete('/tasks/:id', (req, res)=>{
    const {id} = req.params;
    let deleteTask = tasks.filter((task)=>task.id !== id);
    tasks = deleteTask;
    res.send(deleteTask)
})
// UPDATE TASKS
app.put('/tasks', (req, res)=>{ 
const {task, date, status, id} =  req.body; 
const taskUpdate = tasks.findIndex(task => task.id === id)
if(task) tasks[taskUpdate].task = task;
if(date) tasks[taskUpdate].date = date;
if(status) tasks[taskUpdate].status = status;
tasks[taskUpdate].id = id;

res.send(tasks);
})

app.listen(port, ()=>{console.log('Server listen on port', port)})


