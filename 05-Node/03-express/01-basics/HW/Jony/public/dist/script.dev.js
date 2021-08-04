"use strict";

//btn
var btnGetData = document.querySelector('.getData');
var btnUpdateData = document.querySelector('.updateData');
var btnADDdata = document.querySelector('.addData'); //board

var boardRoot = document.querySelector('#board'); //input

var inputName = document.querySelector('.name');
var inputID = document.querySelector('.id');
var inputRegrex = document.querySelector('.regrex');
btnGetData.addEventListener('click', getData);
btnUpdateData.addEventListener('click', updateData);
btnADDdata.addEventListener('click', addData);
var dataAvenger;

function getData(ev) {
  var html = '';
  ev.preventDefault();
  axios.get('/getAvengers').then(function (_ref) {
    var data = _ref.data;
    render(html, data);
  });
}

function updateData(ev) {
  var html = '';
  ev.preventDefault();
  var name = inputName.value;
  var id = inputID.valueAsNumber;
  axios.put('/updateAvenger', {
    name: name,
    id: id
  }).then(function (_ref2) {
    var data = _ref2.data;
    render(html, data);
  });
}

inputRegrex.addEventListener('keyup', getDataKeyUp);

function getDataKeyUp(ev) {
  var html = '';
  ev.preventDefault();
  var regrex = inputRegrex.value;
  axios.get("/getAvengersbyName?name=".concat(regrex)).then(function (_ref3) {
    var data = _ref3.data;
    render(html, data);
  });
}

function deleteData(id) {
  var html = '';
  axios["delete"]('/deleteAvenger', {
    data: {
      id: parseInt(id)
    }
  }).then(function (_ref4) {
    var data = _ref4.data;
    render(html, data);
  });
}

function addData(ev) {
  try {
    ev.preventDefault();
    var name = inputName.value;
    var id = inputID.valueAsNumber;
    axios.post('/addAvenger', {
      name: name,
      id: id
    }).then(function (_ref5) {
      var data = _ref5.data;
      render(html, data);
    });
  } catch (e) {
    console.log(e);
  }
}

function render(html, data) {
  dataAvenger = data;
  data.forEach(function (elem) {
    html += "<div class=\"container__board--element\">Name: ".concat(elem.name, "\n        <i class=\"fa fa-trash \" onclick='deleteData(\"").concat(elem.id, "\")' title=\"Delete Item\"></i>\n        <i class=\"fas fa-edit \" onclick='handleEdit(\"").concat(elem.id, "\")' title=\"Click on the edit item and then edit\"></i></div> ");
  });
  boardRoot.innerHTML = html;
}

function handleEdit(id) {
  var avenger = dataAvenger.find(function (avenger) {
    return avenger.id = id;
  });
  inputName.value = avenger.name;
  inputID.value = avenger.id;
}