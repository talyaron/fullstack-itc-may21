const express = require('express')
const { v4: uuidv4 } = require('uuid')
const Joi = require('joi')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(express.static('public'))

let tasksOnServer = []

// GET (CRUD:READ) tasks
app.get('/getAllTasks', (req, res) => {
    try {
        res.send(tasksOnServer)
    } catch (er) {
        console.error(er)
    }
})
app.get('/tasks/:id', (req, res)=>{
    res.send(tasksOnServer)
})

// POST (CRUD:Create) tasks


// PUT (CRUD:Update) tasks


// DELETE (CRUD:Delete) tasks



//Listen on port:
app.listen(port, () => {
    console.log(`Server listening on port ${port}...`)
})