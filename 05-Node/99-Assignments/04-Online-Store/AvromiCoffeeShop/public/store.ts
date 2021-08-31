async function getAllProducts() { //YS: Nice
    try {
        const res = await axios.get('/products/')
        const allProducts = res.data
        renderProducts(allProducts);
    } catch (error) {
        console.log(error);
    }
}
getAllProducts()


async function addProduct(name, description, price, imgSrc) {
    try {
        const res = await axios.post('/products/addProduct', { name, description, price, imgSrc })
        const allProducts = res.data
        renderProducts(allProducts);
    } catch (error) {
        console.log(error);
    }
}

async function editProducts(id, name, description, price, imgSrc) {
    try {
        const res = await axios.put(`/products/editProduct?id=${id}`, { name, description, price, imgSrc });
        const allProducts = res.data;
        renderProducts(allProducts);
    } catch (error) {
        console.log(error);
    }
}

async function deleteProduct(id) {
    try {
        const res = await axios.delete(`/products/delete?id=${id}`)
        const allProducts = res.data
        renderProducts(allProducts);
    } catch (error) {
        console.log(error);
    }
}


function renderProducts(data) {
    const productsDiv = document.querySelector("#divcont")
    let html = "";
    data.forEach((product) => {
        html += ` <div class='products'>  <div class="product-card">
        <div class="product-image">
          <img src="${product.imgSrc}">
        </div>
        <div class="product-info">
          <h5>${product.name}</h5>
        <p>${product.description}</p>
        <p>${product.price}</p>
       
    
        <button onclick="handleDelete('${product.id}')">Delete</button>
        <button onclick="handleEdit('${product.id}','${product.name}','${product.description}','${product.price}','${product.imgSrc}')">Edit</button>
        </div>
        </div>`
    })
    productsDiv.innerHTML = html

}


const edit = document.querySelector(".formDiv");
edit.style.display = "none";
function handleEdit(id, name, description, price, imgSrc): any {

    // swal("Write something here:", {
    //     content: "input",
    //   })
    //   .then((value) => {
    //     swal(`You typed: ${value}`);
    //   });

    let html = '';

    html += `
    <form id="${id}" onsubmit="handleEditSubmit(event)">
    <label for="name">Name</label>
    <input type="text" id="nameInput" name="name" value="${name}">

    <label for="description">Description</label>
    <input type="text" id="descriptionInput" name="description" value="${description}">

    <label for="price">Price</label>
    <input type="text" id="priceInput" name="price" value="${price}">

    <label for="imgSrc">Image Source</label>
    <input type="text" id="imgSrcInput" name="imgSrc" value="${imgSrc}">

    <input type="submit" value="Submit">
    <input onclick="closeEditWindow()" type="button" value="Cancel" id="cancel"> 

</form>`

    edit.innerHTML = html;
    edit.style.display = "block";
}

function handleEditSubmit(ev) {
    ev.preventDefault();
    const id = ev.target.id;
    const newName = ev.target.elements.name.value;
    const description = ev.target.elements.description.value
    const price = ev.target.elements.price.value;
    const imgSrc = ev.target.elements.imgSrc.value;
    editProducts(id, newName, description, price, imgSrc);


    edit.style.display = "none";
}


function handleSubmit(ev) {
    ev.preventDefault();
    const name = ev.target.elements.name.value;
    const description = ev.target.elements.description.value
    const price = ev.target.elements.price.value;
    const imgSrc = ev.target.elements.imgSrc.value;
    addProduct(name, description, price, imgSrc);


    add.style.display = "none";
}



const add = document.querySelector(".addProductsDiv");
add.style.display = "none"
const addButton = document.querySelector('#addButton');
addButton.addEventListener('click', () => {

    let html = '';

    html += `
    <form onsubmit="handleSubmit(event)">
    <label for="name">Name</label>
    <input type="text" id="nameInput" name="name" placeholder="Product Name...">

    <label for="description">Description</label>
    <input type="text" id="descriptionInput" name="description" placeholder="Product Description...">

    <label for="price">Price</label>
    <input type="text" id="priceInput" name="price" placeholder="Product Price ($0.99)">

    <label for="imgSrc">Image Source</label>
    <input type="text" id="imgSrcInput" name="imgSrc" placeholder="Image Source (http://image.png)">

    <input type="submit" value="Submit">
    <input onclick="closeEditWindow()" type="button" value="Cancel" id="cancel"> 

</form>`

   add.innerHTML = html;

    add.style.display = "block"
})


function closeEditWindow(event) {

    edit.style.display = "none";
    add.style.display = "none"
}



function handleDelete(id): any {
    deleteProduct(id);
}