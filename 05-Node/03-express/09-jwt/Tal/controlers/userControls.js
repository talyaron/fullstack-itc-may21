"use strict";
exports.__esModule = true;
exports.registerControl = exports.loginControl = void 0;
var jwt = require('jwt-simple');
var secret = require('../secrets/secrets').secret;
var admins = [{ username: 'tal', password: '123' }, { username: 'dana', password: '1234' }];
exports.loginControl = function (req, res) {
    var _a = req.body, username = _a.username, password = _a.password;
    console.log(username, password);
    var admin = admins.find(function (admin) { return admin.username === username; });
    var role = { role: null };
    if (admin !== undefined && admin.password === password) {
        console.log('is admin');
        role.role = 'admin';
    }
    else {
        role.role = 'public';
        var roleJWT = jwt.encode(role, secret);
        res.cookie('user', roleJWT, { maxAge: 900000, httpOnly: true });
    }
    var roleJWT = jwt.encode(role, secret);
    res.cookie('user', roleJWT, { maxAge: 900000, httpOnly: true });
    res.send({ login: true });
};
exports.registerControl = function (req, res) {
    res.send({ register: true });
};
