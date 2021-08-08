const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const port = process.env.PORT || 5555;

app.get('/getData', (req ,res)=>{

    const cookieObject = {content:"Eat me!"};
    const cookieName = 'myFirstCookie';
    res.cookie(cookieName, JSON.stringify(cookieObject), { maxAge: 300000, httpOnly: true });
    res.send({success:true});

    console.log(req.cookies);
    const { myFirstCookie } = req.cookies;
    const FetchedCookieObject = JSON.parse(myFirstCookie);
    console.log(FetchedCookieObject);
    
});

app.use(express.static('public'));

app.listen(port, () => { console.log(`listening on port ${port}...`); });
