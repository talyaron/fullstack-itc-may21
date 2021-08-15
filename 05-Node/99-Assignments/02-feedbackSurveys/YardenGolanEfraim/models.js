// Classes: User & Users, Survey & Surveys, Question & Questions

class User {  
    constructor(name, email, password) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.createdSurvey = []
    }
}

class Users {
    constructor() {
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
class Surveys {
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
        this.voters = {voterID: [], score: []}
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

module.exports = { User, Users, Survey, Surveys, Question, Questions, users }