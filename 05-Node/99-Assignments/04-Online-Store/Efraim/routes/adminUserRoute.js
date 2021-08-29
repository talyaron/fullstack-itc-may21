const express = require('express');
const router = express.Router();
const adminUserController = require('../controllers/adminUserController');
const multer = require('multer');

const {storage} = require('../models/adminmodels');
const upload = multer({ storage })

const {
    checkAdminForAllReq,
    validateBody,
    authorization
} = require('../middleware/middleware');

const Schemas = require('../schemas/allSchemas');

router.put(
    '/updateProducts',
    validateBody(Schemas.updateProductsSchemaAJV),
    authorization,
    checkAdminForAllReq,
    adminUserController.updateProducts
)

router.delete(
    '/deleteProduct/:productID',
    authorization,
    checkAdminForAllReq,
    adminUserController.deleteProduct
)

// don't know really why but if the upload.single wasn't the first middleware then the 
// validateBody was breaking the code.. ideally I wanted upload.single last so the image isn't saved if 
// one of the other middlewares ended the post

router.post(
    '/addProduct',
    authorization,
    checkAdminForAllReq, 
    upload.single('image'),
    validateBody(Schemas.addProductSchemaAJV),
    adminUserController.addProduct
)

module.exports = router;