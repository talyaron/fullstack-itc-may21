const express = require('express');
const router = express.Router();
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));

const beachesRoute = require('./routes/beaches/routeBeaches');
const drinksRoute = require('./routes/drinks/routeDrinks');

app.use('/beaches', beachesRoute);
app.use('/drinks', drinksRoute);

app.listen(port, () => console.log('Server listen on port', port))

module.exports = router;
