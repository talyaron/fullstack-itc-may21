/* List Ninja server file
This app has CRUD features using a Task class

*/

const express = require('express')
const Joi = require('joi')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(express.static('public'))

class Task {
    constructor(text) {
        this.text = text
        this.id = Math.random().toString(16).slice(2)
        this.isDone = false
    }
    update(newTask) {
        this.text = newTask.text
    }
}
// The array to keep the tasks on the server:
const tasksOnServer = []
// Two tasks to have some content on start:
tasksOnServer.push(new Task("Call the bank"))
tasksOnServer.push(new Task ("Take out the trash"))

// GET (CRUD:READ) all tasks
app.get('/tasks', (req, res) => {
        res.send(tasksOnServer)
})

// POST (CRUD:Create) tasks
app.post('/tasks', (req, res)=> {
    console.log(req.body);
    const { text } = req.body
    const task = new Task(text)
    tasksOnServer.push(task)
    console.log('Posted!', tasksOnServer)
    res.send(task)
})

// PUT (CRUD:Update) tasks
app.put('/tasks', (req, res)=>{ 
    const { task  } = req.body
    console.log(task.text)
    const index = tasksOnServer.findIndex(t => t.id === task.id)
    if (index === -1) {
        res.status(404)
        res.send("Task not found.")
        return
    }
    tasksOnServer[index].text = task.text
    tasksOnServer[index].isDone = task.isDone
    res.send(tasksOnServer[index])
})

// DELETE (CRUD:Delete) tasks
app.delete('/tasks/:id', (req, res)=>{
    const { id } = req.params
    const taskIndex = tasksOnServer.findIndex((task)=> task.id === id)
    tasksOnServer.splice(taskIndex, 1)
    res.send(tasksOnServer)
})


// Listen on port:
app.listen(port, () => {
    console.log(`Server listening on port ${port}...`)
})