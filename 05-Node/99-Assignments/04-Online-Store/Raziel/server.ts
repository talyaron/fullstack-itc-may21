const express = require('express'); 
const app= express();
const port= process.env.PORT || 3000;
const cookieParser = require('cookie-parser');
const { v4: uuidv4 } = require("uuid");

const path=require('path');

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.static(path.join(__dirname, 'public/dist')))
app.use(cookieParser());
  //the routes 

  const userRoute= require('./routes/userRoute');
  const productRoute= require('./routes/productRoute');




  //use of the routes 

  app.use('/user',userRoute);
  app.use('/product',productRoute);



app.listen(port,() => {console.log(`app listen to port,${port}`)});