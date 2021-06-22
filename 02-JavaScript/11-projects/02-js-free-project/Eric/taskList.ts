const allItems = JSON.parse(localStorage.getItem('item'));
const root = document.querySelector('#root')


function renderItems(): void {

    let html: string = "";
    allItems.forEach(element => {
        html += `<div>  ${element.task} <input type="checkbox" > </div> `
    });
    root.innerHTML = html;
   
   /* allItems.addEventListener("click", ()=>{
        if(allItems.id == allItems.id){
            console.log(allItems.id)
        }
    });*/
}


renderItems();






/*function renderChecked(): void {

    let html: string = "";
    html += `<div>  <button class="btn1" onclick="filterSelection('Completed items')"> Show completed items</button> </div>`
    checkItems.innerHTML = html;
};

renderChecked();*/


function redirectt() {
    window.location.href = 'index.html'
}
