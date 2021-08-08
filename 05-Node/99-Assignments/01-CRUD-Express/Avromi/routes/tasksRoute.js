const express = require('express')
const router = express.Router()

const {
    addTask
} = require('../models/taskModel.js')
const {
    getAllTasks
} = require('../models/taskModel.js')
const {
    deleteTask
} = require('../models/taskModel.js')
const {
    editTask
} = require('../models/taskModel.js')

router.get('/', (req, res) => {
    try {
        const allTasks = getAllTasks()
        res.send(
            allTasks
        )
    } catch (error) {
        res.status(500).send(error.message)
    }
})

router.delete('/delete', (req, res) => {
    try {
        console.log("before id");
        const id = req.query.id;
        
     
        const allTasks = deleteTask(id)
        res.send(
            allTasks
        )
    } catch (error) {
        res.status(500).send(error.message)
    }
})

router.post('/newTask', (req, res) => {
    try {
        const title = req.body.title;
        const allTask = addTask(title)
        res.send(
            allTask
        )
    } catch (error) {
        res.status(500).send(error.message)
    }
})

router.put('/editTask', (req, res) => {
    try {
   
        const newTitle = req.body.newTitle;
        const id = req.body.id;
        console.log(id);
        const allTasks =  editTask(id, newTitle)
        console.log("afetr edit task ");
        res.send(
            allTasks
        )
    } catch (error) {
        res.status(500).send(error.message)
    }
})

module.exports = router