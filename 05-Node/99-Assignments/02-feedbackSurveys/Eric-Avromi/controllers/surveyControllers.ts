export { }

const fs = require("fs");
const { v4: uuidv4 } = require("uuid");


import { Survey, Question, Voter } from '../models/surveyModels'


const readAllSurveys = () => {
    const allSurveys = fs.readFileSync("./survey.json");
    return JSON.parse(allSurveys);
}

export function getUniqueId(req, res) {
    const id = uuidv4()
    res.send({ id: id })
}
export function getUniqueIdQuestions(req, res) {
    const id = uuidv4()
    res.send({ id: id })
}

export function getPreviousSurvey(req, res) {

    const { id } = req.params
    const allSurveys = readAllSurveys();
    const survey = allSurveys.find(survey => survey.id === id)
    
    res.send(survey)
}


export function addSurveys(req, res) {
    try {
        const allSurveys = readAllSurveys();
        console.log(req.body);
        
        const survey = new Survey(req.body.id, req.body.title, req.body.email, req.body.questions)
        allSurveys.push(survey)
        fs.writeFileSync("./survey.json", JSON.stringify(allSurveys));

        const allUsers = JSON.parse(fs.readFileSync("./users.json"));

        const surveyUser = allUsers.find(user => user.email === req.body.email)

        surveyUser.surveys.push(req.body)

        fs.writeFileSync("./users.json", JSON.stringify(allUsers));

        res.send({ ok: "Surveys Created" });

    } catch (e) {
        res.status(500).send({ error: `${e}` });
    }
}


export function deleteSurveys(req, res) {
    try {
        const { id, email } = req.params
        let allSurveys = readAllSurveys();
        let allUsers = JSON.parse(fs.readFileSync("./users.json"));

        const user = allUsers.filter(user => user.email === email)
        user[0].surveys = user[0].surveys.filter(survey => survey.id !== id)
        fs.writeFileSync("./users.json", JSON.stringify(allUsers));


        //eliminar de json surveys
        allSurveys = allSurveys.filter(survey => survey.id !== id)
        fs.writeFileSync("./survey.json", JSON.stringify(allSurveys));

        let allUsersUser = JSON.parse(fs.readFileSync("./users.json"));
        const find = allUsersUser.find(user => user.email === email)
        res.send(find.surveys);



    } catch (e) {
        res.status(500).send({ error: `${e}` });
    }
}
