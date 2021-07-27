"use strict";

//form
var form = document.getElementById('form'); //btn

var btnGetData = document.querySelector('.getData');
var btnUpdateData = document.querySelector('.updateData'); //board

var boardRoot = document.querySelector('#board'); //input

var inputName = document.querySelector('.name');
var inputID = document.querySelector('.id');
var inputRegrex = document.querySelector('.regrex'); //addEventListener

btnGetData.addEventListener('click', getData);
btnUpdateData.addEventListener('click', updateData);
form.addEventListener('submit', handleSumbit);

function getData() {
  var html = '';
  axios.get('/getAvengers').then(function (_ref) {
    var data = _ref.data;
    render(html, data);
  });
}

function updateData() {
  var html = '';
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

function getDataKeyUp() {
  var html = '';
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

function handleSumbit(event) {
  event.preventDefault();

  try {
    var name = event.target.elements.name.value;
    var id = event.target.elements.id.valueAsNumber;
    axios.post('/addAvenger', {
      name: name,
      id: id
    }); //
  } catch (e) {
    console.log(e);
  }
}

function render(html, data) {
  data.forEach(function (elem) {
    html += "<div class=\"container__board--element\">ID: ".concat(elem.id, " - Name: ").concat(elem.name, "\n        <i class=\"fa fa-trash \" onclick='deleteData(\"").concat(elem.id, "\")' title=\"Delete Item\"></i></div> ");
  });
  boardRoot.innerHTML = html;
}