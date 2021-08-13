export { }

const fs = require("fs");
const { v4: uuidv4 } = require("uuid");


import { Survey } from '../models/survey'


const readAllSurveys = () => {
    const allSurveys = fs.readFileSync("./survey.json");
    return JSON.parse(allSurveys);
}

export function getUniqueId(req,res){
    const id =  uuidv4()
    res.send({id:id})
}

export function getPreviousSurvey(req, res){
    
    const {id} = req.params
    const allSurveys = readAllSurveys();
    const survey = allSurveys.find(survey => survey.id === id)
    res.send(survey)
}


export function addSurveys(req, res) {
    try {
        const allSurveys = readAllSurveys();


        const survey = new Survey(req.body.id, req.body.title, req.body.email, req.body.questions)
        allSurveys.push(survey)
        fs.writeFileSync("./survey.json", JSON.stringify(allSurveys));

        const allUsers = JSON.parse(fs.readFileSync("./user.json"));

        const surveyUser = allUsers.find(user => user.email === req.body.email)

        surveyUser.surveys.push(req.body)

        fs.writeFileSync("./user.json", JSON.stringify(allUsers));

        res.send({ ok: "Surveys Created"});

    } catch (e) {
        res.status(500).send({ error: `${e}` });
    }
}


// export function deleteSurveys(req,res){
//     try {
//         const {id,email} = req.params
//         let allSurveys = readAllSurveys();
//          if(allSurveys.length !== 0){
//             //  console.log(allSurveys)
//             //  allSurveys = allSurveys.filter(user => (user.id !== id))
//             // // const findSurveyToDelete = userFind.surveys.filter(survey => survey.id !== id)
//             // fs.writeFileSync("./user.json", JSON.stringify(allSurveys));
//             // res.send(allSurveys)

//          } 
//     } catch (e) {
//         res.status(500).send({ error: `${e}` });
//     }
// }