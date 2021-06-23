
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
        try {
            let newItem: Item = new Item(task);
            this.allItems.push(newItem);
            if (!this.allItems) throw new Error('The array where you want to push the task it doesn´t exist!');
            localStorage.setItem('item', JSON.stringify(this.allItems));
        } catch (error) {
            console.error(error)
        }
    }
}


const items = new Items();

const doingSubmit = (ev: any): void => {
    ev.preventDefault();
    try {
        const task: string = ev.target.elements.task.value;
        items.addItem(task);
    } catch (error) {
        console.error(error)
    }

};

function redirect() {
    try {
        window.location.href = 'ItemsList.html'
        if (!window.location.href) throw new Error('The page where you want to redirect it doesn´t exist!');
    } catch (error) {
        console.error(error)
    }
}

localStorage.clear()

