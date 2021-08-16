const { Question, users, getAdminCookie, createAdminCookie, getAdminCookieIndex } = require('../models.js')

exports.post_questions = (req, res) => {

    try {
        const {
            body
        } = req;
        const selectedAdmin = getAdminCookie(req)
        const selectedAdminIndex = getAdminCookieIndex(req)
       
    const {questions} = body  //YS: You can destructure both of them: const { questions, surveyId } = body
    const {surveyID} = body

    questions.forEach(question=>{

        selectedAdmin.createdSurvey.find(survey=>survey.surveyID === surveyID).questions.push(new Question(question)) 
        //YS: Find method returns a object, where is the object? It should be made into a varbiable. 
    
    })
    users.users[selectedAdminIndex] = selectedAdmin  
    createAdminCookie(selectedAdmin, res)
        res.send(selectedAdmin);
    } catch (e) {
        console.log(e)
        res.status(400).send({ 
            error: e.message
        });
    }

}