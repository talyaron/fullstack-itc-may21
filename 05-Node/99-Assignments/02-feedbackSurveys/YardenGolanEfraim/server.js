const express = require('express');
const cookieParser = require('cookie-parser');
const Ajv = require("ajv");
const { User, Users, Survey, Surveys, Question, Questions } = require('./models.js')

// Routes
const loginRoute = require('./routes/loginRoute')
const questionsRoute = require('./routes/questionsRoute')
const surveysRoute = require('./routes/surveysRoute')
const usersRoute = require('./routes/usersRoute')

const app = express();
const ajv = new Ajv()
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static('public'));
app.use(cookieParser())


const users = new Users()
let selectedAdmin = {}
let selectedAdminIndex = 0


// Route to create user
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

// Login route
app.use('/login', loginRoute)

// Route to add a survey
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

})

// Route to post a question
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
    users.users[selectedAdminIndex] = selectedAdmin
    console.log(users.users)
        res.send(selectedAdmin);
    } catch (e) {
        console.log(e)
        res.status(400).send({ 
            error: e.message
        });
    }

})

// Route to send selected Admin
app.get('/selectedAdminUser', (req, res) => {
    res.send(selectedAdmin)
})


// Listen on port
app.listen(port, () => {
    console.log('Server listen on port', port)
})

console.log(users);