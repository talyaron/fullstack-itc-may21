const boardDataRoot: HTMLElement = document.querySelector('#boardData')
//const form: HTMLElement = document.getElementById('form')
const checks: any = document.getElementsByClassName('checks')
const btnAdd = document.querySelector('#add')
const btnEdit = document.querySelector('#edit')
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
    bringItem(): number {
        const checks: any = document.getElementsByClassName('checks')
        let i:number = 0;
        this.datalist.forEach(element => {
            if (checks[i].checked === true) 
            {
                inputName.value = element.name
                city.value = element.city
                tel.value = element.tel
                inputStatus.value = element.status
                salary.value = String(element.salary)
                posicion = i;
            }
            i++;
        });

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
       this.datalist = this.datalist.filter(item=>item.id !== id)
        this.renderDataList(this.datalist)
    }

    renderDataList(dataList: Array<any>): number {

        let html: string = '';
        let count:number = 0;
        console.log(dataList)
        dataList.forEach(item => {
            html += `<div class = "item">
                       <span> Name: ${item.name} </span> 
                       <span> Citiy: ${item.city} </span> 
                       <span> Tel: ${item.tel} </span> 
                       <span> Status: ${item.status} </span> 
                       <span> Salary: ${item.salary} </span>
                       <label for="checkbox${count}">Edit Item
                       <input type="radio" name="edit" value="radiobox${count}" onclick='handleEdit()' class="checks">
                       <i class="fas fa-edit"></i>
                       </label>
                       <i class="fas fa-trash" onclick='handleDelete("${item.id}")'></i>
                        
                    </div>`
            count++;
        });
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


//Buttons

btnAdd.addEventListener('click', event => {
    event.preventDefault()
    console.log(id)
    const data = new Data(inputName.value, city.value, tel.value, inputStatus.value, parseInt(salary.value), id)
    count = datalist.getNewData(data);
});

btnEdit.addEventListener('click', event => {
    event.preventDefault()
    datalist.editItem(posicion)
    inputName.value = "";
    city.value = "";
    tel.value = "";
    inputStatus.value = "";
    salary.value = "";
});


btnFilter.addEventListener('click', event => {
    event.preventDefault()
    datalist.filterOption();
});


//function

function handleDelete(id:string) {
    datalist.removeItem(id);
    
}

function handleEdit(){
    datalist.bringItem();
}