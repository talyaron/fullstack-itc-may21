// function addProductPromise(newProduct, store) {
//     return new Promise((resolve, reject) => {
//         fetch(`/product/addNewProduct/${store}`, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(newProduct)
//         }).then(function (res) {
//             if (res.status === 200 && res.ok) {
//                 return res.json().then(product => { resolve(product) });
//             } else {
//                 return res.json().then(product => { swal('Oops!', `${product.error}`, `error`) })
//             }
//         })
//     })
// }

function editProductPromise(editProduct, store) {
    return new Promise((resolve, reject) => {
        fetch(`product/editProduct/${idProduct}/${store}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(editProduct)
        }).then(function (res) {
            if (res.status === 200 && res.ok) {
                return res.json().then(product => { resolve(product) });
            } else {
                return res.json().then(product => { swal('Oops!', `${product.error}`, `error`) })
            }
        })
    })
}


// async function addProduct(addNewProduct, store) {
//     try {
//         const response = await axios.post(`/product/addNewProduct/${store}`, addNewProduct)
//         return response.data
//     } catch (e) {
//         console.log(e.response.data.error)
//     }
// }

async function addProduct(addNewProduct, store) {
    try {
        const response = await  fetch(`/product/addNewProduct/${store}`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                         },
                       body: JSON.stringify(addNewProduct)
                    })
        const data = response.json();
        return data  //ver que me trae
    } catch (e) {
        console.log(e.response.data.error)
    }
}