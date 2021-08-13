var express = require('express');
var app = express();
var cookieParser = require('cookie-parser');
app.use(express.json());
app.use(cookieParser());
app.use(getName);
app.get('/getData', isGolan, function (req, res) {
    //read cookies
    if (req.name) {
        var length = req.name.length;
        if (length % 0) {
            res.send({ "odd": "odd" });
        }
        else {
            res.send({ "even": "even" });
        }
    }
});
app.use(express.static('public'));
app.listen(3000, function () { console.log('listen on 3000'); });
function getName(req, res, next) {
    var cookieName = req.cookies.cookieName;
    if (cookieName) {
        var cookie = JSON.parse(cookieName);
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
