const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const cookieParser = require('cookie-parser');

const path = require('path');
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.static(path.join(__dirname, 'public/html')))


app.use(cookieParser())
app.use(express.json());

const booksRoute = require("./routes/booksRoute")
app.use('/books', booksRoute)

app.listen(port, () => console.log('app Listening on port', port))

