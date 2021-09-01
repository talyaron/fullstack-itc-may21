var Ajv = require('ajv');
var ajv = new Ajv();
var addFormats = require('ajv-formats');
addFormats(ajv);
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
var dotenv = require('dotenv').config();
var users = require('../models/classes').users;
//YS: Nice use of middleware!
exports.validateBody = function (schema) {
    return function (req, res, next) {
        var valid = ajv.validate(schema, req.body);
        if (!valid) {
            res.status(400).send(ajv.errors[0]['message']);
            return;
        }
        next();
    };
};
exports.checkAdminAccountCreated = function (req, res, next) {
    try {
        var admincode = req.body.admincode;
        if (admincode && admincode === process.env.ADMIN_CODE) {
            req.body.role = process.env.ADMIN_ROLE; //YS: This doesnt really have to be in the .env file 
            next();
        }
        if (admincode && admincode != process.env.ADMIN_CODE) {
            res.status(400).send('admin code not correct');
            return;
        }
        else {
            next();
        }
    }
    catch (e) {
        console.error(e);
    }
};
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
exports.decryptPwd = function (req, res, next) {
    try {
        var _a = req.body, email_1 = _a.email, password = _a.password;
        var user = users.users.find(function (user) { return user.email === email_1; });
        bcrypt.compare(password, user.password, function (err, result) {
            if (err) {
                throw new Error('Incorrect password');
            }
            if (result) {
                next();
            }
        });
    }
    catch (err) {
        res.status(400).send(err);
    }
};
exports.authorization = function (req, res, next) {
    var authHeaders = req.headers['authorization'];
    if (!authHeaders) {
        res.status(401).send('Must provide a token');
        return;
    }
    var token = authHeaders.replace('Bearer ', '');
    jwt.verify(token, process.env.SECRET_KEY, function (err, decoded) {
        if (err) {
            res.status(401).send('Invalid Token');
            return;
        }
        req.decoded = decoded;
        next();
    });
};
exports.createTokenAndRoleCheck = function (req, res, next) {
    try {
        var user = users.users.find(function (user) { return req.body.email === user.email; });
        var token = jwt.sign({ userID: user.userID }, process.env.SECRET_KEY, { expiresIn: '1h' });
        var URL = '/adminpage.html';
        req.token = token;
        if (user.role === process.env.ADMIN_ROLE) {
            res.send({ URL: URL, token: token });
        }
        else {
            next();
        }
    }
    catch (e) {
        console.error(e);
    }
};
exports.checkPassword = function (req, res, next) {
    try {
        var _a = req.body, password = _a.password, repassword = _a.repassword;
        if (password === repassword) {
            next();
        }
        else {
            res.status(400).send("passwords don't match!");
        }
    }
    catch (e) {
        console.error(e);
    }
};
exports.checkAdminForAllReq = function (req, res, next) {
    try {
        var userID = req.decoded.userID;
        var user = users.findUser(userID);
        if (user.role === process.env.ADMIN_ROLE) {
            next();
        }
        else {
            res.status(400).send('you are not authorised to do that!!');
        }
    }
    catch (e) {
        console.error(e);
    }
};
exports.checkEmailValid = function (req, res, next) {
    try {
        var email_2 = req.body.email;
        var emailValidation = users.users.find(function (user) { return user.email === email_2; });
        if (emailValidation) {
            res.status(400).send('email already taken');
        }
        else {
            next();
        }
    }
    catch (e) {
        console.error(e);
    }
};
