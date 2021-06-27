class Product {
    imgSrc: string;
    description: string;
    price: number;
    id: string;
    id2: string;
    id3:string

    constructor(imgSrc: string, description: string, price: number) {
        try {
            this.imgSrc = imgSrc;
            this.description = description;
            this.price = price;
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
                    `<div id='${product.id2}'> - Edit the text and click to save for next time</div>` +
                    `<h2  class="shopping-list__item-wrapper__item-name edit" id="${product.id3}" contenteditable="true">${product.description}</h2>` +
                    `<h3  class="shopping-list__item-wrapper__item-price">${product.price}</h3>` +
                    `<input type="button"  value="save my edits" onclick="saveEdits('${product.id}', '${product.id3}', '${product.id2}')"/>` +
                    `<button class="shopping-list__item-wrapper__add" onclick="deleteProduct('${product.id}')">Delete</button>` +
                    ` </div>`
                )
            }).join('')

            domElement.innerHTML = html;
        } catch (e) {
            console.error(e)
        }
    }
    findIndexes(productId: string){
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


const deleteProduct = (productId: string) => {
    try {
        const shoppingListDOM = document.querySelector('.shopping-list');
        const index = products.findIndexes(productId)
        console.log(index)
        products.products.splice(index, 1);
        products.renderProducts(shoppingListDOM);
    } catch (e) {
        console.error(e)
    }
};



try {
    const shoppingListDOM = document.querySelector('.shopping-list');
    if (!shoppingListDOM) {
        throw new Error('No shopping list to hold items!')
    }
    products.addProduct(new Product("coffee.png", 'Stainless Steel Travel Mug', 2007))
    products.addProduct(new Product("beanie.png", 'Boundary Rib Beanie', 2010))
    products.addProduct(new Product("3.png", 'PUMA 2021 Clash Guernsey', 2021))
    products.addProduct(new Product("4.png", 'PUMA 2021 Home Guernsey', 2017))
    products.addProduct(new Product("5.png", '2020 Three of a Kind Hoodie', 2020))
    products.addProduct(new Product("6.png", 'Puma 2021 Iconic Tee', 2021))
    products.addProduct(new Product("7.png", 'PUMA 2021 Training Singlet', 2021))
    products.addProduct(new Product("8.png", 'Dustin Martin Tee', 2019))
    products.addProduct(new Product("9.png", '2021 PUMA Padded Vest', 2021))
    products.addProduct(new Product("10.png", 'Super Soft Touch Sherrin', 2010))
    products.addProduct(new Product("11.png", 'Premiers 2020 Wall Flag', 2020))
    products.addProduct(new Product("12.png", 'Dustin Martin Monatge Wall Flag', 2018))
    products.renderProducts(shoppingListDOM);

} catch (e) {
    console.error(e)
}
function handleSubmit(ev):any {
    ev.preventDefault();
    let imgUrl:string = ev.target.children.imgSrc.value;
    let description:string = ev.target.children.description.value;
    let year:number = ev.target.children.year.value;
    
    const shoppingListDOM = document.querySelector('.shopping-list');
    products.addProduct(new Product(`"${imgUrl}"`, `${description}`, `${year}`));
    products.renderProducts(shoppingListDOM);
    ev.target.reset();
}

function saveEdits(productId, productID3, productID2) {
    const index = products.findIndexes(productId);
    console.log(index);
    let update = document.getElementById(`${productID2}`);
    let editElem = document.getElementById(`${productID3}`);
    
    localStorage.userEdits = editElem.innerHTML;
    update.innerHTML = "Edits saved!"
    
    }


    function checkEdits() {

        //find out if the user has previously saved edits
        if(localStorage.userEdits!=null)
        document.querySelector(".edit").innerHTML = localStorage.userEdits;
        }


        // function saveEdits(productID3, productID2) {
        //     let update = document.getElementById(`${productID2}`);
        //     let editElem = document.getElementById(`${productID3}`);
        //     localStorage.userEdits = editElem.innerHTML;
        //     update.innerHTML = "Edits saved!"
            
        //     }