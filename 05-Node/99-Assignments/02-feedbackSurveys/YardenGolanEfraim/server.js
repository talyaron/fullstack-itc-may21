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

class Survey {
 
    constructor(title, admin) {  
        this.surveyID = Math.random().toString(16).slice(2);
        this.title = title;
        this.admin = admin;
        this.questions = []
    }
}
class Surveys{
    constructor(){
        this.surveys = [];
    }

    newSurvey(survey){
        this.surveys.push(survey)
    }
    
}

class Question {

    constructor(title){
        this.title = title,
        this.questionID = Math.random().toString(16).slice(2);
        // this.voters = [{ voterID: , score: }]
    }
} 
class Questions{
    constructor(){
        this.questions = [];
    }

    newQuestion(question){
        this.questions.push(question)
    }
    
}

const users = new Users()
let selectedAdmin = {}

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
        users.newUser(new User(body.username, body.email, body.password))
        res.send(users);
    } catch (e) {
        console.log(e)
        res.status(400).send({ 
            error: e.message
        });
    }

})
app.post('/login', (req, res) => {

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
        selectedAdmin = users.users.find(r=> r.email === body.email && r.password === body.password)
        console.log(selectedAdmin)
        res.send(selectedAdmin);
    } catch (e) {
        console.log(e)
        res.status(400).send({ 
            error: e.message
        });
    }

})

app.post('/addSurvey', (req, res) => {

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
            selectedAdmin = users.users[index]
        }
    });
        res.send(selectedAdmin);
    } catch (e) {
        console.log(e)
        res.status(400).send({ 
            error: e.message
        });
    }

})

app.post('/postQuestions', (req, res) => {

    try {
        const {
            body
        } = req;
       
    const {questions} = body
    const {surveyID} = body

    questions.forEach(question=>{

        selectedAdmin.createdSurvey.find(survey=>survey.surveyID === surveyID).questions.push(new Question(question))
    
    })
        res.send(selectedAdmin);
    } catch (e) {
        console.log(e)
        res.status(400).send({ 
            error: e.message
        });
    }

})

app.get('/selectedAdminUser', (req, res) => {
    res.send(selectedAdmin)
})

app.listen(port, () => {
    console.log('Server listen on port', port)
})