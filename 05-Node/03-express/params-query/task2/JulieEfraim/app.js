const express = require('express');
app = express();
const port = process.env.PORT || 4000;
app.use(express.json());

app.use(express.static('public'));

let jokesArray = []

app.post('/addJoke', (req, res)=>{
    jokesArray.push(req.body)
    console.log(jokesArray);
   
})
app.get('/getJoke',(req, res)=>{
    res.send({jokesArray})
})



app.listen(port, ()=>{console.log('Server listen on port', port)})