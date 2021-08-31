async function loadProduct() {
    try {
        const urlSearchParams = new URLSearchParams(window.location.search);
        const params = Object.fromEntries(urlSearchParams.entries());
        const productID: string = params.productID
        const product = await axios.get(`/publicUsers/productID?id=${productID}`)
        renderToViewSingleProduct(product.data)
    } catch (e) {
        console.error(e)
    }
}
window.addEventListener("load", loadProduct)

function renderToViewSingleProduct(product: any) {
    try {
        let html: string = `<div id='${product.id}'  class="shopping-list__item-wrapper">
    <img class="shopping-list__item-wrapper__item-image-large" src=${product.imgSrc} alt="">
    <h2  class="shopping-list__item-wrapper__item-name">${product.description}</h2>
    </div>`
        document.querySelector(".shopping-list").innerHTML = html
    } catch (e) {
        console.error(e)
    }
}