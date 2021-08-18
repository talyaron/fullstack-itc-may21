"use strict";
exports.__esModule = true;
var express = require('express');
var router = express.Router();
var jwt = require('jwt-simple');
var secret = require('../secrets/secrets').secret;
var passwordsControls_1 = require("../controlers/passwordsControls");
function userRole(req, res, next) {
    try {
        var user = req.cookies.user;
        if (user === undefined)
            throw new Error('no user in cookie');
        var userDecoded = jwt.decode(user, secret);
        console.log(userDecoded);
        var role = userDecoded.role;
        if (role === undefined)
            throw new Error('No role in cookie');
        req.role = role;
        console.log(role);
        next();
    }
    catch (e) {
        console.error(e);
        res.status(500).send({ error: e.message });
    }
}
router.get('/getAllPasswords', userRole, passwordsControls_1.passwordsControl);
module.exports = router;
