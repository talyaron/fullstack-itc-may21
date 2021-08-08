const express = require('express');
const app = express();
var cookieParser = require('cookie-parser');
app.use(cookieParser());

const port = process.env.PORT || 3000


app.use(express.static('public'))

app.get('/cookie', (req, res) => {

//read cookies 
const cookie = req.cookies['cookie'];
console.log(cookie);
res.cookie('cookie', "Avromi Is...", {maxAge: 30000000, httpOnly: true});
res.send({ok: true})
});

app.get('/user', (req, res) => {
    const cookie = req.cookies['cookie'];
    res.send(cookie)
console.log(cookie);
})


app.listen(port, () => {
    console.log(`listening on port ${port}`)
})