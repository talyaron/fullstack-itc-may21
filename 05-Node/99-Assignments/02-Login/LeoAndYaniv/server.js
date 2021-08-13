const express = require('express');

app = express();
const port = process.env.PORT || 5555;

app.use(express.json());
app.use(express.static('public'));

app.listen(port, () => {
    console.log(`listening on port ${port}...`)
});