const express= require("express");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'))
app.use(express.json());

const productRouter = require('./routes/productRoutes.js')
const userRouter = require('./routes/userRoutes.js')

app.use('/products', productRouter)
app.use('/users', userRouter)

app.listen(port,()=>console.log('Server listen on port', port));
