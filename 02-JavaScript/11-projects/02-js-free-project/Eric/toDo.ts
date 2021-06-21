
class Item{
    id: string;
    task: string;

    constructor (task:string){
    this.id = "id" + Math.random().toString(16).slice(2);
    this.task = task;
}
}

class Items{
    allItems: Array<Item>=[];

    addItem(task:string): void {
        let newItem: Item = new Item (task);
        this.allItems.push(newItem);
        console.log(newItem)

    }

}


const items = new Items();

const doingSubmit = (ev: any): void => {
    ev.preventDefault();

    const task: string = ev.target.elements.task.value;

    items.addItem(task);

    localStorage.setItem('item', JSON.stringify(items))
};

function redirect() {
    window.location.href = 'ItemsList.html'
}