const token = JSON.parse(localStorage.getItem('token'));
    const headers = {
      Authorization: `Bearer ${token}`,
    };
async function getAllProducts() {
  try {
    const counter: HTMLElement = document.querySelector('.nav__cart__count')
    const cart = await axios.get("/cart/getUserCart", { headers: headers })
    counter.innerText = cart.data.length
    const allProducts = await axios.get("/publicUsers/getAllProducts", { headers: headers })
    await renderProductList(allProducts.data.products)
  } catch (e) {
    console.error(e)
  }
}

window.addEventListener("load", getAllProducts)

function renderProductList(productArray: Array<any>) {
  try {
    let html: string = ''
    productArray.map(product => {
      html +=
        `<div id='${product.id}'  class="shopping-list__item-wrapper">
      <img class="shopping-list__item-wrapper__item-image" src=${product.imgSrc} alt="" onclick="viewProduct('${product.id}')">
      <h2  class="shopping-list__item-wrapper__item-name">${product.description}</h2>
      <h3  class="shopping-list__item-wrapper__item-price">$${product.price}</h3>
      <button  id='${product.id}Button' class="shopping-list__item-wrapper__add" onclick="moveToCart('${product.id}'); colorChangeButton('${product.id}')">Add to Cart</button>
      </div>`
    })
    const shoppingList = document.querySelector(".shopping-list")
    shoppingList.innerHTML = html;

  } catch (e) {
    console.error(e)
  }
}

function moveToCart(productID: string) {
  try {
    
    axios.post('/cart/addToCart', {
      productID: productID,
    }, { headers: headers })

  } catch (e) {
    console.error(e)
  }
};


function colorChangeButton(id: string) {
  try {
    const button: HTMLElement = document.getElementById(`${id}Button`);
    const counter: HTMLElement = document.querySelector('.nav__cart__count');
    let counterCount: number = parseInt(counter.innerText)
    button.style.background = 'red';
    button.style.color = 'white'
    button.innerHTML = 'selected'
    counterCount = counterCount + 1;
    counter.innerText = counterCount;
    button.disabled = true;
  } catch (e) {
    console.error(e)
  }
}

async function findProductbySearchTerm(searchTerm: string) {
  try {
    const userRegEx: RegExp = new RegExp(searchTerm, 'gmi');
    const allProducts = await axios.get("/publicUsers/getAllProducts", { headers: headers })
    const searchResults: Array<any> = allProducts.data.products.filter(productItem => userRegEx.test(productItem.description));
    return searchResults;
  } catch (e) {
    console.error(e)
  }
}

async function handleKeyUp(ev: any) {
  try {
    ev.preventDefault();
    const searchTerm: string = ev.target.value;
    const results = await findProductbySearchTerm(searchTerm);
    renderProductList(results);
  }

  catch (er) {
    console.error(er)
  }
}
document.getElementById("searching").addEventListener("keyup", handleKeyUp)

function viewProduct(productID: string) {
  try {
    window.location.href = `/productview.html?productID=${productID}`
  } catch (e) {
    console.error(e)
  }
}



