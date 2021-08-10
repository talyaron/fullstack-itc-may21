const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
const {
    v4: uuidv4
} = require("uuid");

const fs = require("fs");

const surveyRouter = require('./routes/surveyRoute.js')
const {
    v4: uuidv4 
} = require('uuid'); 


class User {
    constructor(name, email, password) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.id = uuidv4();
        this.createdSurvey = [];  //this will get survey Id..
    }
}

class Survey {
    constructor(title){
        this.title = title;
        this.id = uuidv4();
        this.questions = [];
        this.admin = {//email:adminEmail
            }
    }
}

app.use(express.static("public"));
app.use(express.json());

app.use('/survey', surveyRouter)

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});