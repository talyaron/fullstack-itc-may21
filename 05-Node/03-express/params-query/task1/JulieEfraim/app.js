const express = require('express');
app = express();
const port = process.env.PORT || 4000;

app.use(express.static('public'));

app.get('/addColor', (req, res)=>{
    
    console.log(req.body);
    res.send("students.list");
   
})



app.listen(port, ()=>{console.log('Server listen on port', port)})