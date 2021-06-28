const boardDataRoot: HTMLElement = document.querySelector('#boardData')
const btnAdd = <HTMLButtonElement>document.getElementById('add')
const btnEdit = <HTMLButtonElement>document.getElementById('edit')



//data
const inputName = (<HTMLInputElement>document.querySelector("#name"))
const city = (<HTMLInputElement>document.querySelector("#city"))
const gender = (<HTMLInputElement>document.querySelector('#gender'))
const tel = (<HTMLInputElement>document.querySelector("#tel"))
const inputStatus = (<HTMLInputElement>document.querySelector("#status"))
const salary = (<HTMLInputElement>document.querySelector("#salary"))
const id = Math.random().toString(16).slice(2);

//Regrex
const inputNameFilter = (<HTMLInputElement>document.querySelector("#filtername"))

//filter
const gender_list = <NodeList>document.querySelectorAll(".container__actions__filtergender--radio");


filterGender();

// a class for take new items
class Data {
    name: string;
    city: string;
    gender: string;
    tel: string;
    status: string;
    salary: number;
    id: string;

    constructor(name: string, city: string, gender: string, tel: string, status: string, salary: number, id: string) {
        this.name = name;
        this.city = city;
        this.gender = gender;
        this.tel = tel;
        this.status = status;
        this.salary = salary;
        this.id = Math.random().toString(16).slice(2);
    }
}

class DataList {
    datalist: Array<Data> = [];
    datalistFilter: Array<Data> = [];

    getOldData(dataList: Array<personalData>): number {
        dataList.forEach(item => {
            const oldData = new Data(item.name, item.city, item.gender, item.tel, item.status, item.salary, item.id)
            this.datalist.push(oldData)
            this.datalistFilter.push(oldData)
        });
        return this.datalist.length
    }

    getNewData(data: Data): number {
        this.datalist.push(data)
        this.datalistFilter.push(data)
        this.renderDataList();
        return this.datalist.length
    }


    bringItem(): number {
        const checks: any = document.getElementsByClassName('container__boardData--checks')
        let i: number = 0;

        try {
            if (!checks) throw new Error("Can get the check inputs");
            if (!btnEdit) throw new Error("An error of button Edit has ocurred")
            btnEdit.disabled = false;
            this.datalist.forEach(element => {
                if (checks[i].checked === true) {
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
        } catch (e) {
            console.log(e)
        }

    }

    editItem(posicion: number) {

        try {
            
            let index: number = 0
            this.datalist.forEach(item => {
                if (index === posicion) {
                    if (inputName.name === "" || city.value === "" || tel.value === "" || tel.value === "" || parseInt(salary.value) === NaN) throw new Error("Check if you complete all the inputs");
                    if (parseInt(salary.value) <= 0) throw new Error("Salary must be positive");
                    item.name = inputName.value
                    item.city = city.value
                    item.tel = tel.value
                    item.status = inputStatus.value
                    item.salary = parseInt(salary.value)
                    item.gender = gender.value;
                }
                index++
            });
            btnAdd.disabled = false;
            this.renderDataList();
        } catch (e) {
            console.log(e)
        }
    }

    filterGender(gender: string) {

        if (gender === "female" || gender === "male") {
            this.datalist = this.datalistFilter.filter(elem => elem.gender === gender)

        } else {
            this.datalist = this.datalistFilter.filter(elem => elem.gender === 'male' || elem.gender === 'female')
        }

        this.renderDataList()
    }

    filterbyName(inputNameFilter: string) {

        const regrExp: string = `^${inputNameFilter}`
        const searchTermReg: RegExp = new RegExp(regrExp, 'i');
        this.datalist = this.datalistFilter.filter(elem => searchTermReg.test(elem.name))
        this.renderDataList()

    }

    removeItem(id: string) {
        this.datalist = this.datalist.filter(item => item.id !== id)
        this.datalistFilter = this.datalistFilter.filter(item=>item.id !==id)
        this.renderDataList()
    }

    renderDataList(): number {

        let html: string = '';
        let count: number = 0;

        try {
            if (!boardDataRoot) throw new Error("This page cant render");


            this.datalist.forEach(item => {
                if (item.gender === 'male') {
                    html += `<div class = "container__boardData--item container__boardData--blue">
                  <span> 👱</span>`
                } else {
                    html += `<div class = "container__boardData--item container__boardData--pink">
                            <span> 👸</span>`
                }
                html += ` <p><span>Name:</span> ${item.name} </p> 
                        <p><span>City:</span> ${item.city} </p>
                        <p><span>Gender:</span> ${item.gender.charAt(0).toUpperCase() + item.gender.slice(1)}</p> 
                         <p><span>Tel:</span> ${item.tel} </p> 
                        <p> <span>Status:</span> ${item.status.charAt(0).toUpperCase() + item.status.slice(1)} </p> 
                        <p><span>Salary:</span> ₪ ${item.salary} </p>
                        <label>Edit Item: 
                            <input type="radio" name="edit" value="radiobox${count}" onclick='handleEdit()' class="container__boardData--checks" checked 
                             >
                            <i class="fas fa-edit container__boardData--yellow-color" title="Click on the edit item and then edit"></i>
                        </label>
                            <label>Delete Item: 
                            <i class="fa fa-trash container__boardData--red-color" onclick='handleDelete("${item.id}")' title="Delete Item"></i>
                        </label>  
                    </div>`
                count++;
            });
            boardDataRoot.innerHTML = html
            return this.datalist.length;
        } catch (e) {
            console.log(e)
        }
    }
}

//Existing Data before the user can add, remove or edit
interface personalData {
    name: string,
    city: string,
    gender: string,
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
            gender: 'male',
            tel: '972-555-2232',
            status: 'single',
            salary: 500,
            id: Math.random().toString(16).slice(2),
        },
        {
            name: 'Agustina',
            city: 'Madrid',
            gender: 'female',
            tel: '5-55-232',
            status: 'single',
            salary: 1000,
            id: Math.random().toString(16).slice(2),
        }
    ]

const datalist = new DataList();
let count: number = 0;
count = datalist.getOldData(personalDataList);
datalist.renderDataList();

let posicion: number;


//Buttons
btnAdd.addEventListener('click', event => {
    event.preventDefault()
    try {
        if (inputName.name === "" || city.value === "" || tel.value === "" || tel.value === "" || parseInt(salary.value) === NaN) throw new Error("Check if you complete all the inputs");
        if (parseInt(salary.value) <= 0) throw new Error("Salary must be positive");
        const data = new Data(inputName.value, city.value, gender.value, tel.value, inputStatus.value, parseInt(salary.value), id)
        
        count = datalist.getNewData(data);
        filterGender();
    } catch (e) {
        console.log(e)
    }

});

btnEdit.addEventListener('click', event => {
    event.preventDefault()
    datalist.editItem(posicion)

    //form clear
    inputName.value = "";
    city.value = "";
    tel.value = "";
    salary.value = "";
    btnEdit.disabled = true;
});


inputNameFilter.addEventListener('keyup', handleKeyUp)

function handleKeyUp() {
    try {
       
        //
        datalist.filterbyName(inputNameFilter.value)
    } catch (e) {
        console.log(e)
    }
}


function filterGender() {
    for (let i = 0; i < gender_list.length; i++) {
        gender_list[i].addEventListener("click", function () {
            datalist.filterGender(gender_list[i].value);
        });
    }
}




//function

function handleDelete(id: string) {
    datalist.removeItem(id);

}

function handleEdit() {
    btnAdd.disabled = true;
    datalist.bringItem();
}