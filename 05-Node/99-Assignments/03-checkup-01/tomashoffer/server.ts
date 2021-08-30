const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));

//route
const beachesRoute = require('./routes/routeBeaches');
const drinksRoute = require('./routes/routeDrinks');
const studentsRoute = require('./routes/studentController')

//route
app.use('/student', studentsRoute);

app.listen(port, () => console.log('Server listen on port', port))

