var User = /** @class */ (function () {
    function User(email, password, role) {
        this.email = email;
        this.password = password;
        this.role = role;
        this.userID = "id" + Math.random().toString(16).slice(2);
        this.cart = [];
    }
    return User;
}());
var Users = /** @class */ (function () {
    function Users() {
        this.users = [];
    }
    Users.prototype.addUser = function (user) {
        try {
            this.users.push(user);
        }
        catch (e) {
            console.error(e);
        }
    };
    ;
    Users.prototype.findIndexofUser = function (userID) {
        var index = this.users.findIndex(function (usr) { return usr.userID === userID; });
        return index;
    };
    Users.prototype.findUser = function (userId) {
        try {
            var user = this.users.find(function (usr) { return usr.userID === userId; });
            if (user) {
                return user;
            }
        }
        catch (e) {
            console.error(e);
        }
    };
    return Users;
}());
var users = new Users();
var Product = /** @class */ (function () {
    function Product(imgSrc, description, price) {
        try {
            this.imgSrc = imgSrc;
            this.description = description;
            this.price = price;
            this.id = "id" + Math.random().toString(16).slice(2);
            this.value = 1;
        }
        catch (e) {
            console.error(e);
        }
    }
    return Product;
}());
var Products = /** @class */ (function () {
    function Products() {
        this.products = [];
    }
    Products.prototype.addProduct = function (product) {
        try {
            this.products.push(product);
        }
        catch (e) {
            console.error(e);
        }
    };
    ;
    Products.prototype.findIndexOfProduct = function (productId) {
        var index = this.products.findIndex(function (prd) { return prd.id === productId; });
        return index;
    };
    Products.prototype.findProduct = function (productId) {
        try {
            var product = this.products.find(function (prd) { return prd.id === productId; });
            if (product) {
                return product;
            }
        }
        catch (e) {
            console.error(e);
        }
    };
    return Products;
}());
var products = new Products();
products.addProduct(new Product("images/coffee.png", 'Stainless Steel Travel Mug', 20));
products.addProduct(new Product("/images/beanie.png", 'Boundary Rib Beanie', 20));
products.addProduct(new Product("/images/3.png", 'PUMA 2021 Clash Guernsey', 30));
products.addProduct(new Product("/images/4.png", 'PUMA 2021 Home Guernsey', 25));
products.addProduct(new Product("/images/5.png", '2020 Three of a Kind Hoodie', 44));
products.addProduct(new Product("/images/6.png", 'Puma 2021 Iconic Tee', 33));
products.addProduct(new Product("/images/7.png", 'PUMA 2021 Training Singlet', 20));
products.addProduct(new Product("/images/8.png", 'Dustin Martin Tee', 15));
products.addProduct(new Product("/images/9.png", '2021 PUMA Padded Vest', 20));
products.addProduct(new Product("/images/10.png", 'Super Soft Touch Sherrin', 40));
products.addProduct(new Product("/images/11.png", 'Premiers 2020 Wall Flag', 30));
products.addProduct(new Product("/images/12.png", 'Dustin Martin Monatge Wall Flag', 20));
module.exports = { User: User, Users: Users, Product: Product, Products: Products, products: products, users: users };
