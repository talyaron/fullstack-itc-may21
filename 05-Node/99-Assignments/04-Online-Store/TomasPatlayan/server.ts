const express= require('express');
const app = express();
const path = require('path');
const morgan = require('morgan');
const cookieParser = require("cookie-parser");
app.set("port", 8080 || process.env.PORT);

app.use(express.json());
app.use(morgan('tiny'))
app.use(cookieParser());
 




app.use(express.static(path.join(__dirname, 'public')));


const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
const cartRoutes = require('./routes/cartRoute');

app.use('/user',userRoutes);
app.use('/product',productRoutes,cartRoutes);




app.listen(app.get("port"), () => {
    console.log(`app listening on http://localhost:${app.get("port")}`);
  });
  