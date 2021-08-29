"use strict";

var express = require('express');

var router = express.Router();

var adminUserController = require('../controllers/adminUserController');

var multer = require('multer');

var _require = require('../models/adminmodels'),
    storage = _require.storage;

var upload = multer({
  storage: storage
});

var _require2 = require('../middleware/middleware'),
    checkAdminForAllReq = _require2.checkAdminForAllReq,
    validateBody = _require2.validateBody,
    authorization = _require2.authorization;

var Schemas = require('../schemas/allSchemas');

router.put('/updateProducts', validateBody(Schemas.updateProductsSchemaAJV), authorization, checkAdminForAllReq, adminUserController.updateProducts);
router["delete"]('/deleteProduct/:productID', authorization, checkAdminForAllReq, adminUserController.deleteProduct); // don't know really why but if the upload.single wasn't before the 
// validateBody the code was breaking.. ideally I wanted upload.single last so the image isn't saved if 
// the valiadte body breaks

router.post('/addProduct', authorization, checkAdminForAllReq, upload.single('image'), validateBody(Schemas.addProductSchemaAJV), adminUserController.addProduct);
module.exports = router;