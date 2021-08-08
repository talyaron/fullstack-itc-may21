const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const cookieParser = require('cookie-parser');
app.use(cookieParser());
app.use(express.json());


app.use(express.static('public'))

app.get('/cookie', (req, res) => {

    //read cookies 
    const {name}= req.query;
  
    
    res.cookie('cookie', name, {
        maxAge: 30000000,
        httpOnly: true
    });
    res.send({
        ok: true
    })
});

app.get('/user', (req, res) => {
    const cookie = req.cookies['cookie'];
    res.send({cookie})

})


app.listen(port, () => {
    console.log(`App listening on port: ${port}`);
})