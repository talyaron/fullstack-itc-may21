"use strict";
exports.__esModule = true;
exports.encryptPassword = void 0;
var bcrypt = require('bcrypt');
exports.encryptPassword = function (req, res, next) {
    var saltRounds = 10;
    var passowrd = req.body.passowrd;
    console.log(passowrd);
    bcrypt.hash(passowrd, saltRounds, function (err, hash) {
        if (err) {
            res.status(500).send(err);
            console.log(err);
            return;
        }
        req.body.password = hash;
        next();
    });
};
