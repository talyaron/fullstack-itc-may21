var boardDataRoot = document.querySelector('#boardData');
var btnAdd = document.getElementById('add');
var btnEdit = document.getElementById('edit');
var btnReset = document.getElementById('reset');
//data
var inputName = document.querySelector("#name"); //YS: You dont need the first and last parenthesis 
var city = document.querySelector("#city"); //YS: You dont need the first and last parenthesis
var gender = document.querySelector('#gender'); //YS: You dont need the first and last parenthesis
var tel = document.querySelector("#tel"); //YS: You dont need the first and last parenthesis
var inputStatus = document.querySelector("#status"); //YS: You dont need the first and last parenthesis
var salary = document.querySelector("#salary"); //YS: You dont need the first and last parenthesis
var id = Math.random().toString(16).slice(2);
//Regrex
var inputNameFilter = document.querySelector("#filtername"); //YS: You dont need the first and last parenthesis
//filter
var gender_list = document.querySelectorAll(".container__actions__filtergender--radio"); //YS: Why is this snake_case and not camelCase? 
filterGender();
// a class for take new items
var Data = /** @class */ (function () {
    function Data(name, city, gender, tel, status, salary, id) {
        this.name = name;
        this.city = city;
        this.gender = gender;
        this.tel = tel;
        this.status = status;
        this.salary = salary;
        this.id = Math.random().toString(16).slice(2);
    }
    return Data;
}());
var DataList = /** @class */ (function () {
    function DataList() {
        this.datalist = [];
        this.datalistFilter = [];
    }
    DataList.prototype.getOldData = function (dataList) {
        var _this = this;
        dataList.forEach(function (item) {
            var oldData = new Data(item.name, item.city, item.gender, item.tel, item.status, item.salary, item.id);
            _this.datalist.push(oldData);
            _this.datalistFilter.push(oldData);
        });
        this.renderDataList();
        return this.datalist.length;
    };
    DataList.prototype.getNewData = function (data) {
        this.datalist.push(data);
        this.datalistFilter.push(data);
        this.getStorage();
        this.renderDataList();
        return this.datalist.length;
    };
    DataList.prototype.bringItem = function () {
        var checks = document.getElementsByClassName('container__boardData--checks');
        var i = 0;
        try {
            if (!checks)
                throw new Error("Can get the check inputs");
            if (!btnEdit)
                throw new Error("An error of button Edit has ocurred");
            btnEdit.disabled = false;
            this.datalist.forEach(function (element) {
                if (checks[i].checked === true) {
                    inputName.value = element.name;
                    city.value = element.city;
                    tel.value = element.tel;
                    inputStatus.value = element.status;
                    salary.value = String(element.salary);
                    position = i;
                }
                i++;
            });
            return position;
        }
        catch (e) {
            console.log(e);
        }
    };
    DataList.prototype.editItem = function (position) {
        try {
            var index_1 = 0;
            this.datalist.forEach(function (item) {
                if (index_1 === position) {
                    if (inputName.name === "" || city.value === "" || tel.value === "" || tel.value === "" || parseInt(salary.value) === NaN)
                        throw new Error("Check if you complete all the inputs");
                    if (parseInt(salary.value) <= 0)
                        throw new Error("Salary must be positive");
                    item.name = inputName.value;
                    item.city = city.value;
                    item.tel = tel.value;
                    item.status = inputStatus.value;
                    item.salary = parseInt(salary.value);
                    item.gender = gender.value;
                }
                index_1++;
            });
            btnAdd.disabled = false;
            this.renderDataList();
            this.getStorage();
        }
        catch (e) {
            console.log(e); //YS: You should let the client know (in the DOM), a client doesnt know how to check the console log. He will think the form is broken. 
        }
    };
    DataList.prototype.filterGender = function (gender, searchInput) {
        var something = "^" + searchInput;
        var searchTermReg = new RegExp(something, 'i');
        if (inputNameFilter.value === "") {
            if (gender === "female" || gender === "male") {
                this.datalist = this.datalistFilter.filter(function (elem) { return elem.gender === gender; });
            }
            else {
                this.datalist = this.datalistFilter.filter(function (elem) { return elem.gender === 'male' || elem.gender === 'female'; });
            }
        }
        else {
            this.datalist = this.datalistFilter.filter(function (elem) { return searchTermReg.test(elem.name); });
            if (gender === "female" || gender === "male") {
                this.datalist = this.datalist.filter(function (elem) { return elem.gender === gender; });
            }
            else {
                this.datalist = this.datalist.filter(function (elem) { return elem.gender === 'male' || elem.gender === 'female'; });
            }
        }
        this.renderDataList();
    };
    DataList.prototype.filterbyName = function (inputNameFilter) {
        var regrExp = "^" + inputNameFilter;
        var searchTermReg = new RegExp(regrExp, 'i');
        this.datalist = this.datalistFilter.filter(function (elem) { return searchTermReg.test(elem.name); });
        this.renderDataList();
    };
    DataList.prototype.removeItem = function (id) {
        this.datalist = this.datalist.filter(function (item) { return item.id !== id; });
        this.datalistFilter = this.datalistFilter.filter(function (item) { return item.id !== id; });
        this.renderDataList();
        this.getStorage();
    };
    DataList.prototype.getStorage = function () {
        localStorage.setItem("newPeople", JSON.stringify(this.datalist));
    };
    DataList.prototype.renderDataList = function () {
        var html = '';
        var count = 0;
        try {
            if (!boardDataRoot)
                throw new Error("This page cant render");
            this.datalist.forEach(function (item) {
                var num = Number("" + item.salary);
                if (item.gender === 'male') {
                    html += "<div class = \"container__boardData--item container__boardData--blue\">\n                  <span> \uD83D\uDC71</span>";
                }
                else {
                    html += "<div class = \"container__boardData--item container__boardData--pink\">\n                            <span> \uD83D\uDC78</span>";
                }
                html += "\n                        <table id=\"data\">\n                            <tr>\n                               <th>Name: </th>\n                               <td>" + item.name + " </td>\n                            </tr>\n                            <tr>   \n                               <th>City: </th>\n                               <td>" + item.city + " </td>\n                            </tr>\n                            <tr>\n                               <th>Gender: </th>\n                               <td>" + (item.gender.charAt(0).toUpperCase() + item.gender.slice(1)) + " </td>\n                             </tr>\n                             <tr>  \n                               <th>Tel: </th>\n                               <td>" + item.tel + " </td>\n                             </tr>\n                             <tr>\n                               <th>Status: </th>\n                               <td>" + (item.status.charAt(0).toUpperCase() + item.status.slice(1)) + " </td>\n                             </tr>\n                             <tr>  \n                               <th>Salary: </th>\n                               <td>\u20AA " + num.toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g, '$1.').split('').reverse().join('').replace(/^[\.]/, '') + "<td>\n                            </tr>\n                        </table>    \n                    <div>\n                        <label>\n                            <input type=\"radio\" name=\"edit\" value=\"radiobox" + count + "\" onclick='handleEdit()' class=\"container__boardData--checks\" checked>\n                            <i class=\"fas fa-edit container__boardData--yellow-color\" title=\"Click on the edit item and then edit\"></i>\n                        </label>\n                            <label> \n                            <i class=\"fa fa-trash container__boardData--red-color\" onclick='handleDelete(\"" + item.id + "\")' title=\"Delete Item\"></i>\n                        </label>  \n                     </div>   \n                    </div>";
                count++;
            });
            boardDataRoot.innerHTML = html;
            return this.datalist.length;
        }
        catch (e) {
            console.log(e);
        }
    };
    return DataList;
}());
var datalist = new DataList();
var count = 0;
var position;
var newPeople = JSON.parse(localStorage.getItem("newPeople"));
var oldPeople = JSON.parse(localStorage.getItem("oldPeople"));
if (newPeople === null) { //YS: I didnt really understand why you had this, you should work with the same array. 
    count = datalist.getOldData(oldPeople);
}
else if (newPeople !== oldPeople) {
    count = datalist.getOldData(newPeople);
}
else {
    count = datalist.getOldData(oldPeople);
}
//Buttons
btnAdd.addEventListener('click', function (event) {
    event.preventDefault();
    try {
        if (inputName.name === "" || city.value === "" || tel.value === "" || tel.value === "" || parseInt(salary.value) === NaN)
            throw new Error("Check if you complete all the inputs");
        if (parseInt(salary.value) <= 0)
            throw new Error("Salary must be positive");
        var data = new Data(inputName.value, city.value, gender.value, tel.value, inputStatus.value, parseInt(salary.value), id);
        count = datalist.getNewData(data);
        //form clear
        inputName.value = ""; //YS: You can use form.reset()
        city.value = "";
        tel.value = "";
        salary.value = "";
        filterGender();
    }
    catch (e) {
        console.log(e); //YS: The client wont see this error. 
    }
});
btnEdit.addEventListener('click', function (event) {
    event.preventDefault();
    datalist.editItem(position);
    //form clear
    inputName.value = "";
    city.value = "";
    tel.value = "";
    salary.value = "";
    btnEdit.disabled = true;
});
inputNameFilter.addEventListener('keyup', handleKeyUp);
function handleKeyUp() {
    try {
        datalist.filterbyName(inputNameFilter.value);
    }
    catch (e) {
        console.log(e);
    }
}
console.log(filterGender()); //YS: Dont leave console.logs
function filterGender() {
    var _loop_1 = function (i) {
        gender_list[i].addEventListener("click", function () {
            console.log(gender_list[i]);
            datalist.filterGender(gender_list[i].value, inputNameFilter.value); //for YS, It works but some reason I have this error. I try with NodeValue but does not work.
        });
    };
    for (var i = 0; i < gender_list.length; i++) {
        _loop_1(i);
    }
}
function handleDelete(id) {
    datalist.removeItem(id);
}
function handleEdit() {
    btnAdd.disabled = true;
    datalist.bringItem();
}
btnReset.addEventListener('click', function (event) {
    event.preventDefault();
    localStorage.clear(); // reset and bring to the board only the two items from data.ts
    window.location.reload(); //refresh page
});
