var express = require('express');
var app = express();
var cookieParser = require('cookie-parser');
app.use(express.json());
app.use(cookieParser());
var writeCookie = function (req, res, next) {
    var names = ['tomas', 'eric', 'joni'];
    res.cookie('cookieName', names, { maxAge: 300000000, httpOnly: true });
    next();
};
app.use(writeCookie);
var readCookie = function (req, res, next) {
    var cookieName = req.cookies.cookieName;
    console.log(cookieName);
    req.names = cookieName;
    next();
};
app.get('/getData', readCookie, function (req, res) {
    if (req.names.length % 2 == 0) {
        console.log('The array of names is even ', req.names);
    }
    else {
        console.log('The array of names is odd ', req.names);
    }
    res.send({ ok: true });
});
app.use(express.static('public'));
app.listen(1200, function () { console.log('listen on 1200'); });
