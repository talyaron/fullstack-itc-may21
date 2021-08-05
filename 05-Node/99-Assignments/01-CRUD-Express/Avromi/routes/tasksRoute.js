const express = require('express')
const router = express.Router()

const {
    addTask
} = require('../models/taskModel.js')
const {
    getAllTasks
} = require('../models/taskModel.js')



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

//router.put('/')
//router.delete

module.exports = router