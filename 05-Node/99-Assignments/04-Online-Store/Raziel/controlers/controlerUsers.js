"use strict";
exports.__esModule = true;
exports.login = exports.registerUser = void 0;
var uuidv4 = require('uuid').v4;
var users_1 = require("../models/users");
// import {Cart,Carts} from '../models/cart';
function registerUser(req, res) {
    try {
        var _a = req.body, username = _a.username, email = _a.email, password = _a.password, role = _a.role;
        var user = new users_1.User(username, email, password, role);
        console.log(user);
        var allUsers = new users_1.Users();
        allUsers.createNewUser(user);
        // const products=null;
        // const unprchCart= new Cart(regEmail,products);
        // const allCarts=new Carts();
        // allCarts.addProductsToCart(unprchCart);
        res.send({ message: "New user was added" });
    }
    catch (error) {
        console.error(error);
        res.status(500).send(error.message);
    }
}
exports.registerUser = registerUser;
// export function findUser(req, res) {
//     try {
//         const { email } = req.params;
//         const allUsers = new Users();
//         let userInfo;
//         if (req.email) {
//             userInfo = allUsers.findUser(req.email);
//         } else {
//             userInfo = allUsers.findUser(email);
//         }
//         res.send({ message: "Username was found", userInfo });
//     } catch (error) {
//         console.error(error);
//         res.status(500).send(error.message);
//     }
// }
function login(req, res) {
    try {
        // const {email}  = req.body;
        res.send({ message: "Logged in successfully" });
    }
    catch (error) {
        console.error(error);
        res.status(500).send(error.message);
    }
}
exports.login = login;
