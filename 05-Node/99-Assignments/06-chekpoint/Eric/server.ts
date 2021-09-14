


const express = require('express');
const app = express();
const port = process.env.PORT || 4000;
const fs = require("fs");



const cookieParser = require("cookie-parser")
app.use(cookieParser())

app.use(express.json())
app.use(express.static('public'));

const bookRoutes = require('./routes/bookRoute');
app.use('/book', bookRoutes);



app.listen(port, () => console.log('Server listen on port', port))
