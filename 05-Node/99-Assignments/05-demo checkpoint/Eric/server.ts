const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const fs = require("fs");



const cookieParser = require("cookie-parser")
app.use(cookieParser())

app.use(express.json())
app.use(express.static('public'));

const userRoutes = require('./routes/userRoute');
app.use('/user', userRoutes);



app.listen(port, () => console.log('Server listen on port', port))
