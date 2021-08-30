const express = require('express')
const router = express.Router()

import {getAll, addProduct,deleteProduct, bringProduct,editProduct, bringselectedById} from '../controllers/productControllers'
import { editProdCookie } from '../middleware/cookieEditId'
import { productIdCookie } from '../middleware/descriptionCookieId'

router.get('/getAllProducts', getAll)
router.post('/productos' , addProduct )
router.post('/deleteProduct',deleteProduct)
router.get('/bring/:id',editProdCookie, bringProduct )

router.get('/getProductById/:id', bringselectedById )

router.put('/edit', editProduct);

module.exports = router;
