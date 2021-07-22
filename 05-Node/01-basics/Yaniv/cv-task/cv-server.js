const express = require('express');
const app = express();
const path = require('path');
const port = 3025;

app.use('/public', express.static('cv'));
// app.use(express.static(__dirname));

// app.get('/', (req, res) => {
//     res.sendFile('./cv/cv.html', {root: __dirname});
// });

app.listen(port, () => {console.log(`listening on port ${port}`);});