export { };
const express = require('express');
const router = express.Router();
const Schemas = require('../schemas/schemas');

import{userCookieWrite,userCookieRead} from '../middlewear/userCookie'
import { validateBody } from '../middlewear/validateBody'
import{isAdmin} from '../middlewear/isAdmin'
import { newProduct, getAllProducts, removeProduct, editProduct } from '../controlers/controlerProduct'

router.post('/newProduct', userCookieRead, isAdmin,validateBody(Schemas.productSchemaFJS), newProduct);
router.get('/allProducts', userCookieRead, getAllProducts);
router.delete('/deleteProduct/:id', userCookieRead, isAdmin, removeProduct);
router.put('/updateProduct/:id', userCookieRead, isAdmin,  validateBody(Schemas.productSchemaFJS), editProduct);
module.exports = router;
