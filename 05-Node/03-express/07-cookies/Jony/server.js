var express = require('express');
var app = require('express')();
var cookieParser = require('cookie-parser');



//app.use(cookieParser())
app.get('/getData', function (req, res) {


    // console.log(req.cookies)
    // const {cookieName} = req.cookies
    // const cookie = JSON.parse(cookieName)
    // const {name} = cookie
    // console.log(name)

    const newName = {
        'name': 'Jonathan',
        'edad': 23
    };

    res.cookie('cookieName', JSON.stringify(newName), { maxAge: 30000000, httpOnly: true });
    res.send({ ok: true });
});




app.use(express.static('public'));
app.listen(3000, function () { console.log('listen on 3000'); });
