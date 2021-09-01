const express = require('express');
const app = express();
const path = require('path');
const morgan = require('morgan');
const cookieParser = require("cookie-parser");
app.set("port", 3500 || process.env.PORT);

app.use(express.json());
app.use(morgan('tiny'))
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



const userRoute = require('./routes/userRoute');


app.use('/user',userRoute);


app.listen(app.get("port"), () => {
    console.log(`app listening on http://localhost:${app.get("port")}`);
  });
  