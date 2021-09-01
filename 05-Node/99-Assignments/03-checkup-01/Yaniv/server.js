const cookieParser = require('cookie-parser');

const path = require('path');
const pathToFile = path.resolve(__dirname, './public');

const express = require('express');
const app = express();

const port = process.env.PORT || 555;

app.use(express.json());
app.use(express.static(pathToFile));
app.use(cookieParser());

// const userRoutes = require('./routes/userRoutes');
const itemsRoute = require('./routes/itemsRoutes');

// app.use('/user', userRoutes);
app.use('/items', itemsRoute);

app.listen(port, () => console.log(`App listening on port ${port}`));