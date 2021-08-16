const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const cookieParser = require('cookie-parser');
// const isAdmin = require('./middlewares/isAdmin');

app.use(express.json());
app.use(express.static('public'));
// app.use(isAdmin());  

//I use this to read the cookie (I can create it with out this)
app.use(cookieParser());

//Route
const userRoute = require('./routes/routeUsers');
const surveysRoute = require('./routes/routeSurveys');

app.use('/user', userRoute);
app.use('/surveys', surveysRoute);

app.listen(port, () => { console.log(`Listening on port: ${port}`) });


//YS: Good!