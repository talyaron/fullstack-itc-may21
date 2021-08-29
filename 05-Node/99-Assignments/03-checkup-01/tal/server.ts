const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));

//route
const beachesRoute = require('./routes/routeBeaches');


app.use('/beaches', beachesRoute);



app.listen(port, () => console.log('Server listen on port', port))

