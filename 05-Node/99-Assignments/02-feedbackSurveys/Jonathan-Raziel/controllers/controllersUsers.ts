export { }

// const express = require("express");
// const app = express();
const fs = require("fs");
const { uuid } = require('uuidv4')
//const cookieParser = require('cookie-parser');

import { User } from '../models/users'



const readAllUsers = () => {
    const allUsers = fs.readFileSync("./user.json");
    return JSON.parse(allUsers);
}


export function usersRegister(req, res) {
    try {
        //const user1 = new model.User("pepe", 'a@a.com','a1a23',[]);
        const allUsers = readAllUsers();
        const isFound = allUsers.some(elem => (elem.email === req.body.email) || elem.username === req.body.username)
        if (!isFound) {
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

        if (isUserPassOK) {
            const userLogin = allUsers.find(elem => (elem.email === email) && (elem.password === password))
            res.cookie('cookieName', JSON.stringify(userLogin), { maxAge: 30000000, httpOnly: true });
            res.send({ ok: 'Welcom admin' });
        } else {
            throw new Error("Is incorrect your email or password. Try Again")
        }

    } catch (e) {
        res.status(500).send({ error: `${e.message}` });
    }

};

export function getCookie(req, res) {
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
        const {email} = req.params
        const allUsers = readAllUsers();
        if(allUsers.length !== 0){
            const find = allUsers.find(user => user.email === email)
            res.send(find.surveys);
        } 
    } catch (e) {
        res.status(500).send({ error: `${e}` });
    }
}


