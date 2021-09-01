"use strict";
exports.__esModule = true;
exports.Items = exports.Item = void 0;
var uuidv4 = require("uuid").v4;
var Item = /** @class */ (function () {
    function Item(itemDetail1, itemDetail2) {
        this.itemUuid = "item_" + uuidv4();
        this.itemDetail1 = itemDetail1;
        this.itemDetail2 = itemDetail2;
    }
    return Item;
}());
exports.Item = Item;
var Items = /** @class */ (function () {
    function Items() {
        this.itemsArray = [];
    }
    Items.prototype.addItem = function (item) {
        try {
            this.itemsArray.push(item);
        }
        catch (error) {
            console.error(error.message);
        }
    };
    Items.prototype.findItemIndex = function (itemUuid) {
        try {
            var itemIndex = this.itemsArray.findIndex(function (item) { return item.itemUuid === itemUuid; });
            if (itemIndex === -1)
                throw new Error("item doesn't exist");
            return itemIndex;
        }
        catch (error) {
            console.error(error.message);
        }
    };
    Items.prototype.updateItem = function (itemUuid, editedItemDetail1, editedItemDetail2) {
        try {
            var itemIndex = this.findItemIndex(itemUuid);
            if (editedItemDetail1)
                this.itemsArray[itemIndex].itemDetail1 = editedItemDetail1;
            if (editedItemDetail2)
                this.itemsArray[itemIndex].itemDetail2 = editedItemDetail2;
            return itemIndex;
        }
        catch (error) {
            console.error(error.message);
        }
    };
    Items.prototype.doSomething1 = function (Input1ModelName) {
        try {
            var itemsArrayModified = JSON.parse(JSON.stringify(this.itemsArray)); // in case need to manipulate itemsArry W/O changing the origin
            // doSomething1 code
            itemsArrayModified[0].itemDetail1 = Input1ModelName;
            var serverOutput1 = itemsArrayModified; // sent back to client
            return serverOutput1;
        }
        catch (error) {
            console.error(error.message);
        }
    };
    Items.prototype.removeItem = function (itemUuid) {
        try {
            this.itemsArray = this.itemsArray.filter(function (item) { return item.itemUuid !== itemUuid; });
        }
        catch (error) {
            console.error(error.message);
        }
    };
    return Items;
}());
exports.Items = Items;
