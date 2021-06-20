var Product = /** @class */ (function () {
    function Product(imgSrc, description, price) {
        this.imgSrc = imgSrc;
        this.description = description;
        this.price = price;
        this.id = "id" + Math.random().toString(16).slice(2);
    }
    return Product;
}());
var Cart = /** @class */ (function () {
    function Cart() {
        this.cart = [];
    }
    Cart.prototype.addToCart = function (product) {
        this.cart.push(product);
        console.log(this.cart);
    };
    return Cart;
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
                ("<button  id='" + product.id + "' class=\"shopping-list__item-wrapper__add\" onclick=\"moveToCart(" + product + ")\">Add to Cart</button>") +
                " </div>");
        }).join('');
        domElement.innerHTML = html;
    };
    return Products;
}());
var moveToCart = function (product) {
    console.log(product);
};
var shoppingListDOM = document.querySelector('.shopping-list');
var products = new Products();
var cart = new Cart();
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
// function addToCart() {
//   let divs:any = document.querySelectorAll('.shopping-list__item-wrapper__add');
//   let divs1:any = document.querySelectorAll('.shopping-list__item-wrapper');
//   let cart:Array<string> = [];
//   let counter:number = parseInt(document.querySelector('.count').innerHTML);
//   for (let i = 0; i < divs.length; i++) {
//       divs[i].addEventListener('click', function() {
//        let purchase = divs1[i].children[0].outerHTML + divs1[i].children[1].outerHTML + divs1[i].children[2].outerHTML ;
//         cart.push(purchase);
//         console.log(cart);
//         console.log(JSON.stringify(cart));
//         localStorage.setItem('cart', JSON.stringify(cart));
//         counter = counter + 1;
//         document.querySelector('.count').innerHTML = counter;
//         console.log(counter)
//       });
// }};
// addToCart();
