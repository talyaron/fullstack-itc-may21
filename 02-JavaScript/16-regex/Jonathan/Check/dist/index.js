var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var boardRoot = document.querySelector('#board');
var Data = /** @class */ (function () {
    function Data(name, address, age) {
        this.name = name;
        this.address = address;
        this.age = age;
    }
    return Data;
}());
var DataList = /** @class */ (function () {
    function DataList() {
        this.datalist = [];
    }
    DataList.prototype.addElement = function (data, dataLocal) {
        this.datalist = dataLocal;
        this.datalist.push(data);
        var dataArray = __spreadArrays(this.datalist);
        console.log('a', dataArray);
        this.renderElement(dataArray);
        localStorage.setItem("data", JSON.stringify(this.datalist));
    };
    DataList.prototype.renderElement = function (arrayToRender) {
        var html = '';
        arrayToRender.forEach(function (elem) {
            var name = elem.name, address = elem.address, age = elem.age;
            html += "<div>" + name + ";" + address + ";" + age + "</div>";
        });
        console.log(boardRoot);
        boardRoot.innerHTML = html;
    };
    return DataList;
}());
var datalist = new DataList();
var dataLocal = JSON.parse(localStorage.getItem('data'));
function handleSumbit(event) {
    event.preventDefault();
    var name = event.target.elements.name.value;
    var age = event.target.elements.age.value;
    var address = event.target.elements.address.value;
    var data = new Data(name, age, address);
    if (dataLocal === null) {
        dataLocal = [];
    }
    else {
        dataLocal = JSON.parse(localStorage.getItem('data'));
    }
    datalist.addElement(data, dataLocal);
}
datalist.renderElement(dataLocal);
