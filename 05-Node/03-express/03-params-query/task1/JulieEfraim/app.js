const express = require('express');
app = express();
const port = process.env.PORT || 4000;
app.use(express.json());

app.use(express.static('public'));

app.post('/add', (req, res)=>{
    
    console.log(req.body);
   
})



app.listen(port, ()=>{console.log('Server listen on port', port)})