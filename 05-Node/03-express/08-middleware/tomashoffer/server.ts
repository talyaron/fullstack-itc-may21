const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
app.use(express.json());
app.use(cookieParser());

const writeCookie = (req, res, next) => {
    const names = ['tomas', 'eric', 'joni'];
    res.cookie('cookieName', names, { maxAge: 300000000, httpOnly: true });
    next()
}
app.use(writeCookie);

const readCookie = (req, res, next) => {
    const { cookieName } = req.cookies
    console.log(cookieName)
    req.names = cookieName;
    next();
}

app.get('/getData', readCookie, (req, res) => {

    if (req.names.length  % 2 == 0) {
        console.log('The array of names is even ', req.names)

    }else{
        console.log('The array of names is odd ', req.names)
    }
    res.send({ ok: true })
})

app.use(express.static('public'));
app.listen(1200, () => { console.log('listen on 1200') })