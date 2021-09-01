async function getAllItems() {
    try {
        const { data, error } = await axios.get('/items/all');

        if (error) throw error;
        const {items} = data;

        renderItems(items);

    } catch (error) {
        console.error(error.message);
    }
}

const addItemForm: HTMLFormElement = document.querySelector('#add-item-form');
addItemForm.addEventListener('submit', addItem);

async function addItem(ev: any): Promise<any> {
    try {
        ev.preventDefault();
     
        const itemDetail1 = ev.target.elements.itemDetail1.value;
        const itemDetail2 = ev.target.elements.itemDetail2.value;
        if (!itemDetail1 || !itemDetail2) throw new Error('missing details');
        const {data, error} = await axios.post('/items/',{ itemDetail1, itemDetail2 });

        if (error) throw error;
        const {items} = data;  

        renderItems(items);

        ev.target.reset();

    } catch (error) {
        console.error(error.message);
    }

}

function renderItems(items:Array<any>) {
    try {
        const itemsElement: HTMLElement = document.querySelector('.items');
        const itemsHtml = items.map(item => {
            return `
            <div class="items__item item" id="${item.itemUuid}" style="border: 1px solid black; border-radius: 10px;">
                <h2 class="item__item item__item--detail-1">${item.itemDetail1}</h2>
                <p class="item__item item__item--detail-2">${item.itemDetail2}</p>
                <button style="background-color: darkred; color: white; display: inline-block;" class="item__item item__item--delete" onclick="removeItem('${item.itemUuid}')">DELETE</button>
                <button style="background-color: blue; color: white; display: inline-block;" class="item__item item__item--update" onclick="renderUpdateItemForm('${item.itemUuid}')">UPDATE</button>
            </div>`
        }).join('');

        itemsElement.innerHTML = itemsHtml;

    } catch (error) {
        console.error(error.message);
    }
}

async function removeItem(itemUuid: string) {
    try {
        const { data, error } = await axios.delete(`/items/${itemUuid}`);

        if (error) throw error;
        const {items} = data;

        renderItems(items);

    } catch (error) {
        console.error(error.message);
    }
}

function renderUpdateItemForm(itemUuid: string) {
    try {
        const itemElement: HTMLElement = document.querySelector(`#${itemUuid}`);
        const itemDetail1: string = itemElement.querySelector('.item__item--detail-1').innerText;
        const itemDetail2: string = itemElement.querySelector('.item__item--detail-2').innerText;
        const updateItemFormHtml: string = `
            <form class="items__item items__item--update-form item" id="${itemUuid}" onsubmit="updateItem(event)">
                <input class="item__item item__item--detail-1" name="updatedItemDetail1" value=${itemDetail1} />
                <input class="item__item item__item--detail-2" name="updatedItemDetail2" value=${itemDetail2} />
                <input type="submit" class="item__item item__item--update" style="background-color: blue; color: white; display: inline-block;" value="UPDATE" />
            </form>`;

            itemElement.innerHTML = updateItemFormHtml;

    } catch (error) {
        console.error(error.message);
    }
}

async function updateItem(ev: any) {
    try {
        ev.preventDefault();

        const itemElement: HTMLElement = ev.target.parentElement;
        const itemUuid: string = itemElement.getAttribute('id');
        const updatedItemDetail1: string = ev.target.elements.updatedItemDetail1.value;
        const updatedItemDetail2: string = ev.target.elements.updatedItemDetail2.value;

        ev.target.reset();

        const { data, error } = await axios.put('/items/', { itemUuid, updatedItemDetail1, updatedItemDetail2 });
        
        if (error) throw error;
        const {item} = data;

        const updateItemDivHtml: string = `
        <div class="items__item item" id="${item.itemUuid}">
        <h2 class="item__item item__item--detail-1">${item.itemDetail1}</h2>
        <p class="item__item item__item--detail-2">${item.itemDetail2}</p>
        <button style="background-color: darkred; color: white; display: inline-block;" class="item__item item__item--delete" onclick="removeItem('${item.itemUuid}')">DELETE</button>
        <button style="background-color: blue; color: white; display: inline-block;" class="item__item item__item--update" onclick="renderUpdateItemForm('${item.itemUuid}')">UPDATE</button>
        </div>`;
        
        ev.target.reset();
        itemElement.innerHTML = updateItemDivHtml;

    } catch (error) {
        console.error(error.message);
    }
}

getAllItems();