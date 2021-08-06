const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const port = process.env.PORT || 5555;

app.get('/getData', (req ,res)=>{


    res.cookie('myFirstCookie',"Eat me!", { maxAge: 3000, httpOnly: true });
    res.send({success:true})
})

app.use(express.static('public'));

app.listen(port, () => { console.log(`listening on port ${port}...`); });
