var express = require('express');
var app = express();
var cookieParser = require('cookie-parser');
app.use(express.json());
app.use(cookieParser());

function getName(req, res, next){ 
    console.log(req.cookies);
    var cookieName = req.cookies.cookieName;
    var cookie = JSON.parse(cookieName);
    console.log(cookie);
    req.name = cookie.name;
    next();
}
function isRaziel(req, res, next){
    if(req.name === "Raziel"){
        next();
    }else {
        res.status(401).send({error:'This is not Raziel!'})
    }
}

app.use(express.static('public'));

app.use(getName);

app.get('/getData',getName, function (req, res) {
    //read cookies
   
    const name = req.name;
    console.log("req.name;",name);
    //write a cookie
    var name1 = JSON.stringify({ name: 'Raziel' });
    res.cookie('cookieName', name1, { maxAge: 300000000, httpOnly: true });
    res.send({ ok: true });
});
app.get('/user', function (req, res) {
    //get name from the cookie
    //read cookies
   
    var name = req.name;
    console.log(name);
    res.send({ name});
});

app.listen(3000, function () { console.log('listen on 3000'); });
