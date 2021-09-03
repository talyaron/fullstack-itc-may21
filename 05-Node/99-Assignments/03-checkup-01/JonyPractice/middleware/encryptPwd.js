"use strict";
exports.__esModule = true;
exports.encryptPwd = void 0;
var bcrypt = require('bcrypt');
//here you encrypt your password in register
exports.encryptPwd = function (req, res, next) {
    var password = req.body.password;
    var saltRounds = 10;
    bcrypt.hash(password, saltRounds, function (err, hash) {
        if (err) {
            res.status(500).send('Error Encrypting');
            return;
        }
        req.body.password = hash;
        next();
    });
};
