//Callback hell (or promise hell)
function getWithPromise() {
    fetch('/getBeverages')
        .then(r => r.json())
        .then(beverages => {
            renderBeverages(beverages);
        })
}

function renderBeverages(data) {
    let html = '';
    data.forEach(beverage => {
        html += `
        <div>
        <p>${beverage.name}</p>
        <img src="${beverage.src}" alt="">
        </div>`
    })

    document.getElementById('root').innerHTML = html;
}

//Calling the function
getWithPromise();

//////////////////////////////////////////////////////////
//With ASYNC - AWAIT:
async function getWithAsync() {
    const r = await fetch('/getBeverages');
    const bebidas = await r.json();
    renderBeverages1(bebidas);
}

//Calling the function
getWithAsync();

function renderBeverages1(data) {
    let html = '';
    data.forEach(beverage => {
        html += `
        <div>
        <p>${beverage.name}</p>
        <img src="${beverage.src}" alt="">
        </div>`
    })

    document.getElementById('root1').innerHTML = html;
}

//////////////////////////////////////////////////////////
/* Doing the same but creating a new Promise: */
//Callback hell (or promise hell)
async function getInfo() {
    const creatingAPromise = await getWithNewPromise();
    console.log(creatingAPromise);
};

function getWithNewPromise() {
    return new Promise((resolve, reject) => {
        fetch('/getBeverages')
            .then(r => r.json())
            .then(beverages => {
                resolve(beverages)
            })
            .catch(error => {
                reject(error)
            })
    });
};

getInfo();