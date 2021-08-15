const express = require('express');
const cookieParser = require('cookie-parser');
const Ajv = require("ajv");
const { error } = require('ajv/dist/vocabularies/applicator/dependencies');
const { User, Users, Survey, Surveys, Question, Questions, users } = require('./models.js')

// Import routes
const loginRoute = require('./routes/loginRoute')
const questionsRoute = require('./routes/questionsRoute')
const surveysRoute = require('./routes/surveysRoute')
const usersRoute = require('./routes/usersRoute')
const adminRoute = require('./routes/adminRoute')
const votesRoutes = require('./routes/votesRoute')

const ajv = new Ajv()
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static('public'));
app.use(cookieParser())

app.get('/sendSurvey', (req, res) => {
    try {
        const {id} = req.query;
        console.log(id) 
        const idString = JSON.stringify(id)
        res.cookie('surveyEditID', idString, { maxAge: 300000000, httpOnly: true });
       
        
        res.send(id)
    } catch (e) {
        console.error(e)
    }
})

app.get('/getSurvey', (req, res) => {
    try {
        const { surveyEditID } = req.cookies
        const cookieEditID = JSON.parse(surveyEditID);
        const editID = cookieEditID;
        const { admin } = req.cookies
        const cookie = JSON.parse(admin);
        const {selectedAdmin} = cookie;
        console.log(selectedAdmin, editID)
        const surveyInfo = selectedAdmin.createdSurvey.filter(survey=>survey.surveyID === editID)
        res.send(surveyInfo)
    } catch (e) {
        console.error(e)
    }
})

app.get('/surveyToAnswer', (req, res) => {
    const { admin } = req.cookies
    const cookie = JSON.parse(admin);
    const {selectedAdmin} = cookie;
    const {id} = req.query
    const surveyRequired = selectedAdmin.createdSurvey.filter(survey=>survey.surveyID === id)
    res.send(surveyRequired)

})


// Routes
app.use('/login', loginRoute)
app.use('/questions', questionsRoute)
app.use('/surveys', surveysRoute)
app.use('/users', usersRoute)
app.use('/admin', adminRoute)
app.use('/votes', votesRoutes)

app.listen(port, () => {
    console.log(`Listening on port ${port}...`)
})

