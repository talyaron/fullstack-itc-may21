class Product {
    imgSrc: string;
    description: string;
    year: number;
    id: string;
    id2: string;
    id3: string

    constructor(imgSrc: string, description: string, year: number) {
        try {
            this.imgSrc = imgSrc;
            this.description = description;
            this.year = year;
            this.id = "id" + Math.random().toString(16).slice(2);
            this.id2 = "id" + Math.random().toString(16).slice(2);
            this.id3 = "id" + Math.random().toString(16).slice(2);
        } catch (e) {
            console.error(e);
        }
    }
}

class Products {
    products: Array<Product> = [];
    constructor() {

    }

    addProduct(product: Product) {
        try {
            this.products.push(product);
        } catch (e) {
            console.error(e)
        }
    };

    renderProducts(domElement: Element) {
        try {
            let html: string = this.products.map(product => {
                return (
                    `<div id='${product.id}'  class="shopping-list__item-wrapper">` +
                    `<img class="shopping-list__item-wrapper__item-image" src=${product.imgSrc} alt="">` +
                    `<div class="shopping-list__item-wrapper__edit" id='${product.id2}'> - Edit the text and click to save for next time</div>` +
                    `<h2  class="shopping-list__item-wrapper__item-name edit" id="${product.id3}" contenteditable="true">${product.description}</h2>` +
                    `<h3  class="shopping-list__item-wrapper__item-year">${product.year}</h3>` +

                    `<button class="shopping-list__item-wrapper__wrapper__save" type="button"  onclick="saveEdits('${product.id}', '${product.id2}')">Save Edit</button>` +
                    `<button class="shopping-list__item-wrapper__wrapper__delete" onclick="deleteProduct('${product.id}')">Delete</button>` +
                    ` </div>`
                )
            }).join('')

            domElement.innerHTML = html;
        } catch (e) {
            console.error(e)
        }
    }
    findIndexes(productId: string) {
        const index = this.products.findIndex(prd => prd.id === productId)
        return index;
    }
    findProduct(productId: string): Product {
        try {
            const product: Product = this.products.find(prd => prd.id === productId);
            if (product) {
                return product
            }
        } catch (e) {
            console.error(e)
        }
    }

}
const products: Products = new Products();



function commonFunction() {
    try {
        let editElem: NodeListOf<Element> = document.querySelectorAll(`.edit`);
        if (!editElem) {
            throw new Error('No edit elements detected!')
        }
        for (let i = 0; i < editElem.length; i++) {
            editElem[i].innerHTML = nameUpdate[i]
        }
    } catch (e) {
        console.error(e);
    }
}

const deleteProduct = (productId: string) => {
    try {
        const shoppingListDOM: Element = document.querySelector('.shopping-list');
        if (!shoppingListDOM) {
            throw new Error('No shopping list detected!')
        }
        const index = products.findIndexes(productId)
        if (!products) {
            throw new Error('No product list detected!')
        }
        products.products.splice(index, 1);
        products.renderProducts(shoppingListDOM);
        nameUpdate.splice(index, 1);
        commonFunction()
        localStorage.setItem('products', JSON.stringify(products.products))
    } catch (e) {
        console.error(e)
    }
};



try {
    const shoppingListDOM = document.querySelector('.shopping-list');
    if (!shoppingListDOM) {
        throw new Error('No shopping list to hold items!')
    }
    products.addProduct(new Product("images/coffee.png", 'Stainless Steel Travel Mug', 2007))
    products.addProduct(new Product("images/beanie.png", 'Boundary Rib Beanie', 2010))
    products.addProduct(new Product("images/3.png", 'PUMA 2021 Clash Guernsey', 2021))
    products.addProduct(new Product("images/4.png", 'PUMA 2021 Home Guernsey', 2017))
    products.addProduct(new Product("images/5.png", '2020 Three of a Kind Hoodie', 2020))
    products.addProduct(new Product("images/6.png", 'Puma 2021 Iconic Tee', 2021))
    products.addProduct(new Product("images/7.png", 'PUMA 2021 Training Singlet', 2021))
    products.addProduct(new Product("images/8.png", 'Dustin Martin Tee', 2019))
    products.addProduct(new Product("images/9.png", '2021 PUMA Padded Vest', 2021))
    products.addProduct(new Product("images/10.png", 'Super Soft Touch Sherrin', 2010))
    products.addProduct(new Product("images/11.png", 'Premiers 2020 Wall Flag', 2020))
    products.addProduct(new Product("images/12.png", 'Dustin Martin Monatge Wall Flag', 2018))
    products.renderProducts(shoppingListDOM);

} catch (e) {
    console.error(e)
}
function handleSubmit(ev): any {
    ev.preventDefault();
    try {
        let imgUrl: string = ev.target.children.imgSrc.value;
        let description: string = ev.target.children.description.value;
        let year: number = ev.target.children.year.value;
        const shoppingListDOM = document.querySelector('.shopping-list');
        if (!shoppingListDOM) {
            throw new Error('No shopping list to hold items!')
        }
        products.addProduct(new Product(`"${imgUrl}"`, `${description}`, parseInt(year)));
        products.renderProducts(shoppingListDOM);
        nameUpdate.push(`${description}`)
        localStorage.userEdits = JSON.stringify(nameUpdate);
        commonFunction()
        localStorage.setItem('products', JSON.stringify(products.products))
        console.log(products.products)
        ev.target.reset();
    } catch (e) {
        console.error(e)
    }
}

let nameUpdate: Array<any> = products.products.map(proddes => proddes.description)
function saveEdits(productId, productID2) {
        const index = products.findIndexes(productId);
        let editElem: NodeListOf<Element> = document.querySelectorAll(`.edit`);
        nameUpdate.length = editElem.length
        nameUpdate[index] = editElem[index].innerHTML;
        products.products[index].description = nameUpdate[index];
        localStorage.userEdits = JSON.stringify(nameUpdate);
        let update = document.getElementById(`${productID2}`);
        update.innerHTML = "Edits saved!"
  
}


function checkEdits() {
    try {
        const render:any = JSON.parse(localStorage.getItem('products'))
        if (render != null) {
            addToDom1(render)
            products.products = render
        }
        if (localStorage.userEdits != null) {
            nameUpdate = JSON.parse(localStorage.userEdits)
            commonFunction()
        }
    } catch (e) {
        console.error(e)
    }
}




const findProductbySearchTerm = (productSearch: Array<any>, searchTerm: string) => {
    try {
        const userRegEx: RegExp = new RegExp(searchTerm, 'gmi');
        let indexArray: Array<any> = products.products.reduce(function(acc, productItem, index) {
            if (userRegEx.test(productItem.description)) {
              acc.push(index);
            }
            return acc;
          }, []);
        const searchResults: Array<any> = productSearch.filter(productItem => userRegEx.test(productItem.description));
        for (let i = 0; i < indexArray.length; i++) {
            searchResults[i].description = nameUpdate[indexArray[i]]
        }
        return searchResults;
    } catch (e) {
        console.error(e)
    }
}

const addToDom1 = (searchResults: Array<any>) => {
    try {
        const shoppingList: HTMLElement = document.querySelector('.shopping-list');
        if (!shoppingList) {
            throw new Error('No shopping list available!')
        }
        shoppingList.innerHTML = ``;
        if (searchResults.length === 0) { shoppingList.innerHTML = 'no results to show'; return; }
        searchResults.forEach((productItem) => shoppingList.innerHTML += (
            `<div id='${productItem.id}'  class="shopping-list__item-wrapper">` +
            `<img class="shopping-list__item-wrapper__item-image" src=${productItem.imgSrc} alt="">` +
            `<div class="shopping-list__item-wrapper__edit" id='${productItem.id2}'> - Edit the text and click to save for next time</div>` +
            `<h2  class="shopping-list__item-wrapper__item-name edit" id="${productItem.id3}" contenteditable="true">${productItem.description}</h2>` +
            `<h3  class="shopping-list__item-wrapper__item-year">${productItem.year}</h3>` +
            `<button class="shopping-list__item-wrapper__wrapper__save" type="button" onclick="saveEdits('${productItem.id}', '${productItem.id2}')">Save Edits</button>` +
            `<button class="shopping-list__item-wrapper__wrapper__delete" onclick="deleteProduct('${productItem.id}')">Delete</button>` +
            ` </div>`
        )
        )
    } catch (e) {
        console.error(e)
    }
}
const addToDom2 = (searchResults: Array<any>) => {
    try {
        const shoppingList: HTMLElement = document.querySelector('.shopping-list');
        if (!shoppingList) {
            throw new Error('No shopping list available!')
        }
        shoppingList.innerHTML = ``;
        if (searchResults.length === 0) { shoppingList.innerHTML = 'no results to show'; return; }
        searchResults.forEach((productItem) => shoppingList.innerHTML += (
            `<div id='${productItem.id}'  class="shopping-list__item-wrapper">` +
            `<img class="shopping-list__item-wrapper__item-image" src=${productItem.imgSrc} alt="">`  +
            `<h2  class="shopping-list__item-wrapper__item-name edit" id="${productItem.id3}" >${productItem.description}</h2>` +
            `<h3  class="shopping-list__item-wrapper__item-year">${productItem.year}</h3>` 
        )
        )
    } catch (e) {
        console.error(e)
    }
}



const handleSubmit1 = (ev: any) => {
    try {
        ev.preventDefault();
        const searchTerm: string = ev.target.elements.search.value;
        if (!searchTerm) {
            throw new Error('No value being read for search term!')
        }
        const results = findProductbySearchTerm(products.products, searchTerm);
        addToDom2(results);
        ev.target.reset();
    } catch (er) {
        console.error(er)
    }
}

const handleKeyUp = (ev: any) => {
    try {
        ev.preventDefault();
        const searchTerm: string = ev.target.value;
        if (!searchTerm) {
            throw new Error('No value being read for search term!')
        }
        const results = findProductbySearchTerm(products.products, searchTerm);
        addToDom2(results);

    } catch (er) {
        console.error(er)
    }
}
const filterYear = (ev: any): any => {
    try {
        const value = parseInt(ev.target.value);
        if (!value) {
            throw new Error('No value being read for filter!')
        }
        let indexArray:Array<number> = products.products.reduce(function(acc, curr, index) {
            if (curr.year === value) {
              acc.push(index);
            }
            return acc;
          }, []);
        let results:Array<any> = products.products.filter(productItem => productItem.year === value);
        console.log(results)
        for (let i = 0; i < indexArray.length; i++) {
            results[i].description = nameUpdate[indexArray[i]]
        }
        addToDom2(results);

       
    } catch (er) {
        console.error(er)
    }
};
const resetButton = () => {
    try {
        addToDom1(products.products);
        commonFunction()
    } catch (er) {
        console.error(er)
    }
}

const selectList = () => {
    try {
        let array = ["2000","2001","2002","2003","2004","2005","2006","2007","2008","2009","2010","2011","2012","2013","2014","2015","2016","2017","2018","2019","2020","2021","2022"];
        let selectList = document.querySelector(".wrapper__div__select-filter");
        selectList.id = "mySelect";
        
        //Create and append the options
        for (let i = 0; i < array.length; i++) {
            let option = document.createElement("option");
            option.value = array[i];
            option.text = array[i];
            selectList.appendChild(option);
        }
    } catch (er) {
        console.error(er)
    }
}











