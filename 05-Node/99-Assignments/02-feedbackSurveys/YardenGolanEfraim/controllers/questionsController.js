const models = require('../models')
const Ajv = require("ajv")

exports.post_questions = (req, res) => {
    try {
        const {
            body
        } = req;
       
    const {questions} = body
    const {surveyID} = body

    questions.forEach(question=>{
        selectedAdmin.createdSurvey.find(survey=>survey.surveyID === surveyID).questions.push(new Question(question))    
    })

    users.users[selectedAdminIndex] = selectedAdmin
    console.log(users.users)
        res.send(selectedAdmin);
    } catch (e) {
        console.log(e)
        res.status(400).send({ 
            error: e.message
        });
    }
}