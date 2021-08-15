const { Survey, users } = require('../models.js')
const Ajv = require("ajv");
const ajv = new Ajv()

exports.send_survey = (req, res) => {
    try {
        const {id} = req.query;
        console.log(id) 
        const idString = JSON.stringify(id)
        res.cookie('surveyEditID', idString, { maxAge: 300000000, httpOnly: true });
       
        
        res.send(id)
    } catch (e) {
        console.error(e)
    }
}

exports.add_survey = (req, res) => {

    try {
        const schema = {
            type: "object",
            properties: {
                adminEmail: {
                    type:"string"
                },
                surveyName: {
                    type:"string"
                }
            },
            required: ["surveyName", "adminEmail"],
            additionalProperties: false
        }
        const validate = ajv.compile(schema)


        const {
            body
        } = req;

        const valid = validate(body) 
        if (!valid) {
            validate.errors.forEach(err =>
                console.log(err.message)
            )
            throw new Error("Invalid data was transferd")
        }
        
       // users.users.find(find => find.email === body.email )
       users.users.map((user, index) => {
        if(user.email === body.adminEmail) {
            users.users[index].createdSurvey.push(new Survey(body.surveyName, body.adminEmail));
            const selectedAdmin = users.users[index]
            const selectedAdminIndex = index
            const adminCookie = JSON.stringify({ selectedAdmin })
            const adminCookieIndex = JSON.stringify({ selectedAdminIndex })
            res.cookie('admin', adminCookie, { maxAge: 300000000, httpOnly: true });
            res.cookie('adminIndex', adminCookieIndex, { maxAge: 300000000, httpOnly: true });
            res.send(selectedAdmin);
            console.log(selectedAdmin);
        }
    });
        
    } catch (e) {
        console.log(e)
        res.status(400).send({ 
            error: e.message
        });
    }

}

exports.get_survey = (req, res) => {
    try {
        const { surveyEditID } = req.cookies
        const cookieEditID = JSON.parse(surveyEditID);
        const editID = cookieEditID;
        const { admin } = req.cookies
        const cookie = JSON.parse(admin);
        const {selectedAdmin} = cookie;
        console.log(selectedAdmin, editID)
        const surveyInfo = selectedAdmin.createdSurvey.filter(survey=>survey.surveyID === editID)
        res.send(surveyInfo)
    } catch (e) {
        console.error(e)
    }
}

exports.survey_to_answer = (req, res) => {
    const { admin } = req.cookies
    const cookie = JSON.parse(admin);
    const {selectedAdmin} = cookie;
    const {id} = req.query
    const surveyRequired = selectedAdmin.createdSurvey.filter(survey=>survey.surveyID === id)
    res.send(surveyRequired)

}