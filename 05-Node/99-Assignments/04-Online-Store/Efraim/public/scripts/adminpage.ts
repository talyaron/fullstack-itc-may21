const token = JSON.parse(localStorage.getItem('token'));
    const headersJSON = {
      Authorization: `Bearer ${token}`,
     };

async function renderProductsAdmin() {
    try {
        const allProducts = await axios.get("/publicUsers/getAllProducts", { headers: headersJSON })
        let html: string = ''
        await allProducts.data.products.map(product => {
            html +=
                `<div id='${product.id}'  class="shopping-list__item-wrapper">
                <img class="shopping-list__item-wrapper__item-image" src=${product.imgSrc} alt="">
                <div class="shopping-list__item-wrapper__edit" id='${product.id}edit'> - Edit the text and click update to save!</div>
                <input class="shopping-list__item-wrapper__item-name" id="${product.id}description" value="${product.description}">
                <input class="shopping-list__item-wrapper__item-year" id="${product.id}price" value="${product.price}">
                <div class='shopping-list__item-wrapper__wrapper__save' onclick='updateProduct("${product.id}")'>Update</div>
                <button class="shopping-list__item-wrapper__wrapper__delete" onclick="deleteProduct('${product.id}')">Delete</button>
                 </div>`

        })
        const renderDOMElement: HTMLElement = document.querySelector(".shopping-list")
        renderDOMElement.innerHTML = html
    } catch (e) {
        console.error(e)
    }
}
window.addEventListener("load", renderProductsAdmin)

async function updateProduct(ID: string) {
    try {
        const newProductDescription: HTMLElement = document.getElementById(`${ID}description`);
        const newProductPrice: HTMLElement = document.getElementById(`${ID}price`);
        const updatedProducts = await axios.put(`/adminUsers/updateProducts?id=${ID}`, {
            description: newProductDescription.value,
            price: parseInt(newProductPrice.value)
        }, {headers: headersJSON})
        await renderProductsAdmin()
        alert("Update Succesful!")
    } catch (e) {
        console.error(e)
    }
}
async function deleteProduct(productID: string) {
    try {
        const newCart = await axios.delete(`/adminUsers/deleteProduct/${productID}`, {headers: headersJSON})
        await renderProductsAdmin()
        alert("item deleted!")
    } catch (e) {
        console.error(e)
    }
}


async function handleSubmit(ev) {
    try {
        ev.preventDefault();
        const headersForFile = {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data'};
        const fd = new FormData();
        const imageFile = document.getElementById("file");
        const file: any = imageFile.files[0];
        fd.append('image', file, `${file.name}`);
        const description: string = ev.target.children.description.value;
        const price:string = JSON.stringify(ev.target.children.price.value);
        fd.append('description', description);
        fd.append('price', price)
        const result = await axios.post('/adminUsers/addProduct', fd, {headers: headersForFile})
        ev.target.reset();
        await renderProductsAdmin()
        alert("Product added succefully!")
    } catch (e) {
        console.error(e)
    }
}
document.getElementById("myForm").addEventListener("submit", handleSubmit)









