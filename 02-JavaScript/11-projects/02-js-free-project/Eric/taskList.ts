const allItems = JSON.parse(localStorage.getItem('item'));
const root = document.querySelector('#root')

//agregar boton check en cada item, que se vea el boton y lo pueda clickear
function renderItems():void {

    let html: string = "";
    allItems.forEach(element => {
       html += `<div onclick="deletes()"> ${element.id} ${element.task} </div>`
    });    
    root.innerHTML = html;
}
renderItems();



//function deletes(){}

function redirectt() {
    window.location.href = 'index.html'
}


//al entrar en esta pagina que me muestre solamente los que estan checked de la pagina anterior
function checked () {
    window.location.href = 'completed.html'
}


//localStorage.clear()


/*let html: string = this.allItems.allItems.map(element => {
    console.log(element.task)
    return (
        `<div onclick="deletes()"> ${element.task} </div>`)
})
console.log(html)*/
