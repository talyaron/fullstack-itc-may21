/*
problemas a resolver: 
1-ahora no me funciona el boton delete cuando ingreso como admin
2- decriptar contraseña
3-ahora no funciona edit button 
4-armar parte de carrito con stock para admin
5-en pagina de admin, ver las compras seleccionadas por el usuario

*/

const form = document.querySelector('.form').addEventListener('submit', addProduct)

interface Product {
    id: string;
    name: string;
    image: string;
    price: number;
    quantity: number;
    description: string;
}

async function getAllProducts() {
    const response = await axios.get('/product/getAllProducts')
    const productos = response.data
    renderProducts(productos)
}
;

let isAdmin 
let currentUser 


 function getCookie (){
    console.log(decodeURIComponent(document.cookie));
    
    const cookie = decodeURIComponent(document.cookie)
    const index = cookie.indexOf('=j:') + 3

    const sliceCookie = cookie.slice(index)
    const cookieFinal = JSON.parse(sliceCookie)
    isAdmin = cookieFinal.isAdmin
    currentUser = cookieFinal.id
    console.log(cookieFinal.isAdmin);

}

getCookie() 


function renderProducts(productToRender: Array<Product>) {
    const btnAdd = document.querySelector('.btnAdd')
    const root = document.querySelector('.productoContenedor')
    let html = ''
    if(isAdmin){
    btnAdd.style.display = 'block'
    productToRender.forEach(product => {
        html += `
        
            
            <div class="producto">
                <div onclick='showDescription("${product.id}")'><img class="producto__imagen" src=${product.image} alt="imagen camisa" ></div>

                <div class="producto__informacion">
                    <p class="producto__nombre" href="productView.html">Name: ${product.name}</p>
                    <p class="producto__precio" href="productView.html">Price: ${product.price}</p>
                    <p class="producto__precio" href="productView.html">Quantity: ${product.quantity}</p>
                    <button type="button" class="btn btn-danger" onclick="deleteProduct('${product.id}')">Delete</button>
                    
                    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" data-whatever="@getbootstrap" onclick="editProdId('${product.id}')">Edit</button>
                    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog" role="document">
                            <div class="modal-content">
                                 <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel">Edit product</h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                    <div class="modal-body">
                                    <form onsubmit="handleModal(event)">
                                            <div class="form-group">
                                        <label for="recipient-name" class="col-form-label">Name:</label>
                                        <input type="text" class="form-control name" id="recipient-name" name="name">
                                            </div>
                                                <div class="form-group">
                                                <label for="recipient-name" class="col-form-label">Price:</label>
                                                <input type="number" class="form-control price" id="recipient-name" name="price">
                                                    </div>
                                                        <div class="form-group">
                                                            <label for="recipient-name" class="col-form-label">Quantity:</label>
                                                            <input type="number" class="form-control quantity" id="recipient-name" name="quantity">
                                                    </div>
                                                        <div class="form-group">
                                                            <label for="message-text" class="col-form-label">Description:</label>
                                                            <textarea class="form-control description" id="message-text" name="description"></textarea>
                                                        </div>
                                                                <div class="form-group">
                                                                    <label for="recipient-name" class="col-form-label">Image:</label>
                                                                    <input type="url" class="form-control image" id="recipient-name" name="image">
                                                            </div>
                                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                            <button type="submit" class="btn btn-primary">Save</button>
                                    </form>
                                 </div>
                                    <div class="modal-footer"></div>
                      </div>
                    </div>
                  </div> 
                  
                </div>
            </div>`

        })} else{
            productToRender.forEach(product => {
            html += `
            <div class="producto">
                <div onclick='showDescription("${product.id}")'><img class="producto__imagen" src=${product.image} alt="imagen camisa" ></div>
                    <div class="producto__informacion">
                        <p class="producto__nombre" href="productView.html">Name: ${product.name}</p>
                        <p class="producto__precio" href="productView.html">Price: ${product.price}</p>
                        <p class="producto__precio" href="productView.html">Quantity: ${product.quantity}</p>                  
                    </div>
            </div>`
        })}
            
       ;
        root.innerHTML = html
    };


async function showDescription(productId){
    window.location.href = `productView.html?id=${productId}`
    console.log(productId); 
}


async function editProdId(productId) {
    const editId = await axios.put(`/product/bring/${productId}`);
    const name = document.querySelector('.name') as HTMLInputElement;
    const price = document.querySelector('.price') as HTMLInputElement
    const quantity = document.querySelector('.quantity') as HTMLInputElement
    const description = document.querySelector('.description') as HTMLInputElement
    const image = document.querySelector('.image') as HTMLInputElement

    name.value = editId.data.product.name; //YS: You could de-structure the object here :  let {name, price, quantity, description, image} = editId.data.product
    price.value = editId.data.product.price
    quantity.value = editId.data.product.quantity
    description.value = editId.data.product.description
    image.value = editId.data.product.image
}

async function handleModal(e) {
    e.preventDefault();

    const name = e.target.elements.name.value;
    const description = e.target.elements.description.value;
    const image = e.target.elements.image.value;
    const price = e.target.elements.price.value;
    const quantity = e.target.elements.quantity.value;
    const newProdData = { name, description, image, price, quantity };

    const response = await axios.post('/product/edit', newProdData);
    const productos = response.data

    window.location.reload();
    renderProducts(productos)
    
}

async function addProduct(ev) {
    try {
        ev.preventDefault();

        const name = ev.target.elements.name.value;
        const description = ev.target.elements.description.value;
        const price = ev.target.elements.price.value;
        const quantity = ev.target.elements.quantity.value;
        const image = ev.target.elements.image.value;

        const newProduct = {
            name: name,
            description: description,
            price: price,
            quantity: quantity,
            image: image,}
        const { data } = await axios.post('/product/productos', { newProduct });
        const { products } = data;
        renderProducts(products)
    } catch (e) {
        console.error(e)
    }
}

async function deleteProduct(productId: string) {
    try {
        const { data, error } = await axios.post(`/product/deleteProduct/${productId}`);
        const { productList } = data.allProducts;
        renderProducts(productList)

    } catch (error) {

    }
}



