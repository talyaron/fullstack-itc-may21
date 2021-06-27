var Product = /** @class */ (function () {
    function Product(imgSrc, description, price) {
        try {
            this.imgSrc = imgSrc;
            this.description = description;
            this.price = price;
            this.id = "id" + Math.random().toString(16).slice(2);
            this.id2 = "id" + Math.random().toString(16).slice(2);
            this.id3 = "id" + Math.random().toString(16).slice(2);
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
    Products.prototype.renderProducts = function (domElement) {
        try {
            var html = this.products.map(function (product) {
                return ("<div id='" + product.id + "'  class=\"shopping-list__item-wrapper\">" +
                    ("<img class=\"shopping-list__item-wrapper__item-image\" src=" + product.imgSrc + " alt=\"\">") +
                    ("<div id='" + product.id2 + "'> - Edit the text and click to save for next time</div>") +
                    ("<h2  class=\"shopping-list__item-wrapper__item-name edit\" id=\"" + product.id3 + "\" contenteditable=\"true\">" + product.description + "</h2>") +
                    ("<h3  class=\"shopping-list__item-wrapper__item-price\">" + product.price + "</h3>") +
                    ("<input type=\"button\"  value=\"save my edits\" onclick=\"saveEdits('" + product.id + "', '" + product.id3 + "', '" + product.id2 + "')\"/>") +
                    ("<button class=\"shopping-list__item-wrapper__add\" onclick=\"deleteProduct('" + product.id + "')\">Delete</button>") +
                    " </div>");
            }).join('');
            domElement.innerHTML = html;
        }
        catch (e) {
            console.error(e);
        }
    };
    Products.prototype.findIndexes = function (productId) {
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
var deleteProduct = function (productId) {
    try {
        var shoppingListDOM = document.querySelector('.shopping-list');
        var index = products.findIndexes(productId);
        console.log(index);
        products.products.splice(index, 1);
        products.renderProducts(shoppingListDOM);
    }
    catch (e) {
        console.error(e);
    }
};
try {
    var shoppingListDOM = document.querySelector('.shopping-list');
    if (!shoppingListDOM) {
        throw new Error('No shopping list to hold items!');
    }
    products.addProduct(new Product("coffee.png", 'Stainless Steel Travel Mug', 2007));
    products.addProduct(new Product("beanie.png", 'Boundary Rib Beanie', 2010));
    products.addProduct(new Product("3.png", 'PUMA 2021 Clash Guernsey', 2021));
    products.addProduct(new Product("4.png", 'PUMA 2021 Home Guernsey', 2017));
    products.addProduct(new Product("5.png", '2020 Three of a Kind Hoodie', 2020));
    products.addProduct(new Product("6.png", 'Puma 2021 Iconic Tee', 2021));
    products.addProduct(new Product("7.png", 'PUMA 2021 Training Singlet', 2021));
    products.addProduct(new Product("8.png", 'Dustin Martin Tee', 2019));
    products.addProduct(new Product("9.png", '2021 PUMA Padded Vest', 2021));
    products.addProduct(new Product("10.png", 'Super Soft Touch Sherrin', 2010));
    products.addProduct(new Product("11.png", 'Premiers 2020 Wall Flag', 2020));
    products.addProduct(new Product("12.png", 'Dustin Martin Monatge Wall Flag', 2018));
    products.renderProducts(shoppingListDOM);
}
catch (e) {
    console.error(e);
}
function handleSubmit(ev) {
    ev.preventDefault();
    var imgUrl = ev.target.children.imgSrc.value;
    var description = ev.target.children.description.value;
    var year = ev.target.children.year.value;
    var shoppingListDOM = document.querySelector('.shopping-list');
    products.addProduct(new Product("\"" + imgUrl + "\"", "" + description, "" + year));
    products.renderProducts(shoppingListDOM);
    ev.target.reset();
}
function saveEdits(productId, productID3, productID2) {
    var index = products.findIndexes(productId);
    console.log(index);
    var update = document.getElementById("" + productID2);
    var editElem = document.getElementById("" + productID3);
    localStorage.userEdits = editElem.innerHTML;
    update.innerHTML = "Edits saved!";
}
function checkEdits() {
    //find out if the user has previously saved edits
    if (localStorage.userEdits != null)
        document.querySelector(".edit").innerHTML = localStorage.userEdits;
}
// function saveEdits(productID3, productID2) {
//     let update = document.getElementById(`${productID2}`);
//     let editElem = document.getElementById(`${productID3}`);
//     localStorage.userEdits = editElem.innerHTML;
//     update.innerHTML = "Edits saved!"
//     }
