const boardDataRoot: HTMLElement = document.querySelector('#boardData')
//const form: HTMLElement = document.getElementById('form')
const checks: any = document.getElementsByClassName('checks')
const btnAdd = document.querySelector('#add')
const btnEdit = document.querySelector('#edit')
const btnBring = document.querySelector('#bring')
const btnDelete = document.querySelectorAll('#delete')
const btnFilter = document.querySelector('#filter')


//data
const inputName = (<HTMLInputElement>document.querySelector("#name"))
const city = (<HTMLInputElement>document.querySelector("#city"))
const tel = (<HTMLInputElement>document.querySelector("#tel"))
const inputStatus = (<HTMLInputElement>document.querySelector("#status"))
const salary = (<HTMLInputElement>document.querySelector("#salary"))
const id = Math.random().toString(16).slice(2);

// a class for take new items
class Data {
    name: string;
    city: string;
    tel: string;
    status: string;
    salary: number;
    id: string;

    constructor(name: string, city: string, tel: string, status: string, salary: number, id: string) {
        this.name = name;
        this.city = city;
        this.tel = tel;
        this.status = status;
        this.salary = salary;
        this.id = id
    }
}

class DataList {
    datalist: Array<Data> = [];

    getOldData(dataList: Array<any>): number {
        dataList.forEach(item => {
            this.datalist.push(item)

        });
        return this.datalist.length
    }

    getNewData(data: Data): number {
        this.datalist.push(data)
        this.renderDataList(this.datalist);
        return this.datalist.length
    }

    //editar
    bringItem(count: number): number {
        const checks: any = document.getElementsByClassName('checks')
        console.log(count)
        let posicion: number = 0;
        for (let i = 0; i < count; i++) {
            if (checks[i].checked === true) {
                inputName.value = this.datalist[i].name
                city.value = this.datalist[i].city
                tel.value = this.datalist[i].tel
                inputStatus.value = this.datalist[i].status
                salary.value = String(this.datalist[i].salary)
                posicion = i;
            }
        }
        return posicion
    }

    editItem(posicion: number) {


        let index: number = 0
        this.datalist.forEach(item => {
            if (index === posicion) {
                item.name = inputName.value
                item.city = city.value
                item.tel = tel.value
                item.status = inputStatus.value
                item.salary = parseInt(salary.value)
            }
            index++
        });
        this.renderDataList(this.datalist);
    }

    filterOption() {
        console.log(inputName.value)
        this.datalist = this.datalist.filter(elem => elem.name === inputName.value || elem.city === city.value
            || elem.salary === parseInt(salary.value) || elem.status === inputStatus.value)
        this.renderDataList(this.datalist);
    }

    removeItem(id:string){
       const itemIndex:number = this.datalist.findIndex(elem=>elem.id = id)
        this.datalist.splice(itemIndex,1)
        this.renderDataList(this.datalist)
    }

    renderDataList(dataList: Array<any>): number {

        let html: string = '';

        console.log(dataList)
        dataList.forEach(item => {
            html += `<div class = "item">
                       
                       <span> Name: ${item.name} </span> 
                       <span> Citiy: ${item.city} </span> 
                       <span> Tel: ${item.tel} </span> 
                       <span> Status: ${item.status} </span> 
                       <span> Salary: ${item.salary} </span>
                       <label for="checkbox${count}">Edit Item</label>
                        <input type="checkbox" id="cbox${count}" value="checkbox${count}" class="checks">
                        <button type="sumbit" onclick='handleDelete(${item.id})' class = "btn">Button</button>
                    </div>`

        });
        console.log(boardDataRoot)
        boardDataRoot.innerHTML = html
        return this.datalist.length;
    }
}



//Existing Data before the user can add, remove or edit 

interface personalData {
    name: string,
    city: string,
    tel: string,
    status: string,
    salary: number,
    id: string,
}

const personalDataList: Array<personalData> =
    [
        {
            name: 'Jonathan',
            city: 'Buenos Aires',
            tel: '972-555-2232',
            status: 'Single',
            salary: 500,
            id: Math.random().toString(16).slice(2),
        },
        {
            name: 'Lucas',
            city: 'Madrid',
            tel: '5-55-232',
            status: 'Single',
            salary: 1000,
            id: Math.random().toString(16).slice(2),
        }
    ]


const datalist = new DataList();

let count: number = 0;


count = datalist.getOldData(personalDataList);
datalist.renderDataList(personalDataList);



let posicion: number;


btnAdd.addEventListener('click', event => {
    event.preventDefault()
    console.log(id)
    const data = new Data(inputName.value, city.value, tel.value, inputStatus.value, parseInt(salary.value), id)
    count = datalist.getNewData(data);
});

btnEdit.addEventListener('click', event => {
    event.preventDefault()
    console.log(posicion)
    datalist.editItem(posicion)
});


btnBring.addEventListener('click', event => {
    event.preventDefault()
    posicion = datalist.bringItem(count);
});

btnFilter.addEventListener('click', event => {
    event.preventDefault()
    datalist.filterOption();
});


function handleDelete(id: string) {
    console.log(id)
    datalist.removeItem(id);
}