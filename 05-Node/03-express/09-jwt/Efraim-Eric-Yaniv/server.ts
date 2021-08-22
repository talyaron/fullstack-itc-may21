const express = require('express'); //get library
const app = express(); //get express
const port = process.env.PORT || 3000; //port
const cookieParser = require('cookie-parser');
const jwt = require('jwt-simple');

app.use(cookieParser());

app.use(express.static('public'));

app.use(express.json()); //use express to get parse json

//route
const userRoute = require('./routes/userRoute');
app.use('/user', userRoute);

const secertsRoute = require('./routes/secretsRoute');
app.use('/secrets', secertsRoute);


app.listen(port, () => {
    console.log(`server listening at port: ${port}`)
})