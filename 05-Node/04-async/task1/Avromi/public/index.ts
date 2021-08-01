
async function getData() {
<<<<<<< HEAD

    const r = await fetch('/');
=======
    console.log('start get data');
    const r = await fetch('/getCocktails');
>>>>>>> 7e0786d6dba6a10c7af319c51126286f75c2114e
    console.log('waited');
    const cocktails = await r.json();
 
    render(cocktails)

}


getData();


function render(data) {

    let html = '';
    data.forEach(data => {
<<<<<<< HEAD
        html += `<h4>${data.strDrink}</h4>
        <img src="${data.strDrinkThumb}">`
=======
        html += `<h4>${data.name}</h4>
        <img src="${data.img}" height="150px">`
>>>>>>> 7e0786d6dba6a10c7af319c51126286f75c2114e
    })
    document.querySelector(`.coctails`).innerHTML = html

}