var getAllUsers = require('../models/userModels.js').getAllUsers;
var swal = require('sweetalert');
//import schema
var Ajv = require('ajv');
var ajv = new Ajv();
var addFormats = require('ajv-formats');
addFormats(ajv);
exports.doesUserExist = function (req, res, next) {
    try {
        var email_1 = req.body.email;
        var allUsers = getAllUsers();
        var user = allUsers.find(function (user) { return user.email === email_1; });
        if (user) {
            res.status(400).send(JSON.stringify("this user is taken "));
            return; //not sending 
        }
        next();
    }
    catch (error) {
        console.log(error.message);
    }
};
exports.validateBody = function (schema) {
    return function (req, res, next) {
        var valid = ajv.validate(schema, req.body);
        if (!valid) {
            res.status(400).send(ajv.errors);
            return;
        }
        next();
    };
};
