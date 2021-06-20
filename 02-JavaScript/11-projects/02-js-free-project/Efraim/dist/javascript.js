var Product = /** @class */ (function () {
    function Product(imgSrc, description, price) {
        this.imgSrc = imgSrc;
        this.description = description;
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
            return ("<div id='" + product.id + "'  class=\"shopping-list__item-wrapper\">" +
                ("<img class=\"shopping-list__item-wrapper__item-image\" src=" + product.imgSrc + " alt=\"\">") +
                ("<h2  class=\"shopping-list__item-wrapper__item-name\">" + product.description + "</h2>") +
                ("<h3  class=\"shopping-list__item-wrapper__item-price\">$" + product.price + "</h3>") +
                ("<button  id='" + product.id + "' class=\"shopping-list__item-wrapper__add\">Add to Cart</button>") +
                " </div>");
        }).join('');
        domElement.innerHTML = html;
    };
    return Products;
}());
//addToCart(cart:Cart, productId:string){
//find the product and copy to the purchse list\
//console.log(cart);
//console.log(productId);
// push to the cart
var shoppingListDOM = document.querySelector('.shopping-list');
var products = new Products();
products.addProduct(new Product("coffee.png", 'Stainless Steel Travel Mug', 12.99));
products.addProduct(new Product("beanie.png", 'Boundary Rib Beanie', 15.95));
products.addProduct(new Product("3.png", 'PUMA 2021 Clash Guernsey', 39.95));
products.addProduct(new Product("4.png", 'PUMA 2021 Home Guernsey', 39.95));
products.addProduct(new Product("5.png", '2020 Three of a Kind Hoodie', 49.99));
products.addProduct(new Product("6.png", 'Puma 2021 Iconic Tee', 29.95));
products.addProduct(new Product("7.png", 'PUMA 2021 Training Singlet', 79.95));
products.addProduct(new Product("8.png", 'Dustin Martin Tee', 39.95));
products.addProduct(new Product("9.png", '2021 PUMA Padded Vest', 79.95));
products.addProduct(new Product("10.png", 'Super Soft Touch Sherrin', 15.99));
products.addProduct(new Product("11.png", 'Premiers 2020 Wall Flag', 27.95));
products.addProduct(new Product("12.png", 'Dustin Martin Monatge Wall Flag', 39.95));
products.renderProducts(shoppingListDOM);
function addToCart() {
    var divs = document.querySelectorAll('.shopping-list__item-wrapper__add');
    var divs1 = document.querySelectorAll('.shopping-list__item-wrapper');
    var cart = [];
    var counter = parseInt(document.querySelector('.count').innerHTML);
    var _loop_1 = function (i) {
        divs[i].addEventListener('click', function () {
            var purchase = divs1[i];
            cart.push(purchase);
            console.log(cart);
            console.log(JSON.stringify(cart));
            localStorage.setItem('cart', JSON.stringify(cart));
            counter = counter + 1;
            document.querySelector('.count').innerHTML = counter;
            console.log(counter);
        });
    };
    for (var i = 0; i < divs.length; i++) {
        _loop_1(i);
    }
}
;
addToCart();
