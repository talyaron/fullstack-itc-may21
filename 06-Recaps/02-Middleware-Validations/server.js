const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;
const usersRoute = require('./routes/usersRoute');

const cookieParser = require('cookie-parser');
const morgan = require('morgan');

app.use(cookieParser());
app.use(morgan('tiny'));
app.use(express.json());

app.use('/users', usersRoute);

app.listen(PORT, () => {
  console.log(`App is listening ${PORT}`);
});
