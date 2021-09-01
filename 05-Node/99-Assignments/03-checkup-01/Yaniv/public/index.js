var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
function getAllItems() {
    return __awaiter(this, void 0, void 0, function () {
        var _a, data, error, items, error_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, axios.get('/items/all')];
                case 1:
                    _a = _b.sent(), data = _a.data, error = _a.error;
                    if (error)
                        throw error;
                    items = data.items;
                    renderItems(items);
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _b.sent();
                    console.error(error_1.message);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
var addItemForm = document.querySelector('#add-item-form');
addItemForm.addEventListener('submit', addItem);
function addItem(ev) {
    return __awaiter(this, void 0, Promise, function () {
        var itemDetail1, itemDetail2, _a, data, error, items, error_2;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    ev.preventDefault();
                    itemDetail1 = ev.target.elements.itemDetail1.value;
                    itemDetail2 = ev.target.elements.itemDetail2.value;
                    if (!itemDetail1 || !itemDetail2)
                        throw new Error('missing details');
                    return [4 /*yield*/, axios.post('/items/', { itemDetail1: itemDetail1, itemDetail2: itemDetail2 })];
                case 1:
                    _a = _b.sent(), data = _a.data, error = _a.error;
                    if (error)
                        throw error;
                    items = data.items;
                    renderItems(items);
                    ev.target.reset();
                    return [3 /*break*/, 3];
                case 2:
                    error_2 = _b.sent();
                    console.error(error_2.message);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function renderItems(items) {
    try {
        var itemsElement = document.querySelector('.items');
        var itemsHtml = items.map(function (item) {
            return "\n            <div class=\"items__item item\" id=\"" + item.itemUuid + "\" style=\"border: 1px solid black; border-radius: 10px;\">\n                <h2 class=\"item__item item__item--detail-1\">" + item.itemDetail1 + "</h2>\n                <p class=\"item__item item__item--detail-2\">" + item.itemDetail2 + "</p>\n                <button style=\"background-color: darkred; color: white; display: inline-block;\" class=\"item__item item__item--delete\" onclick=\"removeItem('" + item.itemUuid + "')\">DELETE</button>\n                <button style=\"background-color: blue; color: white; display: inline-block;\" class=\"item__item item__item--update\" onclick=\"renderUpdateItemForm('" + item.itemUuid + "')\">UPDATE</button>\n            </div>";
        }).join('');
        itemsElement.innerHTML = itemsHtml;
    }
    catch (error) {
        console.error(error.message);
    }
}
function removeItem(itemUuid) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, data, error, items, error_3;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, axios["delete"]("/items/" + itemUuid)];
                case 1:
                    _a = _b.sent(), data = _a.data, error = _a.error;
                    if (error)
                        throw error;
                    items = data.items;
                    renderItems(items);
                    return [3 /*break*/, 3];
                case 2:
                    error_3 = _b.sent();
                    console.error(error_3.message);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function renderUpdateItemForm(itemUuid) {
    try {
        var itemElement = document.querySelector("#" + itemUuid);
        var itemDetail1 = itemElement.querySelector('.item__item--detail-1').innerText;
        var itemDetail2 = itemElement.querySelector('.item__item--detail-2').innerText;
        var updateItemFormHtml = "\n            <form class=\"items__item items__item--update-form item\" id=\"" + itemUuid + "\" onsubmit=\"updateItem(event)\">\n                <input class=\"item__item item__item--detail-1\" name=\"updatedItemDetail1\" value=" + itemDetail1 + " />\n                <input class=\"item__item item__item--detail-2\" name=\"updatedItemDetail2\" value=" + itemDetail2 + " />\n                <input type=\"submit\" class=\"item__item item__item--update\" style=\"background-color: blue; color: white; display: inline-block;\" value=\"UPDATE\" />\n            </form>";
        itemElement.innerHTML = updateItemFormHtml;
    }
    catch (error) {
        console.error(error.message);
    }
}
function updateItem(ev) {
    return __awaiter(this, void 0, void 0, function () {
        var itemElement, itemUuid, updatedItemDetail1, updatedItemDetail2, _a, data, error, item, updateItemDivHtml, error_4;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    ev.preventDefault();
                    itemElement = ev.target.parentElement;
                    itemUuid = itemElement.getAttribute('id');
                    updatedItemDetail1 = ev.target.elements.updatedItemDetail1.value;
                    updatedItemDetail2 = ev.target.elements.updatedItemDetail2.value;
                    ev.target.reset();
                    return [4 /*yield*/, axios.put('/items/', { itemUuid: itemUuid, updatedItemDetail1: updatedItemDetail1, updatedItemDetail2: updatedItemDetail2 })];
                case 1:
                    _a = _b.sent(), data = _a.data, error = _a.error;
                    if (error)
                        throw error;
                    item = data.item;
                    updateItemDivHtml = "\n        <div class=\"items__item item\" id=\"" + item.itemUuid + "\">\n        <h2 class=\"item__item item__item--detail-1\">" + item.itemDetail1 + "</h2>\n        <p class=\"item__item item__item--detail-2\">" + item.itemDetail2 + "</p>\n        <button style=\"background-color: darkred; color: white; display: inline-block;\" class=\"item__item item__item--delete\" onclick=\"removeItem('" + item.itemUuid + "')\">DELETE</button>\n        <button style=\"background-color: blue; color: white; display: inline-block;\" class=\"item__item item__item--update\" onclick=\"renderUpdateItemForm('" + item.itemUuid + "')\">UPDATE</button>\n        </div>";
                    ev.target.reset();
                    itemElement.innerHTML = updateItemDivHtml;
                    return [3 /*break*/, 3];
                case 2:
                    error_4 = _b.sent();
                    console.error(error_4.message);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
getAllItems();
