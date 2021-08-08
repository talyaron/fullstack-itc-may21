const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const port = process.env.PORT || 5000;
app.use(express.json());
const Ajv = require("ajv");
const ajv = new Ajv()
app.use(express.static('public'));
app.use(cookieParser())

let user = ''

app.post('/createUser', (req, res) => {

    try {

        const schema = {
            type: "object",
            properties: {
                firstName: {
                    type: "string"
                },
                lastName: {
                    type:"string"
                }
            },
            required: ["firstName", "lastName"],
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
        user = `${body.firstName} ${body.lastName}`;
        console.log(user)
        const fullName = JSON.stringify({ user })
        res.cookie('cookieName', fullName, { maxAge: 300000000, httpOnly: true });
        res.send(user);
    } catch (e) {
        console.log(e)
        res.status(400).send({ 
            error: e.message
        });
    }

})


app.get('/user', (req, res)=>{

    //get name from the cookie

    //read cookies
    console.log(req.cookies);
    const { cookieName } = req.cookies
    const cookie = JSON.parse(cookieName);
    console.log(cookieName)
    const {user} = cookie;
    console.log(user)

    res.send({user})

})


app.listen(port, () => {
    console.log('Server listen on port', port)
})
