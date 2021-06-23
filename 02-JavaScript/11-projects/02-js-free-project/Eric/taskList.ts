const allItems = JSON.parse(localStorage.getItem('item'));
const root = document.querySelector('#root');

function renderItems(): void {

    let html: string = "";

    allItems.forEach(element => {
        html += `<div>  ${element.task} <input type="checkbox" class="checkItem" onclick = checkear() > </div> `
    });
    root.innerHTML = html;
}

function checkear() {

    const check: any = document.getElementsByClassName('checkItem');
    let itemArray: any = [];
    let count:number =0;
    

    allItems.forEach(element => {
        
        if (check[count].checked === true) {
            itemArray.push(element)
        }
        count++;
    });

    localStorage.setItem('checkedItem', JSON.stringify(itemArray))

    mostrarItems();

}



renderItems();


function redirectt() {
    window.location.href = 'index.html'
}


function mostrarItems(){
    localStorage.parse
}