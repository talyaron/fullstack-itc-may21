const express = require('express');
const app = require('express')()
const cookieParser = require('cookie-parser');


// app.use(cookieParser())


// // set a cookie
// app.use(function (req, res, next) {
//   // check if client sent cookie

//   // console.log(req.cookies)
//   const {cookieName} = req.cookies;
//   if (cookieName === undefined) {
//     console.log("cookie wasn't set")
//     // no: set a new cookie
//     var randomNumber=Math.random().toString();
//     randomNumber=randomNumber.substring(2,randomNumber.length);
//     res.cookie('cookieName',randomNumber, { maxAge: 900000, httpOnly: true });
//     console.log('cookie created successfully');
//   } else {
//     // yes, cookie was already present 
    
//     console.log('cookie exists', cookieName);
//   } 
//   next(); // <-- important!
// });


app.use(express.static('public'))

app.listen(3000, ()=>{console.log('listen on 3000')})