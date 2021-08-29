const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(express.json());

//route

const studentsRoute = require('./routes/studentsRoute');
app.use('/students', studentsRoute);



app.listen(port, () => console.log('Server listen on port', port))

