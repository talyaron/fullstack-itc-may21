"use strict";
exports.__esModule = true;
exports.registerControl = exports.loginControl = void 0;
var jwt = require('jwt-simple');
var secret_1 = require("../secrets/secret");
var admins = [{ username: 'tal', password: '123' }, { username: 'dana', password: '1234' }];
exports.loginControl = function (req, res) {
    var _a = req.body, username = _a.username, password = _a.password;
    console.log(username, password);
    var admin = admins.find(function (admin) { return admin.username === username; });
    // const cookieAdmin = {role: 'admin'}
    // const cookiePublic = {role: 'public'}
    var tokenAdmin = jwt.encode(admin, secret_1.secret);
    console.log(tokenAdmin);
    // const tokenPublic=jwt.encode(cookiePublic,secret);
    if (admin !== undefined && admin.password === password) {
        console.log('is admin');
    }
    else {
        // res.cookie('user',tokenPublic, { maxAge: 900000, httpOnly: true });
    }
    res.cookie('user', tokenAdmin, { maxAge: 900000, httpOnly: true });
    console.log(tokenAdmin);
    res.send({ login: true });
};
exports.registerControl = function (req, res) {
    res.send({ register: true });
};
// var token = jwt.encode(payload, secret);
// var decoded = jwt.decode(token, secret);
