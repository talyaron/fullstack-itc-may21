"use strict";
exports.__esModule = true;
exports.removeItem = exports.doSomething1 = exports.addItem = exports.updateItem = exports.getItems = void 0;
var itemsModel_1 = require("../model/itemsModel");
var items = new itemsModel_1.Items();
function getItems(req, res) {
    try {
        res.send({ items: items.itemsArray });
    }
    catch (error) {
        console.error(error.message);
        res.status(500).send(error.message);
    }
}
exports.getItems = getItems;
function updateItem(req, res) {
    try {
        var _a = req.body, itemUuid = _a.itemUuid, updatedItemDetail1 = _a.updatedItemDetail1, updatedItemDetail2 = _a.updatedItemDetail2;
        if (!itemUuid)
            throw new Error("No user was passed");
        if (!updatedItemDetail1 && !updatedItemDetail2)
            throw new Error("No details were passed");
        var updatedItemIndex = items.updateItem(itemUuid, updatedItemDetail1, updatedItemDetail2);
        var updatedItem = items.itemsArray[updatedItemIndex];
        res.send({ item: updatedItem });
    }
    catch (error) {
        console.error(error.message);
        res.status(500).send(error.message);
    }
}
exports.updateItem = updateItem;
function addItem(req, res) {
    try {
        var _a = req.body, itemDetail1 = _a.itemDetail1, itemDetail2 = _a.itemDetail2;
        if (!itemDetail1 || !itemDetail2)
            throw new Error("No item was passed");
        var item = new itemsModel_1.Item(itemDetail1, itemDetail2);
        items.addItem(item);
        res.send({ items: items.itemsArray });
    }
    catch (error) {
        console.error(error.message);
        res.status(500).send(error.message);
    }
}
exports.addItem = addItem;
function doSomething1(req, res) {
    try {
        var Input1ModelName = req.body.Input1ModelName;
        var serverOutput1 = items.doSomething1(Input1ModelName);
        res.send({ clientOutput: serverOutput1 });
    }
    catch (error) {
        console.error(error.message);
        res.status(500).send(error.message);
    }
}
exports.doSomething1 = doSomething1;
function removeItem(req, res) {
    try {
        var itemUuid = req.params.itemUuid;
        if (!itemUuid)
            throw new Error("No user was passed");
        items.removeItem(itemUuid);
        res.send({ items: items.itemsArray });
    }
    catch (error) {
        console.error(error.message);
        res.status(500).send(error.message);
    }
}
exports.removeItem = removeItem;
