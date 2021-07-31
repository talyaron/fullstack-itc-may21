interface Drink {
    name: string
    image: string
}

async function getDrink():Promise<void> {
    fetch('/getDrinks')
    .then(res => res.json())
    .then(drinksList => {
        console.log(drinksList);
        renderDrinks(drinksList)
    })
}



function renderDrinks(drinksList) {
    let html = ''
    drinksList.forEach(drink=> {
        html += `<p>${drink.name}</p>`
    })
    document.querySelector('.rootDrink')
}