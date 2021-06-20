
class Items {
    itemName:string;
    itemId:string = "id" + Math.random().toString(16).slice(2);;


    constructor(itemName:string, itemId:string){
        this.itemName=itemName;
        this.itemId=itemId;
    
    }



}

function handleSubmit(event){
    event.preventDefault()

    //agarras el contenido del input text
    const name = event.target.elements.add.value;
    console.log(name)
    

}