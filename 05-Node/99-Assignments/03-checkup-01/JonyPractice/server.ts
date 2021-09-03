const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;
const cookieParser = require('cookie-parser');
const morgan = require('morgan');

app.use(express.json());
app.use(express.static('public'));

app.use(cookieParser());
app.use(express.json());

const userRoute = require('./routes/userRoute')
app.use('/users', userRoute)


app.listen(PORT, () => {
  console.log(`App is listening ${PORT}`);
});
