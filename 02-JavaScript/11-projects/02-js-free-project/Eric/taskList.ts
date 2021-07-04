const allItems = JSON.parse(localStorage.getItem('item'));
const root = document.querySelector('#root');


function renderItems(): void {

    let html: string = "";

    allItems.forEach(element => {

        html += `<div>  ${element.task} <input type="checkbox" class="checkItem" onclick = checkear() > </div> `
    });
    try {
        root.innerHTML = html;

        if (!html) throw new Error('An error occurs when you want to render..')
    } catch (error) {
        console.error(error)
    }
}



function checkear() {
    const check: any = document.getElementsByClassName('checkItem');
    let itemArray: any = [];
    let count: number = 0;


    allItems.forEach(element => {

        try {

            if (check[count].checked === true) {
                itemArray.push(element)

            }
            count++;


        } catch (error) {
            console.error(error)
        }
    });


    localStorage.setItem('checkedItem', JSON.stringify(itemArray))

    mostrarItems();

}
renderItems();





function redirectt() {
    try {
        window.location.href = 'index.html'
        if (!window.location.href) throw new Error('The page where you want to redirect it doesn´t exist!')
    } catch (error) {
        console.error(error)
    }
}


function mostrarItems() {
    try {
        localStorage.parse

    } catch (error) {
        console.error(error)
    }
}