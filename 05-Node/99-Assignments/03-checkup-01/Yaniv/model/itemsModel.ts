const { v4: uuidv4 } = require("uuid");

export class Item {
    itemUuid: string;
    itemDetail1: string;
    itemDetail2: string;

    constructor(itemDetail1:string, itemDetail2:string) {
        this.itemUuid = "item_" + uuidv4();
        this.itemDetail1 = itemDetail1;
        this.itemDetail2 = itemDetail2;
    }
}

export class Items {
    itemsArray: Array<Item>;

    constructor(){
        this.itemsArray = [];
    }
    
    addItem(item:Item): void {
        try {
            this.itemsArray.push(item);
            
        } catch (error) {
            console.error(error.message);
        }
    }

    findItemIndex(itemUuid:string): number { // in case of editing a specific item
        try {
            const itemIndex: number = this.itemsArray.findIndex(item => item.itemUuid === itemUuid);
            if (itemIndex === -1) throw new Error(`item doesn't exist`);

            return itemIndex;
            
        } catch (error) {
            console.error(error.message);
        }
    }
    
    updateItem(itemUuid:string, editedItemDetail1:string, editedItemDetail2:string): number {
        try {
            const itemIndex: number = this.findItemIndex(itemUuid);

            if (editedItemDetail1) this.itemsArray[itemIndex].itemDetail1 = editedItemDetail1;
            if (editedItemDetail2) this.itemsArray[itemIndex].itemDetail2 = editedItemDetail2;
            
            return itemIndex;

        } catch (error) {
            console.error(error.message);
        }
    }

    doSomething1(Input1ModelName:string): any {
        try {
            const itemsArrayModified: Items = JSON.parse(JSON.stringify(this.itemsArray)); // in case need to manipulate itemsArry W/O changing the origin
            // doSomething1 code
            itemsArrayModified[0].itemDetail1 = Input1ModelName;

            const serverOutput1:any = itemsArrayModified; // sent back to client
            
            return serverOutput1;
    
        } catch (error) {
            console.error(error.message);
        }
    }

    removeItem(itemUuid:string): void {
        try {
            this.itemsArray = this.itemsArray.filter(item => item.itemUuid !== itemUuid);
            
        } catch (error) {
            console.error(error.message);
        }
    }
}