const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));

//route

const studnetsRoute = require('./routes/studentdRoute');
app.use('/students', studnetsRoute);


//route


app.listen(port, () => console.log('Server listen on port', port))

