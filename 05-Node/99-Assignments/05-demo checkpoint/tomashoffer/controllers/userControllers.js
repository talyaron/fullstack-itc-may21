"use strict";
exports.__esModule = true;
exports.registerUser = void 0;
var users_1 = require("../models/users");
var uuidv4 = require("uuid").v4;
var cookieParser = require("cookie-parser");
function registerUser(req, res) {
    try {
        console.log('register');
        var id = uuidv4();
        var user = new users_1.User(req.body.name, req.body.email, req.body.password, req.body.color, id);
        console.log('add user2');
        var methodUser = new users_1.UserMethods();
        console.log('add user');
        methodUser.addUser(user);
        res.send({ ok: 'success register' });
    }
    catch (err) {
        res.send({ error: err });
    }
}
exports.registerUser = registerUser;
