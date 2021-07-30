const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const fs = require('fs');

app.use(express.static('public'));
//read filefunction? // on load 

app.get('/', (req, res) => {
    const cocktails = fs.readFileSync('cocktails.json')
    console.log(cocktails);
    res.send('something' + cocktails);


})

app.listen(port, () => {
    console.log(`listening on port ${port}`);
})