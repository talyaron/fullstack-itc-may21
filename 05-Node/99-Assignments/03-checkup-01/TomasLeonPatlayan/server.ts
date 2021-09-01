const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(express.json())
//route
 
const studentRoute =require('./routes/studentRoutes');

app.use('/student', studentRoute);
 

//route


app.listen(port, () => console.log('Server listen on port', port))

