export { };
import { User, UserMethods, readAllUsers } from "../models/users";
const { v4: uuidv4 } = require("uuid");
const cookieParser = require("cookie-parser");
const jwt = require('jwt-simple');
const { secret } = require('../secret/secret');


export function registerUser(req: any, res: any) {
        try {
                console.log('register')
                const id = uuidv4();
                const user = new User(req.body.name, req.body.email, req.body.password, req.body.color, req.body.image, id);

                console.log(user)
                const methodUser = new UserMethods()
                methodUser.addUser(user);
                res.send({ ok: 'success register' })
        } catch (err) {
                res.send({ error: err })
        }
}

export function logInUser(req: any, res: any) {
        const { userITC } = req.cookies;
        var decoded = jwt.decode(userITC, secret);
        const allUsers = readAllUsers();
        const getLogInUser = allUsers.find(user => user.id === decoded.id);
        res.send(getLogInUser)
}


export function getAllUsers(req: any, res: any) {
        const allUsers = readAllUsers();
        res.send(allUsers);
}

