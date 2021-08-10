/* 
    This is a simple login 2 + page site exercise
            This is the back-end file.
*/

const express = require('express')
const Ajv = require('ajv')
const cookieParser = require('cookie-parser')

const port = process.env.PORT || 3000

const app = express()
app.use(express.json())
app.use(express.static('public'));
app.use(cookieParser())
const ajv = new Ajv()

const user = ''

// Create user on server:
app.post('/uddUser', (res, req) => {
    // Validation with ajv:
    const schema = {
        type: "object",
        properties: {
            name: {
                type: "string"
            },
            email: {
                type:"string"
            }
        },
        required: ["name", "email"],
        additionalProperties: false
    }
    const validate = ajv.compile(schema)
    console.log(schema);
    console.log(req.body);
    const body = req.body
    console.log(body);
    const valid = validate(body)
    if (!valid) console.log(validate.errors)

    user = JSON.stringify(`Name: ${body.name}, Email: ${body.email}`)
    
})


// Listen on port:
app.listen(port, () => {
    console.log(`Server listening on port ${port}...`)
})