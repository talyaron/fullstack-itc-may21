const express = require('express');
const cookieParser = require('cookie-parser');
const Ajv = require("ajv");
const { User, Users, Survey, Surveys, Question, Questions } = require('./models.js')

// Import routes
const loginRoute = require('./routes/loginRoute')
const questionsRoute = require('./routes/questionsRoute')
const surveysRoute = require('./routes/surveysRoute')
const usersRoute = require('./routes/usersRoute')
const adminRoute = require('./routes/adminRoute')

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
app.use('/createUser', usersRoute)

// Login route
app.use('/login', loginRoute)

// Route to add a survey
app.use('/addSurvey', surveysRoute)

// Route to post a question
app.use('/postQuestions', questionsRoute)

// Route to send selected Admin
app.use('/selectedAdminUser', adminRoute)


// Listen on port
app.listen(port, () => {
    console.log('Server listen on port', port)
})

console.log(users);