const express = require("express");
const app = express();
const port = process.env.PORT || 8080;

const fs = require("fs"); //do  the same to questions .json?

const {
    addUsers
    } = require('./models/userModels.js')

app.use(express.static("public"));
app.use(express.json());

const cookieParser = require('cookie-parser');
app.use(cookieParser());

app.post('/register', (req, res) => {

    //class info from the form, create a new user like an instance
    const {name, email, password} = req.body
    const newUser = new User (name, email, password)
    addUsers(newUser);
    
    
  
    
    res.cookie('cookie',  {
        maxAge: 30000000,
        httpOnly: true
    }).send({
        ok: true
    });
});

app.get('/useAdmin', (req, res) => {
    const cookie = req.cookies['cookie'];
    res.send({cookie})

})





const surveyRouter = require('./routes/surveyRoute.js')
const {
    v4: uuidv4 
} = require('uuid');  // do  the same to questions?


class User {
    constructor(name, email, password) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.id = uuidv4();
        this.createdSurvey = [];  //this will get survey Id..
    }
}




// class Survey {
//     constructor(title){
//         this.title = title;
//         this.id = uuidv4();
//         this.questions = [];
//         this.admin = {//email:adminEmail
//             }
//     }
// }



app.use('/survey', surveyRouter) //do the same for questionRouter?

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});