"use strict";
exports.__esModule = true;
exports.validatePassword = exports.encryptPassword = exports.doesUserExist = exports.isLoggedInAndAuthenticated = void 0;
var secret = require('../../secret/dist/secret').secret;
var _a = require("../../models/dist/usersModel"), User = _a.User, Users = _a.Users;
var jwt = require('jsonwebtoken');
var bcrypt = require('bcrypt');
function isLoggedInAndAuthenticated(req, res, next) {
    try {
        var currentUser = req.cookies.currentUser;
        if (currentUser) {
            jwt.verify(currentUser, secret, function (err, decoded) {
                if (err) {
                    res.status(401).send({ message: 'You are not authorized to see this page, mister hacker...' });
                    return;
                }
                req.currentUser = decoded;
                next();
            });
        }
        else
            res.status(401).send({ message: 'The session has expired. Please log in again.' });
    }
    catch (error) {
        console.error(error.message);
        res.status(500).send(error.message);
    }
}
exports.isLoggedInAndAuthenticated = isLoggedInAndAuthenticated;
function doesUserExist(req, res, next) {
    try {
        var users = new Users();
        if (req.currentUser) {
            var currentUser = req.currentUser;
            var userUuid = currentUser.userUuid;
            var userIndex = users.findUserIndex(userUuid, null);
            if (userIndex !== undefined) {
                req.userUuid = userUuid;
                req.userIndex = userIndex;
                next();
            }
            else
                res.status(404).send({ message: "User wasn't found, mister hacker..." });
        }
        else {
            var email = req.body.email;
            var userIndex = users.findUserIndex(null, email);
            if (userIndex === -1)
                res.status(404).send({ message: "User doesn't exist. Please register to the system." });
            else {
                req.userIndex = userIndex;
                next();
            }
            return;
        }
    }
    catch (error) {
        console.error(error.message);
        res.status(500).send(error.message);
    }
}
exports.doesUserExist = doesUserExist;
function encryptPassword(req, res, next) {
    try {
        var password = req.body.password;
        var saltRounds = 10;
        bcrypt.hash(password, saltRounds, function (err, hash) {
            try {
                if (err)
                    throw new Error('Issues in the password encryption process!');
                req.body.password = hash;
                next();
            }
            catch (error) {
                console.error(error.message);
                res.status(500).send(error.message);
            }
        });
    }
    catch (error) {
        console.error(error.message);
        res.status(500).send(error.message);
    }
}
exports.encryptPassword = encryptPassword;
function validatePassword(req, res, next) {
    try {
        var role = req.role; // registration attempt of new shopper or admin that wasn't already a shopper
        if (role) {
            next();
            return;
        }
        var password = req.body.password;
        var users = new Users();
        var userIndex = req.userIndex;
        var encryptedPassword = users.users[userIndex].password;
        bcrypt.compare(password, encryptedPassword, function (err, result) {
            try {
                if (err)
                    throw res.status(409).send({ message: 'The password you entered is incorrect.' });
                else if (result) {
                    next();
                }
                else
                    res.status(409).send({ message: 'The password you entered is incorrect.' });
            }
            catch (error) {
                console.error(error.message);
                res.status(500).send(error.message);
            }
        });
    }
    catch (error) {
        console.error(error.message);
        res.status(500).send(error.message);
    }
}
exports.validatePassword = validatePassword;
