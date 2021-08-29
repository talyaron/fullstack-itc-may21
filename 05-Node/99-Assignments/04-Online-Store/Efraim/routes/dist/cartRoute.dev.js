"use strict";

var express = require('express');

var router = express.Router();

var cartController = require('../controllers/cartController');

var _require = require('../middleware/middleware'),
    validateBody = _require.validateBody,
    authorization = _require.authorization;

var Schemas = require('../schemas/allSchemas');

router.post('/addToCart', validateBody(Schemas.addToCartSchemaAJV), authorization, cartController.addToCart);
router.get('/getUserCart', authorization, cartController.getUserCart);
router["delete"]('/deleteFromCart/:productID', authorization, cartController.deleteFromCart);
router.put('/updateAmountFromCart', validateBody(Schemas.updateAmountFromCartSchemaAJV), authorization, cartController.updateAmountFromCart);
module.exports = router;