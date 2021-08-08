const express = require('express');
const app = require('express')()
const cookieParser = require('cookie-parser');

app.use(express.static('public'))

app.use(cookieParser());
app.get('/getData', (req ,res)=>{


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




app.listen(3000, ()=>{console.log('listen on 3000')})