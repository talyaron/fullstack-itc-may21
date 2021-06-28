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
                    ("<div class=\"shopping-list__item-wrapper__edit\" id='" + product.id2 + "'> - Edit the text and click to save for next time</div>") +
                    ("<h2  class=\"shopping-list__item-wrapper__item-name edit\" id=\"" + product.id3 + "\" contenteditable=\"true\">" + product.description + "</h2>") +
                    ("<h3  class=\"shopping-list__item-wrapper__item-price\">" + product.price + "</h3>") +
                    ("<button class=\"shopping-list__item-wrapper__wrapper__save\" type=\"button\"  onclick=\"saveEdits('" + product.id + "', '" + product.id2 + "')\">Save Edit</button>") +
                    ("<button class=\"shopping-list__item-wrapper__wraper__delete\" onclick=\"deleteProduct('" + product.id + "')\">Delete</button>") +
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
        products.products.splice(index, 1);
        products.renderProducts(shoppingListDOM);
        nameUpdate = products.products.map(function (proddes) { return proddes.description; });
        console.log(products.products);
        sessionStorage.setItem('products', JSON.stringify(products.products));
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
    nameUpdate = products.products.map(function (proddes) { return proddes.description; });
    console.log(products.products);
    sessionStorage.setItem('products', JSON.stringify(products.products));
    ev.target.reset();
}
var nameUpdate = products.products.map(function (proddes) { return proddes.description; });
console.log(nameUpdate);
function saveEdits(productId, productID2) {
    var index = products.findIndexes(productId);
    console.log(index);
    var editElem = document.querySelectorAll(".edit");
    nameUpdate.length = editElem.length;
    nameUpdate[index] = editElem[index].innerHTML;
    console.log(nameUpdate);
    sessionStorage.userEdits = JSON.stringify(nameUpdate);
    var update = document.getElementById("" + productID2);
    update.innerHTML = "Edits saved!";
}
function checkEdits() {
    var render = JSON.parse(sessionStorage.getItem('products'));
    if (render != null) {
        addToDom1(render);
        products.products = render;
        nameUpdate = render.map(function (proddes) { return proddes.description; });
    }
    if (sessionStorage.userEdits != null) {
        var nameUpdate_1 = [JSON.parse(sessionStorage.userEdits)];
        console.log(nameUpdate_1);
        var editElem = document.querySelectorAll(".edit");
        for (var i = 0; i < editElem.length; i++) {
            editElem[i].innerHTML = nameUpdate_1[0][i];
        }
    }
}
var findProductbySearchTerm = function (productSearch, searchTerm) {
    var userRegEx = new RegExp(searchTerm, 'gmi');
    var searchResults = productSearch.filter(function (productItem) { return userRegEx.test(productItem.description); });
    return searchResults;
};
var addToDom1 = function (searchResults) {
    var shoppingList = document.querySelector('.shopping-list');
    shoppingList.innerHTML = "";
    if (searchResults.length === 0) {
        shoppingList.innerHTML = 'no results to show';
        return;
    }
    searchResults.forEach(function (productItem) { return shoppingList.innerHTML += ("<div id='" + productItem.id + "'  class=\"shopping-list__item-wrapper\">" +
        ("<img class=\"shopping-list__item-wrapper__item-image\" src=" + productItem.imgSrc + " alt=\"\">") +
        ("<div class=\"shopping-list__item-wrapper__edit\" id='" + productItem.id2 + "'> - Edit the text and click to save for next time</div>") +
        ("<h2  class=\"shopping-list__item-wrapper__item-name edit\" id=\"" + productItem.id3 + "\" contenteditable=\"true\">" + productItem.description + "</h2>") +
        ("<h3  class=\"shopping-list__item-wrapper__item-price\">" + productItem.price + "</h3>") +
        ("<button class=\"shopping-list__item-wrapper__wrapper__save\" type=\"button\" onclick=\"saveEdits('" + productItem.id + "', '" + productItem.id2 + "')\">Save Edits</button>") +
        ("<button class=\"shopping-list__item-wrapper__wrapper__delete\" onclick=\"deleteProduct('" + productItem.id + "')\">Delete</button>") +
        " </div>"); });
};
var handleSubmit1 = function (ev) {
    try {
        ev.preventDefault();
        var searchTerm = ev.target.elements.search.value;
        var results = findProductbySearchTerm(products.products, searchTerm);
        addToDom1(results);
        ev.target.reset();
    }
    catch (er) {
        console.error(er);
    }
};
var handleKeyUp = function (ev) {
    try {
        ev.preventDefault();
        var searchTerm = ev.target.value;
        var results = findProductbySearchTerm(products.products, searchTerm);
        addToDom1(results);
    }
    catch (er) {
        console.error(er);
    }
};
var filterYear = function (ev) {
    var value = parseInt(ev.target.value);
    var searchResults = products.products.filter(function (productItem) {
        return productItem.price === value;
    });
    addToDom1(searchResults);
};
var resetButton = function () {
    addToDom1(products.products);
};
// var myParent = document.querySelector('.trial');
// //Create array of options to be added
// var array = ['2000','2001','2002','2020'];
// //Create and append select list
// var selectList = document.createElement("select");
// selectList.className = "wrapper__select-filter";
// selectList.onchange(filterYear(event));
// myParent.appendChild(selectList);
// //Create and append the options
// for (var i = 0; i < array.length; i++) {
//     var option = document.createElement("option");
//     option.value = array[i];
//     option.text = array[i];
//     selectList.appendChild(option);
// }
