async function addProductCart(id, name, description, image, price, store) {

    try {

        const btnSeeCart = document.querySelector('.btn-sent-cart') as HTMLButtonElement;

        btnSeeCart.disabled = false

        const inputCount = document.getElementById(`${id}`) as HTMLInputElement;
        const number = inputCount.value

        const addCart = document.querySelector('.addCart') as HTMLElement

        let total = +number * +price

        const date = new Date();
        const dateString = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear()

        const addCartForNow = {
            id: id,
            date: dateString,
            name: name,
            description: description,
            image: image,
            price: +price,
            number: +number,
            total: +total,
            store: store,
        }

        const seeCart = await axios.get(`/user/seeCartStore/${store}`) //YS: You should have these requests in a separate function/separate file called api
        const { data } = seeCart

        let count = data.cart.length


        const response: any = await addCartPromise(addCartForNow) //YS: You should have these requests in a separate function/separate file called api
        const { ok } = response

        if (ok) {
            count++;
            addCart.innerText = `${count}`
        } else {
            btnSeeCart.disabled = true
        }

    } catch (e) {
        alert(e)
    }

}

function addCartPromise(addCartForNow) {
    return new Promise((resolve, reject) => {
        fetch(`/user/addCartForNow/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(addCartForNow)
        }).then(function (res) {
            if (res.status === 200 && res.ok) {
                return res.json().then(user => { resolve(user) });
            } else {
                return res.json().then(user => { swal('Oops!', `${user.error}`, `error`) })
            }
        })
    })
}

