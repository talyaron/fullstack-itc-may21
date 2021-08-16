export { }

const fs = require("fs");
const { v4: uuidv4 } = require("uuid");


import { Survey } from '../models/surveyModels'

const getAllSurveys = () => {
    const allSurveys = fs.readFileSync("./survey.json");
    return JSON.parse(allSurveys);
}

export function addSurveys(req, res) {
    
        const allSurveys = getAllSurveys();

        const survey = new Survey(req.body.id, req.body.title, req.body.email, req.body.questions)
        allSurveys.push(survey)
        fs.writeFileSync("./survey.json", JSON.stringify(allSurveys));

        const allUsers = JSON.parse(fs.readFileSync("./users.json"));

        const surveyUser = allUsers.find(user => user.email === req.body.email)

        surveyUser.createdSurvey.push(req.body)

        fs.writeFileSync("./users.json", JSON.stringify(allUsers));

        res.send({ ok: "Surveys Created" });

  
}

export function deleteSurveys(req, res) {
    
        const { id, email } = req.params
        let allSurveys = getAllSurveys();
        let allUsers = JSON.parse(fs.readFileSync("./users.json"));

        const user = allUsers.filter(user => user.email === email)
        user[0].createdSurvey = user[0].createdSurvey.filter(survey => survey.id !== id)
        fs.writeFileSync("./users.json", JSON.stringify(allUsers));


        //eliminar de json surveys
        allSurveys = allSurveys.filter(survey => survey.id !== id)
        fs.writeFileSync("./survey.json", JSON.stringify(allSurveys));

        let allUsersUser = JSON.parse(fs.readFileSync("./users.json"));
        const find = allUsersUser.find(user => user.email === email)
        res.send(find.createdSurvey);

}

export function getId(req, res) {
    const id = uuidv4()
    res.send({ id: id })
}
export function getIdQuestions(req, res) {
    const id = uuidv4()
    res.send({ id: id })
}

export function previousSurvey(req, res) {

    const { id } = req.params
    const allSurveys = getAllSurveys();
    const survey = allSurveys.find(survey => survey.id === id)
    res.send(survey)
}
