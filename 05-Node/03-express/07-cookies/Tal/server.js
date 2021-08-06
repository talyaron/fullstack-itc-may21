const express = require('express');
const app = express();
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

app.use(express.static('public'));
app.listen(3000, function () { console.log('listen on 3000'); });
