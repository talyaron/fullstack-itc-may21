"use strict";
exports.__esModule = true;
exports.encryptPwd = void 0;
var bcrypt = require('bcrypt');
function encryptPwd(req, res, next) {
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
}
exports.encryptPwd = encryptPwd;
;
