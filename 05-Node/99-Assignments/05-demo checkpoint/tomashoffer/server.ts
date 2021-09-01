const express = require('express');
const app = express();
const port = process.env.PORT || 4000 
const cookieParser = require('cookie-parser');
const fs = require("fs");


// MIDDLEWARE
app.use(express.json());
app.use(cookieParser());
// app.use(morgan('tiny'));
app.use(express.static('public'));

// IMPORT ROUTES FILES
const userRoute = require('./routes/userRoutes');

// ROUTES
app.use('/user', userRoute);


app.listen(port, () => { console.log('listen on 4000') })


