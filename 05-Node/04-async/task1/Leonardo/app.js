/* On the server stored data of beverages. The data should contain an image of the beverages
On the client get the data and print it to the DOM with the image and text.
One function will be with promise and the other function will be with async-await */

const express = require('express');
app = express();
const port = process.env.PORT || 3000;

let beverages = [{ name: 'Fernet Branca', src: `https://cdn11.bigcommerce.com/s-abmjjefojj/images/stencil/640w/products/2630/12221/Fernet-Argentina_Select__23847.1598921968.jpg?c=1` },
{ name: `Gancia`, src: `https://www.espaciovino.com.ar/media/default/0001/56/thumb_55057_default_big.jpeg` }];

app.use(express.json());

app.use(express.static('public'));

app.get('/getBeverages', (req, res) => {
        res.send(beverages);
})

app.listen(port, () => { console.log('Server listen on port', port) })