export { }

const fs = require("fs");
const { v4: uuidv4 } = require("uuid");


import { Survey } from '../models/survey'


const readAllSurveys = () => {
    const allSurveys = fs.readFileSync("./survey.json");
    return JSON.parse(allSurveys);
}


export function addSurveys(req, res) {
    try {
        const allSurveys = readAllSurveys();

        const newSurvey = {
            id: uuidv4(),
            ...req.body,
        }

        const survey = new Survey(newSurvey.id, newSurvey.title, newSurvey.email, newSurvey.questions)
        allSurveys.push(survey)
        fs.writeFileSync("./survey.json", JSON.stringify(allSurveys));

        const allUsers = JSON.parse(fs.readFileSync("./user.json"));

        const surveyUser = allUsers.find(user => user.email === newSurvey.email)

        surveyUser.surveys.push(newSurvey)

        fs.writeFileSync("./user.json", JSON.stringify(allUsers));

        res.send({ ok: "Surveys Created" });

    } catch (e) {
        res.status(500).send({ error: `${e}` });
    }
}

