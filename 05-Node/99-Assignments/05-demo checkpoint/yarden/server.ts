const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(express.json())

const usersRoute = require('./routes/usersRoute')

app.use('/users', usersRoute)


app.listen(port, () => console.log('Server listen on port', port))
