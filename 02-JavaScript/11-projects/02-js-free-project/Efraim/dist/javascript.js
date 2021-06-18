var Cart = /** @class */ (function () {
    function Cart() {
        this.products = [];
    }
    return Cart;
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
var Product = /** @class */ (function () {
    function Product(imgSrc, description, price) {
        this.imgSrc = imgSrc;
        this.descrioption = description;
        this.price = price;
        this.id = "id" + Math.random().toString(16).slice(2);
    }
    return Product;
}());
var Products = /** @class */ (function () {
    function Products() {
        this.products = [];
    }
    Products.prototype.addProduct = function (product) {
        this.products.push(product);
    };
    ;
    Products.prototype.renderProducts = function (domElement) {
        var html = this.products.map(function (product) {
            return ("<div class=\"shopping-list__item-wrapper\">" +
                ("<img class=\"shopping-list__item-wrapper__item-image\" src=" + product.imgSrc + " alt=\"\">") +
                ("<h2 class=\"shopping-list__item-wrapper__item-name\">" + product.descrioption + "</h2>") +
                ("<h3 class=\"shopping-list__item-wrapper__item-price\">$" + product.price + "</h3>") +
                "<button class=\"shopping-list__item-wrapper__add\">Add to Cart</button>" +
                " </div>");
        }).join('');
        domElement.innerHTML = html;
    };
    Products.prototype.addToCart = function (cart, productId) {
        //find the product and copy to the purchse list\
        // push to the cart
    };
    return Products;
}());
var shoppingListDOM = document.querySelector('.shopping-list');
var products = new Products();
products.addProduct(new Product("https://cdn11.bigcommerce.com/s-ivqh5iw8nz/images/stencil/640w/products/1390/2659/425520f6ae9f161c0678d9ba5afa2dda224db51d__32420.1620949986.jpg?c=2", 'Stainless Steel Travel Mug', 12));
console.log(products);
products.renderProducts(shoppingListDOM);
