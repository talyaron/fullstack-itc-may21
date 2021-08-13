const models = require('../models')
const Ajv = require("ajv");

exports.addUser = (req, res) => {

    try {
        const schema = {
            type: "object",
            properties: {
                username: {
                    type: "string"
                },
                password: {
                    type:"string"
                },
                email: {
                    type:"string"
                }
            },
            required: ["username", "password", "email"],
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
        users.newUser(new User(body.username, body.email, body.password))
        res.send(users);
    } catch (e) {
        console.log(e)
        res.status(400).send({ 
            error: e.message
        });
    }
}