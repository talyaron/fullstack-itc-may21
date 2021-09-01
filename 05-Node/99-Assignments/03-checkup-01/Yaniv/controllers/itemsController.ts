export {};

import { Items, Item } from "../model/itemsModel";

const items = new Items();

export function getItems(req, res) {
    try {
        res.send({ items: items.itemsArray });

    } catch (error) {
        console.error(error.message);
        res.status(500).send(error.message);
    }
}

export function updateItem(req, res) {
    try {
        const { itemUuid, updatedItemDetail1, updatedItemDetail2 } = req.body;
        
        if (!itemUuid) throw new Error("No user was passed");
        if (!updatedItemDetail1 && !updatedItemDetail2) throw new Error("No details were passed");
        
        const updatedItemIndex: number = items.updateItem(itemUuid, updatedItemDetail1, updatedItemDetail2);
        const updatedItem: Item = items.itemsArray[updatedItemIndex];

        res.send({ item: updatedItem });

    } catch (error) {
        console.error(error.message);
        res.status(500).send(error.message);
    }
}

export function addItem(req, res) {
    try {
        const { itemDetail1, itemDetail2 } = req.body;
        
        if (!itemDetail1 || !itemDetail2) throw new Error("No item was passed");

        const item = new Item(itemDetail1, itemDetail2);
        items.addItem(item);
  
        res.send({ items: items.itemsArray });
  
    } catch (error) {
        console.error(error.message);
        res.status(500).send(error.message);
    }
}

export function doSomething1(req, res) {
    try {
        const { Input1ModelName } = req.body;

        const serverOutput1 = items.doSomething1(Input1ModelName);

        res.send({ clientOutput: serverOutput1 });

    } catch (error) {
        console.error(error.message);
        res.status(500).send(error.message);
    }
}

export function removeItem(req, res) {
    try {
        const { itemUuid } = req.params;
        if (!itemUuid) throw new Error("No user was passed");

        items.removeItem(itemUuid);
  
        res.send({ items: items.itemsArray });
  
    } catch (error) {
        console.error(error.message);
        res.status(500).send(error.message);
    }
}