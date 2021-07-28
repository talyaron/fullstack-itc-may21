const express = require('express');
app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/getStudent', (req, res)=>{
    console.log(req.query);
    res.send({ok:true})
})

app.get('/getStudentPage/:mamboJambo/:hokosPokos', (req, res)=>{
    console.log(req.params);
    res.send({ok:true})
})


app.listen(port, ()=>{console.log('Server listen on port', port)})