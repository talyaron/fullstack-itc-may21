const boardRoot = <HTMLElement>document.querySelector('#board')


class Data{
    name:string;
    address:string;
    age:number;

    constructor(name:string, address:string, age:number){
        this.name = name;
        this.address = address;
        this.age = age;
    }
}

class DataList{
    datalist:Array<Data> = [];

    addElement(data:Data, dataLocal:Array<any>){

        this.datalist = dataLocal

        this.datalist.push(data)

        const dataArray = [...this.datalist]
        

        console.log('a',dataArray)
        this.renderElement(dataArray)
        
        localStorage.setItem("data", JSON.stringify(this.datalist))
        
    }

    renderElement(arrayToRender:Array<Data>){
        let html:string = ''

        arrayToRender.forEach(elem => {

            const {name, address, age} = elem

            html+= `<div>${name};${address};${age}</div>`
            
        });

        console.log(boardRoot)

        boardRoot.innerHTML = html
    }
}

const datalist = new DataList()
let dataLocal = JSON.parse(localStorage.getItem('data'))

function handleSumbit(event:any):void{

    event.preventDefault();

    const name = event.target.elements.name.value;
    const age = event.target.elements.age.value;
    const address = event.target.elements.address.value;

    const data = new Data(name, age, address)

     
    
    if(dataLocal === null){
        dataLocal = []
    }else{
        dataLocal = JSON.parse(localStorage.getItem('data'))
    }

    

    datalist.addElement(data, dataLocal)




}

datalist.renderElement(dataLocal)