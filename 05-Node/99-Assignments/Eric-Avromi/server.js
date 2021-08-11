const express = require("express");
const app = express();
const port = process.env.PORT || 8080;

const fs = require("fs"); //do  the same to answers and surveys .json?
app.use(express.static("public"));
app.use(express.json());


// const addUserRouter = require('./routes/tasksRoute.js')
// app.use('/users', userRouter)

const addUserr = require('./models/userModels')


const cookieParser = require('cookie-parser');
app.use(cookieParser());

app.post('/register', (req, res) => {

    //class info from the form, create a new user like an instance
    const {name, email, password} = req.body
    const newUser = new User (name, email, password)
    addUsers(newUser);
    
    
    res.cookie('cookie', JSON.stringify(newUser), {
        maxAge: 30000000, 
        httpOnly: true
    })
    res.send({
        ok: true
    });
});

app.post('/login', (req, res) => {

    //class info from the form, create a new user like an instance
    const {name, email, password} = req.body
    const user = new User (name, email, password)
    addUsers(user);
    
    
  
    
    res.cookie('cookie',  {
        maxAge: 30000000,
        httpOnly: true
    }).send({
        ok: true
    });
});

// app.get('/useAdmin', (req, res) => {
//     const cookie = req.cookies['cookie'];
//     res.send({cookie})

// })





const surveyRouter = require('./routes/surveyRoute.js')
const {
    v4: uuidv4 
} = require('uuid');  // do  the same to questions?

app.use('/pepe',surveyRouter)
a


app.use('/survey', surveyRouter) //do the same for questionRouter?

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});