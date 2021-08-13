const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');

app.use(express.json());
app.use(cookieParser());



app.get('/getData', (req, res) => {


    //read cookies
    console.log(req.cookies);
    const { cookieName } = req.cookies
    const cookie = JSON.parse(cookieName);
    console.log(cookie)
    const {name} = cookie;
    console.log(name)

    //write a cookie

    const name1 = JSON.stringify({ name: 'Raziel' })
    res.cookie('cookieName', name1, { maxAge: 300000000, httpOnly: true });
    res.send({ ok: true })
})

app.get('/user', (req, res)=>{

    //get name from the cookie

    //read cookies
    console.log(req.cookies);
    const { cookieName } = req.cookies
    const cookie = JSON.parse(cookieName);
    console.log(cookie)
    const {name} = cookie;
    console.log(name)

    res.send({name})

})

app.use(express.static('public'));
app.listen(3000, function () { console.log('listen on 3000'); });
