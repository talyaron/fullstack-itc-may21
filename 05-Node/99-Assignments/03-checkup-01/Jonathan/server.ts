const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const cookieParser = require('cookie-parser');

app.use(express.json())
app.use(express.static('public'));
app.use(cookieParser())


const studentRoute = require('./routes/studentRoute');
app.use('/student', studentRoute);

app.listen(port, () => console.log('Server listen on port', port))