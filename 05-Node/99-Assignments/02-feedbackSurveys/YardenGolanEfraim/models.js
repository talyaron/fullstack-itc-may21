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
//////////////////////////////////  YS: All of these cookie functions below should be middleware - not models. 
function createAdminCookie(selectedAdmin, res){
    try{
    const adminCookie = JSON.stringify({ selectedAdmin })
    res.cookie('admin', adminCookie, { maxAge: 300000000, httpOnly: true });
  
}catch (e) {
    console.error(e)
}}

function getAdminCookie(req){
    try{
        const { admin } = req.cookies
        const cookie = JSON.parse(admin);
        const {selectedAdmin} = cookie;
        return selectedAdmin
}catch (e) {
    console.error(e)
}}
function createGuestCookie(guestUser, res){
    try{
    const guestCookie = JSON.stringify({ guestUser })
    res.cookie('guest', guestCookie, { maxAge: 300000000, httpOnly: true });
}catch (e) {
    console.error(e)
}}
function getAdminCookieIndex(req){
    const { adminIndex } = req.cookies
    const cookieIndex = JSON.parse(adminIndex);
    const {selectedAdminIndex} = cookieIndex;
    return selectedAdminIndex
}

module.exports = { User, Users, Survey, Surveys, Question, Questions, users, createAdminCookie, getAdminCookie, createGuestCookie, getAdminCookieIndex }