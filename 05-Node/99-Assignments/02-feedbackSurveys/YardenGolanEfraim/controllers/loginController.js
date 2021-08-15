const { users } = require('../models.js')
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
        console.log(users)
        console.log(users.users)
        
        const selectedAdmin = users.users.find(r=> r.email === body.email && r.password === body.password)
        const adminCookie = JSON.stringify({ selectedAdmin })
        res.cookie('admin', adminCookie, { maxAge: 300000000, httpOnly: true });
        console.log(selectedAdmin)
        res.send(selectedAdmin);
        
    } catch (e) {
        console.log(e)
        res.status(400).send({ 
            error: e.message
        });
    }

}