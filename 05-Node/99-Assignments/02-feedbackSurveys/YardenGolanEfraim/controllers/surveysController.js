const models = require('../models')
const Ajv = require("ajv");

exports.addSurvey = (req, res) => {

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
        
       users.users.map((user, index) => {
        if(user.email === body.adminEmail) {
            users.users[index].createdSurvey.push(new Survey(body.surveyName, body.adminEmail));
            selectedAdmin = users.users[index]
            selectedAdminIndex = index
        }
    });
        res.send(selectedAdmin);
    } catch (e) {
        console.log(e)
        res.status(400).send({ 
            error: e.message
        });
    }
}