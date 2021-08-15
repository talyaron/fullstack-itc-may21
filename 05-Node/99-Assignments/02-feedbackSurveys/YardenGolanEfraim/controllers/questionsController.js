const { Question, users } = require('../models.js')

exports.post_questions = (req, res) => {

    try {
        const {
            body
        } = req;
        const { admin } = req.cookies
        const cookie = JSON.parse(admin);
        const {selectedAdmin} = cookie;
        const { adminIndex } = req.cookies
        const cookieIndex = JSON.parse(adminIndex);
        const {selectedAdminIndex} = cookieIndex;
       
    const {questions} = body
    const {surveyID} = body

    questions.forEach(question=>{

        selectedAdmin.createdSurvey.find(survey=>survey.surveyID === surveyID).questions.push(new Question(question))
    
    })
    users.users[selectedAdminIndex] = selectedAdmin
    const adminCookie = JSON.stringify({ selectedAdmin })
    res.cookie('admin', adminCookie, { maxAge: 300000000, httpOnly: true });
    console.log(users.users)
        res.send(selectedAdmin);
    } catch (e) {
        console.log(e)
        res.status(400).send({ 
            error: e.message
        });
    }

}