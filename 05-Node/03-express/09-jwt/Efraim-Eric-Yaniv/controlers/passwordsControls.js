"use strict";
exports.__esModule = true;
exports.passwordsControl = void 0;
var jwt = require('jwt-simple');
var secret_1 = require("../secret/secret");
exports.passwordsControl = function (req, res) {
    var user = req.cookies.user;
    var decoded = jwt.decode(user, secret_1.secret);
    console.log('decoded', decoded);
    var role = decoded.role;
    req.role = role;
    if (req.role === 'admin') {
        res.send({ password: 123 });
    }
    else
        res.status(401).send({ error: 'Unauthrized path' });
};
