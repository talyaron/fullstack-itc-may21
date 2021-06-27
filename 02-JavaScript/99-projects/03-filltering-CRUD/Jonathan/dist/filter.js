var boardDataRoot = document.querySelector('#boardData');
//const form: HTMLElement = document.getElementById('form')
var checks = document.getElementsByClassName('checks');
var btnAdd = document.querySelector('#add');
var btnEdit = document.querySelector('#edit');
var btnDelete = document.querySelectorAll('#delete');
var btnFilter = document.querySelector('#filter');
//data
var inputName = document.querySelector("#name");
var city = document.querySelector("#city");
var tel = document.querySelector("#tel");
var inputStatus = document.querySelector("#status");
var salary = document.querySelector("#salary");
var id = Math.random().toString(16).slice(2);
// a class for take new items
var Data = /** @class */ (function () {
    function Data(name, city, tel, status, salary, id) {
        this.name = name;
        this.city = city;
        this.tel = tel;
        this.status = status;
        this.salary = salary;
        this.id = id;
    }
    return Data;
}());
var DataList = /** @class */ (function () {
    function DataList() {
        this.datalist = [];
    }
    DataList.prototype.getOldData = function (dataList) {
        var _this = this;
        dataList.forEach(function (item) {
            _this.datalist.push(item);
        });
        return this.datalist.length;
    };
    DataList.prototype.getNewData = function (data) {
        this.datalist.push(data);
        this.renderDataList(this.datalist);
        return this.datalist.length;
    };
    //editar
    DataList.prototype.bringItem = function () {
        var checks = document.getElementsByClassName('checks');
        var i = 0;
        this.datalist.forEach(function (element) {
            if (checks[i].checked === true) {
                inputName.value = element.name;
                city.value = element.city;
                tel.value = element.tel;
                inputStatus.value = element.status;
                salary.value = String(element.salary);
                posicion = i;
            }
            i++;
        });
        return posicion;
    };
    DataList.prototype.editItem = function (posicion) {
        var index = 0;
        this.datalist.forEach(function (item) {
            if (index === posicion) {
                item.name = inputName.value;
                item.city = city.value;
                item.tel = tel.value;
                item.status = inputStatus.value;
                item.salary = parseInt(salary.value);
            }
            index++;
        });
        this.renderDataList(this.datalist);
    };
    DataList.prototype.filterOption = function () {
        console.log(inputName.value);
        this.datalist = this.datalist.filter(function (elem) { return elem.name === inputName.value || elem.city === city.value
            || elem.salary === parseInt(salary.value) || elem.status === inputStatus.value; });
        this.renderDataList(this.datalist);
    };
    DataList.prototype.removeItem = function (id) {
        this.datalist = this.datalist.filter(function (item) { return item.id !== id; });
        this.renderDataList(this.datalist);
    };
    DataList.prototype.renderDataList = function (dataList) {
        var html = '';
        var count = 0;
        console.log(dataList);
        dataList.forEach(function (item) {
            html += "<div class = \"item\">\n                       <span> Name: " + item.name + " </span> \n                       <span> Citiy: " + item.city + " </span> \n                       <span> Tel: " + item.tel + " </span> \n                       <span> Status: " + item.status + " </span> \n                       <span> Salary: " + item.salary + " </span>\n                       <label for=\"checkbox" + count + "\">Edit Item</label>\n                       <input type=\"radio\" name=\"edit\" value=\"checkbox" + count + "\" onclick='handleEdit()' class=\"checks\">\n                       <input type=\"submit\" value=\"\uD83D\uDDD1\uFE0F\" onclick='handleDelete(\"" + item.id + "\")'></input>\n                        \n                    </div>";
            count++;
        });
        boardDataRoot.innerHTML = html;
        return this.datalist.length;
    };
    return DataList;
}());
var personalDataList = [
    {
        name: 'Jonathan',
        city: 'Buenos Aires',
        tel: '972-555-2232',
        status: 'Single',
        salary: 500,
        id: Math.random().toString(16).slice(2)
    },
    {
        name: 'Lucas',
        city: 'Madrid',
        tel: '5-55-232',
        status: 'Single',
        salary: 1000,
        id: Math.random().toString(16).slice(2)
    }
];
var datalist = new DataList();
var count = 0;
count = datalist.getOldData(personalDataList);
datalist.renderDataList(personalDataList);
var posicion;
//Buttons
btnAdd.addEventListener('click', function (event) {
    event.preventDefault();
    console.log(id);
    var data = new Data(inputName.value, city.value, tel.value, inputStatus.value, parseInt(salary.value), id);
    count = datalist.getNewData(data);
});
btnEdit.addEventListener('click', function (event) {
    event.preventDefault();
    datalist.editItem(posicion);
    inputName.value = "";
    city.value = "";
    tel.value = "";
    inputStatus.value = "";
    salary.value = "";
});
btnFilter.addEventListener('click', function (event) {
    event.preventDefault();
    datalist.filterOption();
});
//function
function handleDelete(id) {
    datalist.removeItem(id);
}
function handleEdit() {
    datalist.bringItem();
}
