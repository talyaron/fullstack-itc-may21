"use strict";

var express = require('express');

var router = express.Router();

var controller = require('../controllers/controller'); // const {
//     checkAdminForAllReq,
//     validateBody,
//     authorization
// } = require('../middleware/middleware');
// router.put(
//     '/updateProducts',
//     validateBody(Schemas.updateProductsSchemaAJV),
//     authorization,
//     checkAdminForAllReq,
//     adminUserController.updateProducts
// )


module.exports = router;