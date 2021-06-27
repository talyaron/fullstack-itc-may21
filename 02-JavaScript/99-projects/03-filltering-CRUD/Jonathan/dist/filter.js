var boardDataRoot = document.querySelector('#boardData');
//const form: HTMLElement = document.getElementById('form')
var checks = document.getElementsByClassName('checks');
var btnAdd = document.querySelector('#add');
var btnEdit = document.querySelector('#edit');
var btnBring = document.querySelector('#bring');
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
    DataList.prototype.bringItem = function (count) {
        var checks = document.getElementsByClassName('checks');
        console.log(count);
        var posicion = 0;
        for (var i = 0; i < count; i++) {
            if (checks[i].checked === true) {
                inputName.value = this.datalist[i].name;
                city.value = this.datalist[i].city;
                tel.value = this.datalist[i].tel;
                inputStatus.value = this.datalist[i].status;
                salary.value = String(this.datalist[i].salary);
                posicion = i;
            }
        }
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
        var itemIndex = this.datalist.findIndex(function (elem) { return elem.id = id; });
        this.datalist.splice(itemIndex, 1);
        this.renderDataList(this.datalist);
    };
    DataList.prototype.renderDataList = function (dataList) {
        var html = '';
        console.log(dataList);
        dataList.forEach(function (item) {
            html += "<div class = \"item\">\n                       \n                       <span> Name: " + item.name + " </span> \n                       <span> Citiy: " + item.city + " </span> \n                       <span> Tel: " + item.tel + " </span> \n                       <span> Status: " + item.status + " </span> \n                       <span> Salary: " + item.salary + " </span>\n                       <label for=\"checkbox" + count + "\">Edit Item</label>\n                        <input type=\"checkbox\" id=\"cbox" + count + "\" value=\"checkbox" + count + "\" class=\"checks\">\n                        <button type=\"sumbit\" onclick='handleDelete(" + item.id + ")' class = \"btn\">Button</button>\n                    </div>";
        });
        console.log(boardDataRoot);
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
btnAdd.addEventListener('click', function (event) {
    event.preventDefault();
    console.log(id);
    var data = new Data(inputName.value, city.value, tel.value, inputStatus.value, parseInt(salary.value), id);
    count = datalist.getNewData(data);
});
btnEdit.addEventListener('click', function (event) {
    event.preventDefault();
    console.log(posicion);
    datalist.editItem(posicion);
});
btnBring.addEventListener('click', function (event) {
    event.preventDefault();
    posicion = datalist.bringItem(count);
});
btnFilter.addEventListener('click', function (event) {
    event.preventDefault();
    datalist.filterOption();
});
function handleDelete(id) {
    console.log(id);
    datalist.removeItem(id);
}
