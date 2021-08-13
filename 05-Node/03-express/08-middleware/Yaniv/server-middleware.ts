import { runInNewContext } from "vm";

const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');

app.use(express.json());
app.use(cookieParser());

app.use(getName);

app.get('/getData', isOddName, (req, res) => {


    //read cookies

    if (req.name) {
        console.log('we got the name and it is', req.name)

    } 
    res.send({ ok: true })
})

interface CookieName{
    name:string;
}

app.get('/user', (req, res) => {

    //get name from the cookie

    //read cookies
    console.log(req.cookies);
    const { cookieName } = req.cookies

    const cookie:CookieName = JSON.parse(cookieName);
    console.log(cookie);
    const { name } = cookie;
    console.log(name)

    res.send({ name })

})

app.use(express.static('public'));
app.listen(3000, function () { console.log('listen on 3000'); });


function getName(req, res, next) {

    const { cookieName } = req.cookies
    if (cookieName) {
        const cookie = JSON.parse(cookieName);
        console.log(cookie)
        const { name } = cookie;
        req.name = name;
    } else {
        const name1: string = JSON.stringify({ name: 'Yaniv' })
        res.cookie('cookieName', name1, { maxAge: 300000000, httpOnly: true });
        req.name = undefined;
    }



    next();
}

function isOddName(req, res, next) {
    const nameLength: number = req.name.length;
    if (nameLength % 2 === 1) {
        console.log('Your name is odd!')
        next();

    } else {
        console.log('this is not an odd name')
        res.status(500).send({ erorr: 'this is not an odd name. Server does not like!' })
    }
}
