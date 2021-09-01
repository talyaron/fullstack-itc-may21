export { };
const jwt = require('jwt-simple');
require('dotenv').config();

//I import the classes (with Methods) of the Models that Im going to use here
import { User, Users } from "../models/usersModel";

export function addNewUser(req, res) {
    try {
        const { username, picture, color } = req.body;
        const user = new User(username, picture, color);
        const allUsers = new Users();
        allUsers.newUser(user);
        res.send({ message: "A new User was added", allUsers });
    } catch (error) {
        console.error(error);
        res.status(500).send(error.message)
    }
}

export function getAllUsers(req, res) {
    try {
        const allUsers = new Users();
        res.send({ message: "Users founded", allUsers });
    } catch (error) {
        console.error(error);
        res.status(500).send(error.message)
    }
}

export function setCookie(req, res) {
    try {
        //The cookie is only going to contain the ID of the user
        const { userId } = req.params;
        const cookieToWrite: string = JSON.stringify({ id: userId });
        const token = jwt.encode(cookieToWrite, process.env.SECRET_KEY);
        //The cookie is going to expire in 30 minutes
        res.cookie("userInfo", token, { maxAge: 1800000, httpOnly: true });
        res.send({ message: "Cookie setted" });
    } catch (error) {
        console.error(error);
        res.status(500).send(error.message);
    }
}

export function deleteUser(req, res) {
    try {
        const { userId } = req.params;
        const allUsers = new Users();
        allUsers.removeUser(userId);
        res.send({ message: "Poof! Your user has been deleted!", allUsers });
    } catch (error) {
        console.error(error);
        res.status(500).send(error.message);
    }
}

export function editUser(req, res) {
    try {
        const { userId } = req.params;
        const { username, picture, color } = req.body;
        const allUsers = new Users();
        const userFound = allUsers.findUserById(userId);
        userFound.username = username;
        userFound.picture = picture;
        userFound.color = color;
        allUsers.updateUsersJson();
        //res.send({ message: "The user was updated!", allUsers });
    } catch (error) {
        console.error(error);
        res.status(500).send(error.message);
    }
}