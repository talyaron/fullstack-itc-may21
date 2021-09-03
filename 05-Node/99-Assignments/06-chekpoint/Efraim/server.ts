const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
app.use(express.json());
app.use(express.static('public'));


const bookRoute = require('./routes/bookRoute');


app.use('/books', bookRoute);


app.listen(port, () => {
    console.log(`Listening on port ${port}...`)
})