const express = require('express')
const router = express.Router();
const {
    v4: uuidv4
} = require('uuid');
const fs = require('fs')
// const {addSurvey} = require('../models/surveyModel.js');
const {
    getAllSurveys
} = require('../models/surveyModel')
const {
    getUser
} = require('../middlewares/user');
const {
    get
} = require('./userRoutes');

class Survey {
    constructor() {

        this.title = '';
        this.questions = [];
        this.admin = "";
        this.id = ""
    }
}

const newSurvey = new Survey()

router.post('/newSurvey', (req, res) => {
    try {
        const admin = req.cookies.cookie.email;
        newSurvey.id = uuidv4()
        // addSurvey(newSurvey);

        res.send({
            ok: true,
            newSurvey: newSurvey
        })
    } catch (error) {
        res.status(500).send(error.message)
    }
})


router.get('/getAllSurveys', (req, res) => {
    const surveys = getAllSurveys()
    res.send(surveys)
})

router.delete('/deleteSurvey/:id', (req, res) => {
    const id = req.params.id
    const surveys = getAllSurveys()
    const newSurveys = surveys.filter(survey => {survey.id !== id              
    
    })
    console.log(newSurveys);
    fs.writeFileSync('./survey.json', JSON.stringify(newSurveys))
    res.send(newSurveys)

})


router.post('/pepe', (req, res) => {
    try {
        const admin = req.cookies.cookie.email;
        const allUsers = JSON.parse(fs.readFileSync("./users.json"));
        const findUser = allUsers.find(user => user.email === admin)
        if (findUser) {
            findUser.createdSurvey.push(req.body)
                fs.writeFileSync("./users.json", JSON.stringify(allUsers))

                newSurvey.title = req.body.title
                newSurvey.questions = req.body.questions
                newSurvey.admin = req.cookies.cookie.email

                const allSurveys = fs.readFileSync("./survey.json");
                const allPars = JSON.parse(allSurveys);
                allPars.push(newSurvey)
                fs.writeFileSync("./survey.json", JSON.stringify(allPars))

                res.send({
                    ok: true
                })
            
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
})




module.exports = router