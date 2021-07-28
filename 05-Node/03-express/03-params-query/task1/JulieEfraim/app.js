const express = require('express');
app = express();
const port = process.env.PORT || 4000;
var bodyParser = require('body-parser');
app.use(bodyParser.json());

app.use(express.static('public'));

app.post('/addColor', (req, res)=>{
    
    console.log(req.body);
   
})



app.listen(port, ()=>{console.log('Server listen on port', port)})