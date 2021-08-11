const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
const cookieParser = require('cookie-parser');
const fs = require("fs"); //do  the same to answers and surveys .json?
const surveyRouter = require('./routes/surveyRoute.js')
const userRouter = require('./routes/userRoutes.js')
const {
    v4: uuidv4 
} = require('uuid');  // do  the same to questions?
app.use(express.static("public"));
app.use(cookieParser());
app.use(express.json());
app.use('/survey', surveyRouter) //do the same for questionRouter?

app.use('/users', userRouter)


// const addUserRouter = require('./routes/tasksRoute.js')
// app.use('/users', userRouter)

<<<<<<< HEAD
=======
const addUserr = require('./models/userModels')
>>>>>>> 7ede9140422e10234960c4192524dc701f2cbf7d



<<<<<<< HEAD
=======
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
>>>>>>> 7ede9140422e10234960c4192524dc701f2cbf7d

// app.get('/useAdmin', (req, res) => {
//     const cookie = req.cookies['cookie'];
//     res.send({cookie})

// })





<<<<<<< HEAD





// class Survey {
//     constructor(title){
//         this.title = title;
//         this.id = uuidv4();
//         this.questions = [];
//         this.admin = {//email:adminEmail
//             }
//     }
// }

=======
const surveyRouter = require('./routes/surveyRoute.js')
const {
    v4: uuidv4 
} = require('uuid');  // do  the same to questions?

app.use('/pepe',surveyRouter)
a
>>>>>>> 7ede9140422e10234960c4192524dc701f2cbf7d




app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});