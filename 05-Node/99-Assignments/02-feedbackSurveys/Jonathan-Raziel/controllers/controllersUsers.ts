export { }

// const express = require("express");
// const app = express();
const fs = require("fs");
const { uuid } = require('uuidv4')
//const cookieParser = require('cookie-parser');

import { User } from '../models/users'



const readAllUsers = () => { //YS: This should be in models
    const allUsers = fs.readFileSync("./user.json");
    return JSON.parse(allUsers);
}


export function usersRegister(req, res) {
    try {

        const allUsers = readAllUsers();
        const isFound = allUsers.some(elem => (elem.email === req.body.email) || elem.username === req.body.username)
        if (!isFound) { //YS: Good
            const user = new User(req.body.username, req.body.email, req.body.password, [])
            allUsers.push(user)
            fs.writeFileSync("./user.json", JSON.stringify(allUsers));
            res.send({ ok: "User Created", allUsers: allUsers });
        } else {
            throw new Error("this is user is on the list")
        }
    } catch (e) {

        res.status(500).send({ error: `${e}` });
    }
}

export function loginUser(req, res) {


    try {
        const { email, password } = (req.body)

        const allUsers = readAllUsers();

        const isUserPassOK = allUsers.some(elem => (elem.email === email) && (elem.password === password))

        if (isUserPassOK) { //YS: Good
            const userLogin = allUsers.find(elem => (elem.email === email) && (elem.password === password)) //YS: Why not use this instead of .some in line 46 + this should be in a function
            res.cookie('cookieName', JSON.stringify(userLogin), { maxAge: 30000000, httpOnly: true }); //YS: You should not send private info in cookies, its a security breach
            res.send({ ok: 'Welcom admin' });
        } else {
            throw new Error("Is incorrect your email or password. Try Again")
        }

    } catch (e) {
        res.status(500).send({ error: `${e.message}` });
    }

};



export function endUserLogin(req, res) {
    try {
        const { email, password } = (req.body) //YS: Why is this in parenthesis?
        const allUsers = readAllUsers();
        const isUserPassOK = allUsers.some(elem => (elem.email === email) && (elem.password === password)) //YS: You should use find instead of some
        console.log(allUsers)
        if (isUserPassOK && allUsers.surveys) {
            res.send({ ok: 'Welcome back admin' });
        } else {
            const user = new User(null, req.body.email, req.body.password, null)
            console.log(user);
            allUsers.push(user)
            fs.writeFileSync("./user.json", JSON.stringify(allUsers)); //YS: This should be in a function and go in your models
            res.send({ ok: "User Created", allUsers: allUsers });
        }
    } catch (error) {
        res.status(500).send({ error: `error` });
    }
}



export function getCookie(req, res) { //YS: This should be a middleware
    try {
        const { cookieName } = req.cookies
        if (!cookieName) throw new Error("Nothing is on the cookie")
        const cookie = JSON.parse(cookieName)
        res.send(cookie);
    } catch (e) {
        res.status(500).send({ error: `${e.message}` });
    }
};


export function getSurveys(req, res) {
    try {
        const { email } = req.params
        const allUsers = readAllUsers();
        if (allUsers.length !== 0) {
            const find = allUsers.find(user => user.email === email) //YS: This should be in a function and go in your models

            res.send(find.surveys);
        }
    } catch (e) {
        res.status(500).send({ error: `${e}` });
    }
}

export function scoreAdd(req, res) {
    try {
        const { id } = req.params

        const allUsers = readAllUsers();
        const allSurveys = JSON.parse(fs.readFileSync("./survey.json")); 
        const admin = allSurveys.find(survey => survey.id === id).admin //YS: This should be in a function and go in your models

        const findAdmin = allUsers.find(user => user.email === admin) //YS: This should be in a function and go in your models
        const findSurveyQuestions = findAdmin.surveys.find(survey => survey.id === id).questions //YS: This should be in a function and go in your models

        const findSurveyinSurveyJSON = allSurveys.find(survey => survey.id === id).question //YS: This should be in a function and go in your models


        for (let i = 0; i < findSurveyQuestions.length; i++) {  
            findSurveyQuestions[i].voters.push(req.body[i])
            findSurveyinSurveyJSON[i].voters.push(req.body[i])
        }



        fs.writeFileSync("./user.json", JSON.stringify(allUsers));//YS: This should be in a function and go in your models 
        fs.writeFileSync("./survey.json", JSON.stringify(allSurveys));//YS: This should be in a function and go in your models

        res.send({ ok: "Answer Sended" });


    } catch (e) {
        console.log(e)
        res.status(500).send({ error: `${e}` });
    }
}

