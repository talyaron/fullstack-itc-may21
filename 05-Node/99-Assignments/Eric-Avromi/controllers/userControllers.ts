export { }

const fs = require("fs");
const { uuid } = require('uuidv4')

import { User } from '../models/userModels'

const getAllUsers = () => {
    const allUsers = fs.readFileSync("./users.json");
    return JSON.parse(allUsers);
}

export function register(req, res) {
    

        const allUsers = getAllUsers();
        const isFound = allUsers.some(elem => (elem.email === req.body.email) || elem.name === req.body.name)
        if (!isFound) {
            const user = new User(req.body.name, req.body.email, req.body.password, [])
            allUsers.push(user)
            fs.writeFileSync("./users.json", JSON.stringify(allUsers));
            res.send({ ok: "User Created", allUsers: allUsers });
        } else {
            throw new Error("this is user is on the list")
        }
    
}

export function loginUser(req, res) {


    
        const { email, password } = (req.body)

        const allUsers = getAllUsers();

        const isUserPassOK = allUsers.some(elem => (elem.email === email) && (elem.password === password))

        if (isUserPassOK) {
            const userLogin = allUsers.find(elem => (elem.email === email) && (elem.password === password))
            res.cookie('cookieName', JSON.stringify(userLogin), { maxAge: 30000000, httpOnly: true });
            res.send({ ok: 'Welcom admin' });
        } else {
            throw new Error("Is incorrect your email or password. Try Again")
        }
};


export function getCookie(req, res) {
    
        const { cookieName } = req.cookies
        const cookie = JSON.parse(cookieName)
        res.send(cookie);
    
};


export function getSurveys(req, res) {
    
        const { email } = req.params
        const allUsers = getAllUsers();
        if (allUsers.length !== 0) {
            const find = allUsers.find(user => user.email === email)

            res.send(find.createdSurvey);
        }
    
}