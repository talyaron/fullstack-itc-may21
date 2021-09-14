const express = require('express');
const app = express();
const port = process.env.PORT || 5000 
const cookieParser = require('cookie-parser');
const fs = require("fs");
const morgan = require('morgan');


// MIDDLEWARE
app.use(express.json());
app.use(cookieParser());
app.use(morgan('tiny'));
app.use(express.static('public'));

// IMPORT ROUTES FILES
const bookRoute = require('./routes/bookRoutes');


// ROUTES
app.use('/book', bookRoute);



app.listen(port, () => { console.log('listen on 5000') })


