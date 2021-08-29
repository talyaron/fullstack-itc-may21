const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;
const usersRoute = require('./routes/usersRoute');
const todosRoute = require('./routes/todosRoute');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
app.use(express.json());
app.use(express.static('public'));
app.use(express.static('public/login'));
app.use(express.static('public/signUp'));
app.use(express.static('public/todosPage'));

app.use(cookieParser());
app.use(express.json());

app.use('/users', usersRoute);
app.use('/todos', todosRoute);

app.listen(PORT, () => {
  console.log(`App is listening ${PORT}`);
});
