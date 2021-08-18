"use strict";
exports.__esModule = true;
var express = require('express');
var router = express.Router();
var passwordsControls_1 = require("../controlers/passwordsControls");
function userRole(req, res, next) {
    var user = req.cookies.user;
    var role = user.role;
    console.log(role);
    req.role = role;
    next();
}
router.get('/getAllPasswords', userRole, passwordsControls_1.passwordsControl);
module.exports = router;
