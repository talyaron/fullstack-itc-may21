const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');

app.use(express.json());


app.use(cookieParser());


app.post('/getData', (req, res) => {

    try{

  
    const {userName, password} = req.body




     const loginData = JSON.stringify({ name: userName, password: password })
     res.cookie('cookieName', loginData, { maxAge: 3000, httpOnly: true });

     res.send({ ok: 'Press accept to see your login data'})

    } catch (e) {
        res.status(500).send({ error: `${e}` });
    }
})

app.get('/user', (req, res)=>{

    //get name from the cookie

    //read cookies

    console.log(req.cookies);
    const { cookieName } = req.cookies
    const cookie = JSON.parse(cookieName);
    console.log(cookie)
    const {name, password} = cookie;
    console.log(name)
    res.send({name:name, password: password});

})

app.use(express.static('public'));
app.listen(3000, function () { console.log('listen on 3000'); });
