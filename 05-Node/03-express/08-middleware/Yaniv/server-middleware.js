"use strict";
exports.__esModule = true;
var express = require('express');
var app = express();
var cookieParser = require('cookie-parser');
app.use(express.json());
app.use(cookieParser());
app.use(getName);
app.get('/getData', isOddName, function (req, res) {
    //read cookies
    if (req.name) {
        console.log('we got the name and it is', req.name);
    }
    res.send({ ok: true });
});
app.get('/user', function (req, res) {
    //get name from the cookie
    //read cookies
    console.log(req.cookies);
    var cookieName = req.cookies.cookieName;
    var cookie = JSON.parse(cookieName);
    console.log(cookie);
    var name = cookie.name;
    console.log(name);
    res.send({ name: name });
});
app.use(express.static('public'));
app.listen(3000, function () { console.log('listen on 3000'); });
function getName(req, res, next) {
    var cookieName = req.cookies.cookieName;
    if (cookieName) {
        var cookie = JSON.parse(cookieName);
        console.log(cookie);
        var name = cookie.name;
        req.name = name;
    }
    else {
        var name1 = JSON.stringify({ name: 'Yaniv' });
        res.cookie('cookieName', name1, { maxAge: 300000000, httpOnly: true });
        req.name = undefined;
    }
    next();
}
function isOddName(req, res, next) {
    var nameLength = req.name.length;
    if (nameLength % 2 === 1) {
        console.log('Your name is odd!');
        next();
    }
    else {
        console.log('this is not an odd name');
        res.status(500).send({ erorr: 'this is not an odd name. Server does not like!' });
    }
}
