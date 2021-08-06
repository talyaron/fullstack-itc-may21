const express = require('express');
const app = express();

const port = process.env.PORT || 3000


app.use(express.static('public'))

app.get('/cookie', (req, res) => {

//read cookies 
const cookie = req.cookies;
console.log(cookie);
console.log('before cookie ');
res.cookie('cookie', "Avromi Is...", {maxAge: 30000000, httpOnly: true});
res.send({ok: true})
});



app.listen(port, () => {
    console.log(`listening on port ${port}`)
})