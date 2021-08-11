const models = require('../models')
const server = require('../server')
const Ajv = require("ajv");

exports.login = (req, res) => {
    try {
        const schema = {
            type: "object",
            properties: {
                password: {
                    type: "string"
                },
                email: {
                    type: "string"
                }
            },
            required: ["password", "email"],
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
        console.log(users)
        console.log(users.users)
        selectedAdmin = users.users.find(r => r.email === body.email && r.password === body.password)
        console.log(selectedAdmin)
        res.send(selectedAdmin);
    } catch (e) {
        console.log(e)
        res.status(400).send({
            error: e.message
        });
    }
}