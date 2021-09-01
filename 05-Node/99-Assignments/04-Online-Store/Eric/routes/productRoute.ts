const express = require('express')
const router = express.Router()

import {getAll, addProduct,deleteProduct, bringProduct,editProduct, bringselectedById} from '../controllers/productControllers'
import { editProdCookie } from '../middleware/cookieEditId'
import { productIdCookie } from '../middleware/descriptionCookieId'

router.get('/getAllProducts', getAll)
router.post('/productos' , addProduct )
router.post('/deleteProduct',deleteProduct)  //YS: Why is this not router.delete if you are deleting? Also you shhould provide the ID in the params: /deleteProduct/:id
router.get('/bring/:id',editProdCookie, bringProduct )

router.get('/getProductById/:id', bringselectedById )

router.put('/edit', editProduct); //YS: Should be: /edit/:id

module.exports = router;
