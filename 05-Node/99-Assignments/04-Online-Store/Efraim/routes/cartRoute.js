const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController');
const {
    validateBody,
    authorization
} = require('../middleware/middleware');
const Schemas = require('../schemas/allSchemas');

router.post(
    '/addToCart',
    validateBody(Schemas.addToCartSchemaAJV),
    authorization,
    cartController.addToCart
)


router.get(
    '/getUserCart',
    authorization,
    cartController.getUserCart
)

router.delete(
    '/deleteFromCart/:productID',
    authorization,
    cartController.deleteFromCart
)

router.put(
    '/updateAmountFromCart',
    validateBody(Schemas.updateAmountFromCartSchemaAJV),
    authorization,
    cartController.updateAmountFromCart
)

module.exports = router;