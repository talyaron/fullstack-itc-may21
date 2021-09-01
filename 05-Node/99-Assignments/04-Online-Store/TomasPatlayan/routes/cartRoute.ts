import { addToCart, getCart } from "../controllers/cartController";
import { getUser } from "../controllers/userController";
// import { readCart } from "../models/productsModel";

export{}
 const express = require('express');
 const router = express.Router();

 router.post('/addToCart/:id',addToCart).get('/getCart',getCart) 
  




 module.exports = router;