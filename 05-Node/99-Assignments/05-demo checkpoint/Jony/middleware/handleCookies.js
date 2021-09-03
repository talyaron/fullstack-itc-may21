"use strict";
exports.__esModule = true;
exports.writeCookie = void 0;
var user_1 = require("../models/user");
var jwt = require('jsonwebtoken');
require('dotenv').config();
// import { secret } from './secret/secret';
// const jwt = require('jwt-simple');
// export function writeCookie(req, res, next) {
//     try {
//         const { name, image, color } = req.body;
//         const user = new User(name, image, color)
//         const id = JSON.stringify({ id: user.id })
//         const tokenUser = jwt.encode(id, secret)
//         res.cookie('cookieUser', tokenUser, { maxAge: 3000000000, httpOnly: true })
//         req.user = user
//         next()
//     } catch (e) {
//         alert(e)
//     }
// }
function writeCookie(req, res, next) {
    if (!res.cookie.cookiUser) {
        var _a = req.body, name = _a.name, image = _a.image, color = _a.color;
        var user = new user_1.User(name, image, color);
        console.log(process.env.SECRET_KEY);
        var tokenUser = jwt.sign({ id: user.id }, process.env.SECRET_KEY);
        console.log(tokenUser);
        res.cookie('cookieUser', tokenUser, { maxAge: 3000000, httpOnly: true });
        req.user = user;
        next();
    }
    else {
        res.status(400).send({ message: 'I have already a cookie' });
    }
}
exports.writeCookie = writeCookie;
