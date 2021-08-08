var express = require('express');
var app = require('express')();
var cookieParser = require('cookie-parser');
app.use(express.static('public'));
app.use(cookieParser());
app.get('/getData', function (req, res) {
    console.log(req.cookies);
    var cookieName = req.cookies.cookieName;
    var cookie = JSON.parse(cookieName);
    console.log(cookie);
    var name = cookie.name;
    console.log(name);
    //write a cookie
    var name1 = JSON.stringify({ name: 'Raziel' });
    res.cookie('cookieName', name1, { maxAge: 300000000, httpOnly: true });
    res.send({ ok: true });
});
app.listen(3000, function () { console.log('listen on 3000'); });
