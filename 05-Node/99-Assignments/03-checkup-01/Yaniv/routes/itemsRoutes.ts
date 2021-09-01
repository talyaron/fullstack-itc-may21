const express = require('express')
const router = express.Router();

import { getItems, doSomething1, addItem, updateItem, removeItem } from '../controllers/itemsController';

router
    .get('/all', isWorkingMW, getItems)
    .post('/doSomething1', isWorkingMW, doSomething1)
    .post('/', isWorkingMW, addItem)
    .put('/', isWorkingMW, updateItem)
    .delete('/:itemUuid', isWorkingMW, removeItem)

    function isWorkingMW(req, res, next){
        console.log('working');
        next();
    }

module.exports = router