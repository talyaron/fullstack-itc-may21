const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const fs = require('fs');

app.use(express.static('public'));
//read filefunction? // on load 

app.get('/getCocktails', (req, res) => {
    console.log('get....');
    const newCocktails = fs.readFileSync('./newCocktails.json');

    res.send(newCocktails);
})


app.listen(port, () => {
    console.log(`listening on port ${port}`);
})