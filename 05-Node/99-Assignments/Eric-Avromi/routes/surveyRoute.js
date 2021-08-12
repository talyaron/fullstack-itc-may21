const express = require('express')
const router = express.Router();
const {
    v4: uuidv4 
} = require('uuid');
const {
    addSurvey
} = require('../models/surveyModel.js')



class Survey {
    constructor(admin) {
        console.log('sdgdfgdfhdfh')
        this.title = '';
        this.id = uuidv4();
        this.questions = [];
        this.admin = admin;
    }
}

router.post('/newSurvey', (req, res) => {
    try {
        const admin = req.cookies.cookie.email;
        console.log(admin)
        const newSurvey = new Survey(admin)
        addSurvey(newSurvey);//will give back all Surveys 
        res.send({ok:true, newSurvey:newSurvey},)
        console.log('insdie new survey route ');


    } catch (error) {
        res.status(500).send(error.message)
    }
})



// router.get('/', (req, res) => {
//     try {
//         const allSurveys = getAllSurveys()
//         res.send(
//             allSurveys
//         )
//     } catch (error) {
//         res.status(500).send(error.message) 
//     }
// })

// router.delete('/deleteSurvey', (req, res) => { 
//     try {
//         console.log("before id");
//         const id = req.query.id;


//         const allSurveys = deleteSurvey(id)
//         res.send(
//             allSurveys
//         )
//     } catch (error) {
//         res.status(500).send(error.message)
//     }
// })

// router.delete('/deleteQuestion', (req, res) => { 
//     try {
//         console.log("before id");
//         const id = req.query.id;


//         const allQuestions = deleteQuestion(id)
//         res.send(
//             allQuestions
//         )
//     } catch (error) {
//         res.status(500).send(error.message)
//     }
// })



// router.post('/newQuestion', (req, res) => { 
//     try {
//         const title = req.body.title;
//         const allQuestions = addQuestion(title)
//         res.send(
//             allQuestions
//         )
//     } catch (error) {
//         res.status(500).send(error.message)
//     }
// })


// router.put('/editSurvey', (req, res) => {
//     try {

//         const newTitle = req.body.newTitle;
//         const id = req.body.id; 
//         console.log(id);
//         const allSurveys =  editSurvey(id, newTitle)
//         console.log("afetr edit task ");
//         res.send(
//             allSurveys
//         )
//     } catch (error) {
//         res.status(500).send(error.message)
//     }
// })

// router.put('/editQuestion', (req, res) => {
//     try {

//         const newTitle = req.body.newTitle;
//         const id = req.body.id; 
//         console.log(id);
//         const allQuestions =  editQuestion(id, newTitle)
//         console.log("afetr edit task ");
//         res.send(
//             allQuestions
//         )
//     } catch (error) {
//         res.status(500).send(error.message)
//     }
// })


module.exports = router