const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');

app.use(express.json());
app.use(cookieParser());

app.use(getName);

app.get('/getData', isGolan, (req, res) => {

    //read cookies

    if (req.name) {
        const length = req.name.length;
        if(length % 0) {
            res.send({"odd":"odd"})
        }else{
            res.send({"even":"even"})
        }
    } 
  
})


app.use(express.static('public'));
app.listen(3000, function () { console.log('listen on 3000'); });


function getName(req, res, next) {

    const { cookieName } = req.cookies
    if (cookieName) {
        const cookie = JSON.parse(cookieName);
        const { name } = cookie;
        req.name = name;
    } else {
        const name1: string = JSON.stringify({ name: 'Golan' })
        res.cookie('cookieName', name1, { maxAge: 300000000, httpOnly: true });
        req.name = undefined;
    }

    next();
}

function isGolan(req, res, next) {
    if (req.name === 'Golan') {
        console.log('This is Golan!')

        next();

    } else {
        console.log('This is not Golan')
        res.status(401).send({ erorr: 'User is not authorised to  in this route' })
    }
}
