const express = require('express');
const app = express();

const cookieParser = require('cookie-parser');
app.use(cookieParser());

const booksRoute = require('./routes/booksRoute')

const port = process.env.PORT || 3000;

const { sendCookie } = require('./middleware/sendCookie')

app.use(express.static('public'));
app.use(express.json())

app.use(sendCookie)

app.use('/books', booksRoute)


app.listen(port, () => console.log('Server listen on port', port))
