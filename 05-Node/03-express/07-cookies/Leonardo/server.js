const express = require('express');
const app = require('express')()
const cookieParser = require('cookie-parser');

app.use(express.static('public'));

//I use this to read the cookie (I can create it with out this)
app.use(cookieParser());

app.get('/getData', (req, res) => {

    //Set the cookie
    const cookieNombre = { content: "Dale a tu cuerpo alegria macarena" };
    res.cookie('cookieName', cookieNombre, { maxAge: 10000, httpOnly: true }).send('Cookie is set');

    //Read the cookie
    const { cookieName } = req.cookies;
    const {content} = cookieName
    console.log(content);
});



app.listen(3000, () => { console.log('listen on 3000') })