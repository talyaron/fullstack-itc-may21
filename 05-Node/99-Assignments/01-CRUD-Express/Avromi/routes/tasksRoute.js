const express = require('express')
const router = express.Router()

const {                                    ///YS: const { addTask, getAllTasks, deleteTask, editTask } = require('../models/taskModel.js')
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
        res.status(500).send(error.message) //YS: Good
    }
})

router.delete('/delete', (req, res) => { //YS: Nice
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

router.post('/newTask', (req, res) => { //YS: Good
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
        const id = req.body.id; //YS: Should pass the id through params/query
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