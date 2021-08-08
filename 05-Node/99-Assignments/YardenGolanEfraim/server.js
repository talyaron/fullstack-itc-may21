const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const port = process.env.PORT || 3000;
app.use(express.json());
const Ajv = require("ajv");
const ajv = new Ajv()
app.use(express.static('public'));
app.use(cookieParser())


class User {
   
    constructor(name, email, password) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.createdSurvey = []

    }
   
}

class Users{
    constructor(){
        this.users = [];
    }

    newUser(user){
        this.users.push(user)
    }
    
}

class Surveys {
 
    constructor(title, admin) {  
        this.surveyID = Math.random().toString(16).slice(2);
        this.title = title;
        this.admin = admin;
        this.questions = []
    }


}
class Questions {

    constructor(title, voters = [{ voterID, score}]){
        this.title = title,
        this.questionID = Math.random().toString(16).slice(2);
        this.voters = voters 
    }
} 

const users = new Users()

app.post('/createUser', (req, res) => {

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
        users.newUser(new Users(body.username, body.email, body.password))
        console.log(users)
        res.send(users);
    } catch (e) {
        console.log(e)
        res.status(400).send({ 
            error: e.message
        });
    }

})



app.listen(port, () => {
    console.log('Server listen on port', port)
})