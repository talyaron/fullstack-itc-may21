export { }
const jwt = require('jwt-simple');

import {secret} from '../secret/secret'

const fs = require("fs");
const { uuid } = require('uuidv4')

import { User } from '../models/userModels'



const readAllUsers = () => {
    const allUsers = fs.readFileSync("./users.json");
    return JSON.parse(allUsers);
}


export function usersRegister(req, res) {
    try {

        const allUsers = readAllUsers();
        const isFound = allUsers.some(elem => (elem.email === req.body.email) || elem.userName === req.body.userName)
        if (!isFound) {
            const user = new User(req.body.userName, req.body.email, req.body.password, [])
            allUsers.push(user)
            fs.writeFileSync("./users.json", JSON.stringify(allUsers));
            res.send({ ok: "User Created", allUsers: allUsers });
        } else {
            throw new Error("this user is on the list")
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

        if (isUserPassOK) {
            const userLogin = allUsers.find(elem => (elem.email === email) && (elem.password === password))
            const token = jwt.encode(userLogin, secret);
            console.log(token);
            
            res.cookie('cookieName', token, { maxAge: 30000000, httpOnly: true });
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
        const { email, password } = (req.body)
        const allUsers = readAllUsers();
        const isUserPassOK = allUsers.some(elem => (elem.email === email) && (elem.password === password))
        console.log(allUsers)
        if (isUserPassOK && allUsers.surveys) {
            res.send({ ok: 'Welcome back admin' });
        } else {
            const user = new User(null, req.body.email, req.body.password, null)
            console.log(user);
            allUsers.push(user)
            fs.writeFileSync("./users.json", JSON.stringify(allUsers));
            res.send({ ok: "User Created", allUsers: allUsers });
        }
    } catch (error) {
        res.status(500).send({ error: `error` });
    }
}



export function getCookie(req, res) {
    try {
        console.log('decoding');
        const {cookieName}  = req.cookies
        console.log(cookieName);
    
        const decoded = jwt.decode(cookieName, secret);
        
        console.log('decoding',decoded);
        
        if (!cookieName) throw new Error("Nothing is on the cookie")
        const cookie = decoded
        
        res.send(cookie);

        
    } catch (e) {
        console.log(e.message);
        
        res.status(500).send({ error: `${e.message}` });
    }
};


export function getSurveys(req, res) {
    try {
        const { email } = req.params
        const allUsers = readAllUsers();
        if (allUsers.length !== 0) {
            const find = allUsers.find(user => user.email === email)

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
        const admin = allSurveys.find(survey => survey.id === id).admin

        const findAdmin = allUsers.find(user => user.email === admin)
        const findSurveyQuestions = findAdmin.surveys.find(survey => survey.id === id).questions

        const findSurveyinSurveyJSON = allSurveys.find(survey => survey.id === id).question


        for (let i = 0; i < findSurveyQuestions.length; i++) {
            findSurveyQuestions[i].voters.push(req.body[i])
            findSurveyinSurveyJSON[i].voters.push(req.body[i])
        }



        fs.writeFileSync("./users.json", JSON.stringify(allUsers));
        fs.writeFileSync("./survey.json", JSON.stringify(allSurveys));

        res.send({ ok: "Answer Sended" });


    } catch (e) {
        console.log(e)
        res.status(500).send({ error: `${e}` });
    }
}

