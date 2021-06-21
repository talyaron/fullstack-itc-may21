const allItems = JSON.parse(localStorage.getItem('item'));
const root = document.querySelector('#root')

function renderItems() {
    let html: string = this.allItems.allItems.map(element => {
        return (
            `${element.task}`
        )
    })
    root.innerHTML = html;
}

renderItems();

function redirectt() {
    window.location.href = 'index.html'
}