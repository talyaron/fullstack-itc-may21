const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static('public'));

//route
const studentRoute = require('./routes/routeStudent');

app.use('/students', studentRoute);

app.listen(port, () => console.log('Server listen on port', port))

