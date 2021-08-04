const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const { beaches, drinks } = require('./model/dist/images');

app.use(express.static('public'));

app.get('/beaches', (req, res) => {
  res.send(beaches);
})


app.get('/drinks', (req, res) => {
  res.send(drinks);
})

app.listen(port, () => console.log('Server listen on port', port))

