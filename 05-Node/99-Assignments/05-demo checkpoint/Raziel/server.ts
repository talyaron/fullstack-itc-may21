const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json())
app.use(express.static('public'));

 const userRoute= require('./routes/userRoute');
 app.use('/users',userRoute);
app.listen(port, () => console.log('Server listen on port', port))

