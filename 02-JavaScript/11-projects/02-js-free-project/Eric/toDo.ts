
class Item{
    id: string;
    task: string;

    constructor (task:string){
    this.id = "id" + Math.random().toString(16).slice(2); // es interno
    this.task = task;
}
}

class Items{
    allItems: Array<Item>=[];
    // le pasas el string del input
    addItem(task:string): void {
        //instancias un nueva clase que te va a "devolver" el id con el task que le pasaste
        let newItem: Item = new Item (task);
        //newItem tiene ya las dos variables, id y task
        this.allItems.push(newItem);
        //le pasamos directo el objeto cada vez que se agrega una instancia
        localStorage.setItem('item', JSON.stringify(this.allItems))

    }

}


const items = new Items();

const doingSubmit = (ev: any): void => {
    ev.preventDefault();

    const task: string = ev.target.elements.task.value;

    //llamas esa funcion, le pasas el argumento task para que se agregue en un objecto
    items.addItem(task);

    //localStorage.setItem('item', JSON.stringify(items))

    //ev.reset();
};

function redirect() {
    window.location.href = 'ItemsList.html'
}


