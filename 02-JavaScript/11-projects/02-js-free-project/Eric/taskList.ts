const allItems = JSON.parse(localStorage.getItem('item'));
const root = document.querySelector('#root')

function renderItems() {
    let html: string = this.allItems.allItems.map(element => {
        return (
            `${element.item}`
        )
    })
    root.innerHTML = html;
}

renderItems();