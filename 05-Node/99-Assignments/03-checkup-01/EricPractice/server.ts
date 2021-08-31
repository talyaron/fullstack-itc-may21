const express = require('express');
const app = express();
const port = process.env.PORT || 3001;
const fs = require("fs");


app.use(express.json())
app.use(express.static('public'));

const studentRoute = require('./routes/studentRoute')
app.use('/student', studentRoute)

app.listen(port, () => console.log('Server listen on port', port))
