"use strict";
exports.__esModule = true;
var express = require('express');
var app = express();
var cookieParser = require('cookie-parser');
app.use(express.json());
app.use(cookieParser());
app.use(getName);
app.get('/getData', isGolan, function (req, res) {
    //read cookies
    if (req.name) {
        console.log('we got the name anfd it is ', req.name);
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
        var name1 = JSON.stringify({ name: 'Golan' });
        res.cookie('cookieName', name1, { maxAge: 300000000, httpOnly: true });
        req.name = undefined;
    }
    next();
}
function isGolan(req, res, next) {
    if (req.name === 'Golan') {
        console.log('This is Golan!');
        next();
    }
    else {
        console.log('This is not Golan');
        res.status(401).send({ erorr: 'User is not authorised to  in this route' });
    }
}
