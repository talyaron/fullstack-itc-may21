
async function getData() {
    console.log('start get data');
    const r = await fetch('/getCocktails');
    console.log('waited');
    const cocktails = await r.json();
    console.log(cocktails);
    render(cocktails)

}


getData();


function render(data) {

    let html = '';
    console.time('render')
    for (let i: number = 0; i < 20; i++) {
        data.forEach(data => {
            html += `<h4>${data.name}</h4>
        <img src="${data.img}" height="150px">`
        })
    }
    document.querySelector(`.coctails`).innerHTML = html
    console.timeEnd('render');

}