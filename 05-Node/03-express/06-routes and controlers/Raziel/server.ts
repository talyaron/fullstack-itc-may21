const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));

const routeClassAA=require('./routes/routeClassA');

app.use('/students',routeClassAA);
 

app.listen(port, () => console.log('Server listen on port', port))