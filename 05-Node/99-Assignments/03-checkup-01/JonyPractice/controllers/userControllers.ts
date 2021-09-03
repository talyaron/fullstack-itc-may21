import { User, Users } from '../models/usersModel'
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const users = new Users()

export function register(req, res) {
    const { username, email, password } = req.body
    const user = new User(username, email, password)
    users.addUser(user)
    res.send({ users: users })
}

export function login(req, res) {
    try {
        const { email, password } = req.body
        const user = users.findUserByEmail(email)

        bcrypt.compare(password, user.password, (err, result) => {
            if (err) {
                throw new Error('Incorrect password');
            }
            if (result) {
                const token = jwt.sign({ id: user.id }, process.env.SECRET_KEY);
                res.send({ ...user, token });
            }
        });
    } catch (err) {
        console.log(err);
        res.status(400).send(err);
    }

}