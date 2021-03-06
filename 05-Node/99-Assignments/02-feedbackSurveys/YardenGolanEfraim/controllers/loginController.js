const { createAdminCookie } = require('../models/adminModel')
const { users } = require('../models/usersModel')

const Ajv = require("ajv");
const ajv = new Ajv()

exports.login = (req, res) => {

    try {

        const schema = {
            type: "object",
            properties: {
                password: {
                    type:"string"
                },
                email: {
                    type:"string"
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
     
        const selectedAdmin = users.users.find(r=> r.email === body.email && r.password === body.password)
        createAdminCookie(selectedAdmin, res)
        res.send(selectedAdmin);
        
    } catch (e) {
        console.log(e)
        res.status(400).send({ 
            error: e.message
        });
    }

}