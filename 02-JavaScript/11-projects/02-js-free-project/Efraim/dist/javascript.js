var Purchase = /** @class */ (function () {
    function Purchase(imageURL, itemName, itemPrice) {
        this.imageURL = imageURL;
        this.itemName = itemName;
        this.itemPrice = itemPrice;
        this.addPurchases();
    }
    Purchase.prototype.addPurchases = function () {
        var buttonClick = [];
        buttonClick = document.querySelectorAll('.shopping-list__item-wrapper__add');
        buttonClick.click(function (e) {
            e.preventDefault();
            console.log('heeeee');
            var allButtons = document.querySelectorAll('div[class^=button]');
            console.log("Found", allButtons.length, "div which class starts with “button”.");
            for (var i = 0; i < allButtons.length; i++) {
                allButtons[i].addEventListener('click', function () {
                    console.clear();
                    console.log("You clicked:", this.innerHTML);
                });
            }
        });
    };
    return Purchase;
}());
var PurchaseList = /** @class */ (function () {
    function PurchaseList() {
        this.purchases = [];
    }
    PurchaseList.prototype.add = function (purchases) {
        this.purchases.push(purchases);
    };
    return PurchaseList;
}());
