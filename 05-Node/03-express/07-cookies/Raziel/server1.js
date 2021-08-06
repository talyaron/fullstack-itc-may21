var express = require('express');
var app = require('express')();
var cookieParser = require('cookie-parser');
app.use(express.static('public'));
app.use(cookieParser());
app.get('/getData', function (req, res) {
    console.log(req.cookie);
    var cookieName = req.cookie.cookieName;
    var name = JSON.stringify({ name: "Cookie MOnster" });
    res.cookie('cookieName', name, { maxAge: 8000000, httpOnly: true });
    res.send({ ok: true });
});
app.listen(3000, function () { console.log('listen on 3000'); });
