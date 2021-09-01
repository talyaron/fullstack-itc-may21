const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(express.json())

//route
const studentsRoute = require('./routes/studentsRoute')
const beachesRoute = require('./routes/routeBeaches');
const drinksRoute = require('./routes/routeDrinks');

app.use('/beaches', beachesRoute);
app.use('/drinks', drinksRoute);
app.use('/students', studentsRoute);

//route


app.listen(port, () => console.log('Server listen on port', port))

