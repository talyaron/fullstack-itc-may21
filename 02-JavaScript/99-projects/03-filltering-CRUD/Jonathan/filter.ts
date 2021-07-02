let boardDataRoot: HTMLElement = document.querySelector('#boardData')
const btnAdd = <HTMLButtonElement>document.getElementById('add')
const btnEdit = <HTMLButtonElement>document.getElementById('edit')
const btnReset = <HTMLButtonElement>document.getElementById('reset')



//data
const inputName = (<HTMLInputElement>document.querySelector("#name")) //YS: You dont need the first and last parenthesis 
const city = (<HTMLInputElement>document.querySelector("#city")) //YS: You dont need the first and last parenthesis
const gender = (<HTMLInputElement>document.querySelector('#gender')) //YS: You dont need the first and last parenthesis
const tel = (<HTMLInputElement>document.querySelector("#tel")) //YS: You dont need the first and last parenthesis
const inputStatus = (<HTMLInputElement>document.querySelector("#status")) //YS: You dont need the first and last parenthesis
const salary = (<HTMLInputElement>document.querySelector("#salary")) //YS: You dont need the first and last parenthesis
const id = Math.random().toString(16).slice(2);

//Regrex
const inputNameFilter = (<HTMLInputElement>document.querySelector("#filtername")) //YS: You dont need the first and last parenthesis

//filter
const gender_list = <NodeList>document.querySelectorAll(".container__actions__filtergender--radio"); //YS: Why is this snake_case and not camelCase? 


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


    getOldData(dataList: Array<personalData | Data>): number {


        dataList.forEach(item => {
            const oldData = new Data(item.name, item.city, item.gender, item.tel, item.status, item.salary, item.id)
            this.datalist.push(oldData)
            this.datalistFilter.push(oldData)
        });

        this.renderDataList()
        return this.datalist.length
    }

    getNewData(data: Data): number {
        this.datalist.push(data)
        this.datalistFilter.push(data)
        this.getStorage()
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
            this.datalist.forEach(element => { //YS: Nice! Although it would've been better to use .find here. 
                if (checks[i].checked === true) {
                    inputName.value = element.name
                    city.value = element.city
                    tel.value = element.tel
                    inputStatus.value = element.status
                    salary.value = String(element.salary)
                    position = i;
                }
                i++;
            });
            return position
        } catch (e) {
            console.log(e)
        }

    }

    editItem(position: number) {

        try {

            let index: number = 0
            this.datalist.forEach(item => { //YS: Again, find would have been better here. But good!
                if (index === position) {
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
            this.getStorage()

        } catch (e) {
            console.log(e) //YS: You should let the client know (in the DOM), a client doesnt know how to check the console log. He will think the form is broken. 
        }
    }

    filterGender(gender: string,searchInput: string) { //YS: Ok, a little DRY. 

        const something: string = `^${searchInput}`;
        const searchTermReg: RegExp = new RegExp(something, 'i');

        if (inputNameFilter.value === "") {
            if (gender === "female" || gender === "male") {
                this.datalist = this.datalistFilter.filter(elem => elem.gender === gender)
            } else {
                this.datalist = this.datalistFilter.filter(elem => elem.gender === 'male' || elem.gender === 'female')
            }
        } else {
            this.datalist = this.datalistFilter.filter(elem => searchTermReg.test(elem.name))

            if (gender === "female" || gender === "male") {
                this.datalist = this.datalist.filter(elem => elem.gender === gender)
            } else {
                this.datalist = this.datalist.filter(elem => elem.gender === 'male' || elem.gender === 'female')
            }
            
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
        this.datalistFilter = this.datalistFilter.filter(item => item.id !== id)
        this.renderDataList()
        this.getStorage()
    }

    getStorage(){
        localStorage.setItem("newPeople", JSON.stringify(this.datalist))
    }


    renderDataList(): number {

        let html: string = '';
        let count: number = 0;

        try {
            if (!boardDataRoot) throw new Error("This page cant render");

            this.datalist.forEach(item => { //YS: A forEach has an index as a parameter so you dont need the count: forEach((item, index))
                let num: number = Number(`${item.salary}`);
                if (item.gender === 'male') {
                    html += `<div class = "container__boardData--item container__boardData--blue">
                  <span> 👱</span>`
                } else {
                    html += `<div class = "container__boardData--item container__boardData--pink">
                            <span> 👸</span>`
                }
                html += `
                        <table id="data">
                            <tr>
                               <th>Name: </th>
                               <td>${item.name} </td>
                            </tr>
                            <tr>   
                               <th>City: </th>
                               <td>${item.city} </td>
                            </tr>
                            <tr>
                               <th>Gender: </th>
                               <td>${item.gender.charAt(0).toUpperCase() + item.gender.slice(1)} </td>
                             </tr>
                             <tr>  
                               <th>Tel: </th>
                               <td>${item.tel} </td>
                             </tr>
                             <tr>
                               <th>Status: </th>
                               <td>${item.status.charAt(0).toUpperCase() + item.status.slice(1)} </td>
                             </tr>
                             <tr>  
                               <th>Salary: </th>
                               <td>₪ ${num.toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g, '$1.').split('').reverse().join('').replace(/^[\.]/, '')}<td>
                            </tr>
                        </table>    
                    <div>
                        <label>
                            <input type="radio" name="edit" value="radiobox${count}" onclick='handleEdit()' class="container__boardData--checks" checked>
                            <i class="fas fa-edit container__boardData--yellow-color" title="Click on the edit item and then edit"></i>
                        </label>
                            <label> 
                            <i class="fa fa-trash container__boardData--red-color" onclick='handleDelete("${item.id}")' title="Delete Item"></i>
                        </label>  
                     </div>   
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


const datalist = new DataList();
let count: number = 0;
let position: number;




const newPeople = JSON.parse(localStorage.getItem("newPeople"))
const oldPeople = JSON.parse(localStorage.getItem("oldPeople"))


if (newPeople === null) {  //YS: I didnt really understand why you had this, you should work with the same array. 
    count = datalist.getOldData(oldPeople);
} else if (newPeople !== oldPeople) {
    count = datalist.getOldData(newPeople)
} else {
    count = datalist.getOldData(oldPeople);
}


//Buttons
btnAdd.addEventListener('click', event => {
    event.preventDefault()
    try {
        if (inputName.name === "" || city.value === "" || tel.value === "" || tel.value === "" || parseInt(salary.value) === NaN) throw new Error("Check if you complete all the inputs");
        if (parseInt(salary.value) <= 0) throw new Error("Salary must be positive");
        const data = new Data(inputName.value, city.value, gender.value, tel.value, inputStatus.value, parseInt(salary.value), id)
        count = datalist.getNewData(data);
        //form clear
        inputName.value = "";  //YS: You can use form.reset()
        city.value = "";
        tel.value = "";
        salary.value = "";
        filterGender();
    } catch (e) {
        console.log(e) //YS: The client wont see this error. 
    }

});

btnEdit.addEventListener('click', event => {
    event.preventDefault()
    datalist.editItem(position)

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

        datalist.filterbyName(inputNameFilter.value)
    } catch (e) {
        console.log(e)
    }
}

console.log(filterGender()) //YS: Dont leave console.logs


function filterGender() {
    for (let i = 0; i < gender_list.length; i++) {
        gender_list[i].addEventListener("click", function () {                  //YS: The problem is that your dataList is of type NodeList, you have to find the correct type, mabye object, if not, any? 
            console.log(typeof datalist)
            datalist.filterGender(gender_list[i].value,inputNameFilter.value); //for YS, It works but some reason I have this error. I try with NodeValue but does not work.

        });
    }
}


function handleDelete(id: string) {
    datalist.removeItem(id);

}

function handleEdit() {
    btnAdd.disabled = true;
    datalist.bringItem();
}

btnReset.addEventListener('click', event => {
    event.preventDefault()
    localStorage.clear() // reset and bring to the board only the two items from data.ts
    window.location.reload(); //refresh page
});