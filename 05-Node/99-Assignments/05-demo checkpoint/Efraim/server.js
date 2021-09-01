const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
app.use(express.json());
app.use(express.static('public'));


const userRoute = require('./routes/userRoute');


app.use('/user', userRoute);


app.listen(port, () => {
    console.log(`Listening on port ${port}...`)
})