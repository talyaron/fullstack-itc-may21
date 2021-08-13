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

const port = process.env.PORT || 3000;

app.use(express.json());

const { error } = require('ajv/dist/vocabularies/applicator/dependencies');
const ajv = new Ajv()
app.use(express.static('public'));
app.use(cookieParser())

const users = new Users()




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
    
        if(users.users.find(info=>info.email === body.email) === undefined && body.password === ''){
            users.newUser(new User(body.username, body.email, body.password))
            const guestUser = users.users[users.users.length -1]
            const guestCookie = JSON.stringify({ guestUser })
            res.cookie('guest', guestCookie, { maxAge: 300000000, httpOnly: true });
            res.send(guestUser)
        } else if(users.users.find(info=>info.email === body.email && info.password === '') != undefined){
           
            console.log("poo")
            console.log(users.users)
        users.users.find(info=> info.email === body.email ).password = body.password 
        users.users.find(info=> info.email === body.email ).name = body.username 
        console.log(users)
        res.send(users)
        }else if (users.users.find(info=>info.email === body.email)!= undefined){
        res.send("Email already taken!")
        }else{
        users.newUser(new User(body.username, body.email, body.password))
        res.send(users)}
    } catch (e) {
        console.log(e)
        res.status(400).send({ 
            error: e.message
        });
    }
})
app.get('/getAllUsers', (req, res)=>{
    res.send(users)
})
// Login route
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

})

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
            const selectedAdmin = users.users[index]
            const selectedAdminIndex = index
            const adminCookie = JSON.stringify({ selectedAdmin })
            const adminCookieIndex = JSON.stringify({ selectedAdminIndex })
            res.cookie('admin', adminCookie, { maxAge: 300000000, httpOnly: true });
            res.cookie('adminIndex', adminCookieIndex, { maxAge: 300000000, httpOnly: true });
            res.send(selectedAdmin);
        }
    });
        
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
        const { admin } = req.cookies
        const cookie = JSON.parse(admin);
        const {selectedAdmin} = cookie;
        const { adminIndex } = req.cookies
        const cookieIndex = JSON.parse(adminIndex);
        const {selectedAdminIndex} = cookieIndex;
       
    const {questions} = body
    const {surveyID} = body

    questions.forEach(question=>{

        selectedAdmin.createdSurvey.find(survey=>survey.surveyID === surveyID).questions.push(new Question(question))
    
    })
    users.users[selectedAdminIndex] = selectedAdmin
    const adminCookie = JSON.stringify({ selectedAdmin })
    res.cookie('admin', adminCookie, { maxAge: 300000000, httpOnly: true });
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
    const { admin } = req.cookies
        const cookie = JSON.parse(admin);
        const {selectedAdmin} = cookie;
    res.send(selectedAdmin)
})


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
app.get('/guestVoter', (req, res) => {
    const { guest } = req.cookies
    console.log(guest)
    const guestCookie = JSON.parse(guest);
    console.log(guestCookie)
    const {guestUser} = guestCookie;
    console.log(guestUser)
    res.send(guestUser)

})
app.post('/postVotes', (req, res) => {

    try {

        const schema = {
            type: "object",
            properties: {
                ID: {
                    type:"string"
                },
                votes: {
                    type:"array"
                },
                votersID: {
                    type: "string"
                }
            },
            required: ["ID", "votes", "votersID"],
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
        console.log(body.ID, body.votes)
        const { adminIndex } = req.cookies
        const cookieIndex = JSON.parse(adminIndex);
        const {selectedAdminIndex} = cookieIndex;
        const { admin } = req.cookies
        const cookie = JSON.parse(admin);
        const {selectedAdmin} = cookie;
        for(i=0; i< body.votes.length; i++){
        selectedAdmin.createdSurvey.find(survey => survey.surveyID === body.ID).questions[i].voters.score.push(body.votes[i])
        selectedAdmin.createdSurvey.find(survey => survey.surveyID === body.ID).questions[i].voters.voterID.push(body.votersID)
    }
        users.users[selectedAdminIndex] = selectedAdmin

        const adminCookie = JSON.stringify({ selectedAdmin })
        res.cookie('admin', adminCookie, { maxAge: 300000000, httpOnly: true });
        res.send(selectedAdmin);
    } catch (e) {
        console.log(e)
        res.status(400).send({ 
            error: e.message
        });
    }

})



// Listen on port
app.listen(port, () => {
    console.log('Server listen on port', port)
})

