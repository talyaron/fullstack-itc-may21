"use strict";
exports.__esModule = true;
exports.registerControl = exports.loginControl = void 0;
var jwt = require('jwt-simple');
var secret_1 = require("../secret/secret");
var admins = [{ username: 'tal', password: '123' }, { username: 'dana', password: '1234' }];
exports.loginControl = function (req, res) {
    var _a = req.body, username = _a.username, password = _a.password;
    console.log(username, password);
    var admin = admins.find(function (admin) { return admin.username === username; });
    var payload;
    if (admin !== undefined && admin.password === password) {
        console.log('is admin');
        payload = { role: 'admin' };
        var token = jwt.encode(payload, secret_1.secret);
        res.cookie('user', token, { maxAge: 900000, httpOnly: true });
    }
    else {
        payload = { role: 'public' };
        var token = jwt.encode(payload, secret_1.secret);
        res.cookie('user', token, { maxAge: 900000, httpOnly: true });
    }
    res.send({ login: true });
};
exports.registerControl = function (req, res) {
    res.send({ register: true });
};
