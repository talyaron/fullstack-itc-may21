var Product = /** @class */ (function () {
    function Product(imgSrc, description, year) {
        try {
            this.imgSrc = imgSrc;
            this.description = description;
            this.year = year;
            this.id = "id" + Math.random().toString(16).slice(2); /* YS: Why do you need 3 ids? */
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
                    ("<h3  class=\"shopping-list__item-wrapper__item-year\">" + product.year + "</h3>") +
                    ("<button class=\"shopping-list__item-wrapper__wrapper__save\" type=\"button\"  onclick=\"saveEdits('" + product.id + "', '" + product.id2 + "')\">Save Edit</button>") +
                    ("<button class=\"shopping-list__item-wrapper__wrapper__delete\" onclick=\"deleteProduct('" + product.id + "')\">Delete</button>") +
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
function commonFunction() {
    try {
        var editElem = document.querySelectorAll(".edit");
        if (!editElem) {
            throw new Error('No edit elements detected!');
        }
        for (var i = 0; i < editElem.length; i++) { //YS: It would be better to use forEach here. 
            editElem[i].innerHTML = nameUpdate[i];
            products.products[i].description = nameUpdate[i];
        }
    }
    catch (e) {
        console.error(e);
    }
}
function saveToLocalStorage() {
    try {
        localStorage.setItem('products', JSON.stringify(products.products));
        localStorage.userEdits = JSON.stringify(nameUpdate);
    }
    catch (e) {
        console.error(e);
    }
}
var deleteProduct = function (productId) {
    try {
        var shoppingListDOM = document.querySelector('.shopping-list');
        if (!shoppingListDOM) {
            throw new Error('No shopping list detected!');
        }
        var index = products.findIndexes(productId);
        if (!products) {
            throw new Error('No product list detected!');
        }
        products.products.splice(index, 1); //YS: Why do you need two different arrays? You can use the same one and filter. 
        products.renderProducts(shoppingListDOM);
        nameUpdate.splice(index, 1);
        commonFunction();
        saveToLocalStorage();
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
    products.addProduct(new Product("images/coffee.png", 'Stainless Steel Travel Mug', 2007));
    products.addProduct(new Product("images/beanie.png", 'Boundary Rib Beanie', 2010));
    products.addProduct(new Product("images/3.png", 'PUMA 2021 Clash Guernsey', 2021));
    products.addProduct(new Product("images/4.png", 'PUMA 2021 Home Guernsey', 2017));
    products.addProduct(new Product("images/5.png", '2020 Three of a Kind Hoodie', 2020));
    products.addProduct(new Product("images/6.png", 'Puma 2021 Iconic Tee', 2021));
    products.addProduct(new Product("images/7.png", 'PUMA 2021 Training Singlet', 2021));
    products.addProduct(new Product("images/8.png", 'Dustin Martin Tee', 2019));
    products.addProduct(new Product("images/9.png", '2021 PUMA Padded Vest', 2021));
    products.addProduct(new Product("images/10.png", 'Super Soft Touch Sherrin', 2010));
    products.addProduct(new Product("images/11.png", 'Premiers 2020 Wall Flag', 2020));
    products.addProduct(new Product("images/12.png", 'Dustin Martin Monatge Wall Flag', 2018));
    products.renderProducts(shoppingListDOM);
}
catch (e) {
    console.error(e);
}
function handleSubmit(ev) {
    ev.preventDefault();
    try {
        var imgUrl = ev.target.children.imgSrc.value;
        var description = ev.target.children.description.value;
        var year = ev.target.children.year.value;
        var shoppingListDOM = document.querySelector('.shopping-list');
        if (!shoppingListDOM) {
            throw new Error('No shopping list to hold items!');
        }
        products.addProduct(new Product("\"" + imgUrl + "\"", "" + description, parseInt(year))); //YS: You dont need temlate literals for description.
        products.renderProducts(shoppingListDOM);
        nameUpdate.push("" + description); //YS: You dont need temlate literals here.
        commonFunction();
        saveToLocalStorage();
        ev.target.reset();
    }
    catch (e) {
        console.error(e);
    }
}
var nameUpdate = products.products.map(function (proddes) { return proddes.description; });
/*YS: In this function you should use find to get the product that you want to edit and make the value
of the object that you find equal to the input. Instead of a nodelist, you should get the individual object.  */
function saveEdits(productId, productID2) {
    var index = products.findIndexes(productId);
    var editElem = document.querySelectorAll(".edit"); //YS: YOu need a loop here. 
    nameUpdate.length = editElem.length;
    nameUpdate[index] = editElem[index].innerHTML;
    products.products[index].description = nameUpdate[index];
    var update = document.getElementById("" + productID2);
    update.innerHTML = "Edits saved!";
    saveToLocalStorage();
}
function checkEdits() {
    try {
        var render = JSON.parse(localStorage.getItem('products'));
        if (render != null) {
            addToDom1(render);
            products.products = render;
        }
        if (localStorage.userEdits != null) {
            nameUpdate = JSON.parse(localStorage.userEdits);
            commonFunction();
        }
    }
    catch (e) {
        console.error(e);
    }
}
var findProductbySearchTerm = function (productSearch, searchTerm) {
    try {
        var userRegEx_1 = new RegExp(searchTerm, 'gmi');
        var indexArray = products.products.reduce(function (acc, productItem, index) {
            if (userRegEx_1.test(productItem.description)) {
                acc.push(index);
            }
            return acc;
        }, []);
        var searchResults = productSearch.filter(function (productItem) { return userRegEx_1.test(productItem.description); });
        for (var i = 0; i < indexArray.length; i++) { //YS: Use forEach loop. 
            searchResults[i].description = nameUpdate[indexArray[i]];
        }
        return searchResults;
    }
    catch (e) {
        console.error(e);
    }
};
var addToDom1 = function (searchResults) {
    try {
        var shoppingList_1 = document.querySelector('.shopping-list');
        if (!shoppingList_1) {
            throw new Error('No shopping list available!');
        }
        shoppingList_1.innerHTML = "";
        if (searchResults.length === 0) {
            shoppingList_1.innerHTML = 'no results to show';
            return;
        }
        searchResults.forEach(function (productItem) { return shoppingList_1.innerHTML += ("<div id='" + productItem.id + "'  class=\"shopping-list__item-wrapper\">" +
            ("<img class=\"shopping-list__item-wrapper__item-image\" src=" + productItem.imgSrc + " alt=\"\">") +
            ("<div class=\"shopping-list__item-wrapper__edit\" id='" + productItem.id2 + "'> - Edit the text and click to save for next time</div>") +
            ("<h2  class=\"shopping-list__item-wrapper__item-name edit\" id=\"" + productItem.id3 + "\" contenteditable=\"true\">" + productItem.description + "</h2>") +
            ("<h3  class=\"shopping-list__item-wrapper__item-year\">" + productItem.year + "</h3>") +
            ("<button class=\"shopping-list__item-wrapper__wrapper__save\" type=\"button\" onclick=\"saveEdits('" + productItem.id + "', '" + productItem.id2 + "')\">Save Edits</button>") +
            ("<button class=\"shopping-list__item-wrapper__wrapper__delete\" onclick=\"deleteProduct('" + productItem.id + "')\">Delete</button>") +
            " </div>"); });
    }
    catch (e) {
        console.error(e);
    }
};
var addToDom2 = function (searchResults) {
    try {
        var shoppingList_2 = document.querySelector('.shopping-list');
        if (!shoppingList_2) {
            throw new Error('No shopping list available!');
        }
        shoppingList_2.innerHTML = "";
        if (searchResults.length === 0) {
            shoppingList_2.innerHTML = 'no results to show';
            return;
        }
        searchResults.forEach(function (productItem) { return shoppingList_2.innerHTML += ("<div id='" + productItem.id + "'  class=\"shopping-list__item-wrapper\">" +
            ("<img class=\"shopping-list__item-wrapper__item-image\" src=" + productItem.imgSrc + " alt=\"\">") +
            ("<h2  class=\"shopping-list__item-wrapper__item-name edit\" id=\"" + productItem.id3 + "\" >" + productItem.description + "</h2>") +
            ("<h3  class=\"shopping-list__item-wrapper__item-year\">" + productItem.year + "</h3>")); });
    }
    catch (e) {
        console.error(e);
    }
};
var handleSubmit1 = function (ev) {
    try {
        ev.preventDefault();
        var searchTerm = ev.target.elements.search.value;
        if (!searchTerm) {
            throw new Error('No value being read for search term!');
        }
        var results = findProductbySearchTerm(products.products, searchTerm);
        addToDom2(results);
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
        if (!searchTerm) {
            throw new Error('No value being read for search term!');
        }
        var results = findProductbySearchTerm(products.products, searchTerm);
        addToDom2(results);
    }
    catch (er) {
        console.error(er);
    }
};
var filterYear = function (ev) {
    try {
        var value_1 = parseInt(ev.target.value);
        if (!value_1) {
            throw new Error('No value being read for filter!');
        }
        var indexArray = products.products.reduce(function (acc, curr, index) {
            if (curr.year === value_1) { //YS: Since there are a lot of years but not so many products you couldve use > or <
                acc.push(index);
            }
            return acc;
        }, []);
        var results = products.products.filter(function (productItem) { return productItem.year === value_1; });
        console.log(results);
        for (var i = 0; i < indexArray.length; i++) {
            results[i].description = nameUpdate[indexArray[i]];
        }
        addToDom2(results);
    }
    catch (er) {
        console.error(er);
    }
};
var resetButton = function () {
    try {
        addToDom1(products.products);
        commonFunction();
    }
    catch (er) {
        console.error(er);
    }
};
var selectList = function () {
    try {
        var array = ["2000", "2001", "2002", "2003", "2004", "2005", "2006", "2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022"]; //YS: This shouldve been added dynamically by using dates in your products. 
        var selectList_1 = document.querySelector(".wrapper__div__select-filter");
        selectList_1.id = "mySelect";
        //Create and append the options
        for (var i = 0; i < array.length; i++) {
            var option = document.createElement("option");
            option.value = array[i];
            option.text = array[i];
            selectList_1.appendChild(option);
        }
    }
    catch (er) {
        console.error(er);
    }
};
