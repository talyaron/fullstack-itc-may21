export { }

const fs = require("fs");
const { uuid } = require("uuidv4")

import {Survey} from '../models/survey'


const readAllSurveys = () => {
    const allSurveys = fs.readFileSync("./surveys.json");
    return JSON.parse(allSurveys);
}


export function addSurveys(req, res) {
    try {
        const allSurveys = readAllSurveys();

        console.log(req.body)

        const newSurvey = {
            "id":uuid.v4(),
            ...req.body,
        }

        const question = new Survey(newSurvey.title, newSurvey.title, newSurvey.email, newSurvey.question)
        allSurveys.push(question)
        fs.writeFileSync("./survey.json", JSON.stringify(allSurveys));
        res.send({ ok: "Surveys Created", allSurveys: allSurveys });

    } catch (e) {
        res.status(500).send({ error: `${e}` });
    }
}