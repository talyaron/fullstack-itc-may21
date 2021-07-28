const express = require('express');
app = express();
const port = process.env.PORT || 3000;

let color = 'white';

app.use(express.json());

app.use(express.static('public'));

app.get('/getStudent', (req, res)=>{
    console.log(req.query);
    res.send({ok:true})
})

app.get('/getStudentPage/:mamboJambo/:hokosPokos', (req, res)=>{
    console.log(req.params);
    res.send({ok:true})
})

app.put('/setColor', (req, res)=>{
    color = req.body.color
    console.log(color)

    res.send({send:"OK"})
});

app.get('/getColor',(req, res)=>{
    res.send({color})
})


app.listen(port, ()=>{console.log('Server listen on port', port)})