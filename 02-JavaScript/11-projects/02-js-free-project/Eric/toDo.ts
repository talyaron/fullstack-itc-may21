
class Item {
    id: string;
    task: string;


    constructor(task: string) {
        this.id = "id" + Math.random().toString(16).slice(2);
        this.task = task;
    }
}

class Items {
    allItems: Array<Item> = [];

    addItem(task: string): void {
        let newItem: Item = new Item(task);
        this.allItems.push(newItem);
        localStorage.setItem('item', JSON.stringify(this.allItems))

    }

    

}


const items = new Items();

const doingSubmit = (ev: any): void => {
    ev.preventDefault();

    const task: string = ev.target.elements.task.value;

    items.addItem(task);

};

function redirect() {
    window.location.href = 'ItemsList.html'
}

localStorage.clear()

