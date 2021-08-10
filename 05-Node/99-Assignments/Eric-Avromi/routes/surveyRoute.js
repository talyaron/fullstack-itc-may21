const express = require('express')
const router = express.Router()

// const {                                    ///YS: const { addTask, getAllTasks, deleteTask, editTask } = require('../models/taskModel.js')
//     addSurvey
// } = require('../models/surveyModel.js')
// const {
//     getAllSurveys
// } = require('../models/surveyModel.js')
// const {
//     deleteSurvey
// } = require('../models/taskModel.js')
// const {
//     editSurvey
// } = require('../models/surveyModel.js')

// const {
//     editSurvey
// } = require('../models/surveyModel.js')
// const {
//     editSurvey
// } = require('../models/surveyModel.js')
// const {
//     editSurvey
// } = require('../models/surveyModel.js')





router.get('/', (req, res) => {
    try {
        const allSurveys = getAllSurveys()
        res.send(
            allSurveys
        )
    } catch (error) {
        res.status(500).send(error.message) 
    }
})

router.delete('/deleteSurvey', (req, res) => { 
    try {
        console.log("before id");
        const id = req.query.id;
        
     
        const allSurveys = deleteSurvey(id)
        res.send(
            allSurveys
        )
    } catch (error) {
        res.status(500).send(error.message)
    }
})

router.delete('/deleteQuestion', (req, res) => { 
    try {
        console.log("before id");
        const id = req.query.id;
        
     
        const allQuestions = deleteQuestion(id)
        res.send(
            allQuestions
        )
    } catch (error) {
        res.status(500).send(error.message)
    }
})

router.post('/newSurvey', (req, res) => { 
    try {
        const title = req.body.title;
        const allSurvey = addSurvey(title)
        res.send(
            allSurvey
        )
    } catch (error) {
        res.status(500).send(error.message)
    }
})

router.post('/newQuestion', (req, res) => { 
    try {
        const title = req.body.title;
        const allQuestions = addQuestion(title)
        res.send(
            allQuestions
        )
    } catch (error) {
        res.status(500).send(error.message)
    }
})


router.put('/editSurvey', (req, res) => {
    try {
   
        const newTitle = req.body.newTitle;
        const id = req.body.id; 
        console.log(id);
        const allSurveys =  editSurvey(id, newTitle)
        console.log("afetr edit task ");
        res.send(
            allSurveys
        )
    } catch (error) {
        res.status(500).send(error.message)
    }
})

router.put('/editQuestion', (req, res) => {
    try {
   
        const newTitle = req.body.newTitle;
        const id = req.body.id; 
        console.log(id);
        const allQuestions =  editQuestion(id, newTitle)
        console.log("afetr edit task ");
        res.send(
            allQuestions
        )
    } catch (error) {
        res.status(500).send(error.message)
    }
})


module.exports = router