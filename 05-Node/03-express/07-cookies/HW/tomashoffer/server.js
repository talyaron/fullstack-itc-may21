const express = require('express')
const cookieParser = require('cookie-parser')
const app = express();

app.use(cookieParser())
// READ PUBLIC 
app.use(express.static('public'));

app.get('/setCookie/:user', (req, res)=>{
//set cookies
    const formData = req.params;
    const user = formData;
    res.cookie('name', Object.values(user), { maxAge:300000, httpOnly:true}); 
    res.send({success:true})
})

app.get('/readCookies', (req, res)=>{
//read cookies
console.log(req.cookies);
const cookieName  = req.cookies
console.log(cookieName);
res.send(cookieName)
})

app.get('/removeCookie', (req, res)=>{
    res.clearCookie('name')
    res.send({clear:true})
})

app.listen(1200, ()=>{console.log('listen on 1200')})

// create login page
// show the name I all other pages (create the 2-page site)