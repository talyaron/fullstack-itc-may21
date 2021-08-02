"use strict";

$(document).ready(function () {
  // Activate tooltip
  $('[data-toggle="tooltip"]').tooltip(); // Select/Deselect checkboxes

  var checkbox = $('table tbody input[type="checkbox"]');
  $("#selectAll").click(function () {
    if (this.checked) {
      checkbox.each(function () {
        this.checked = true;
      });
    } else {
      checkbox.each(function () {
        this.checked = false;
      });
    }
  });
  checkbox.click(function () {
    if (!this.checked) {
      $("#selectAll").prop("checked", false);
    }
  });
}); //Get

axios.get('/getEmployes').then(function (res) {
  console.log(employes); //renderData(res.data.employes)
}); //POST

function handleSubmit(ev) {
  ev.preventDefault();
  var _ev$target$elements = ev.target.elements,
      name = _ev$target$elements.name,
      email = _ev$target$elements.email,
      address = _ev$target$elements.address,
      phone = _ev$target$elements.phone;
  name = name.value;
  email = email.value;
  address = address.value;
  phone = phone.value;
  ev.target.reset();
  axios.post('/addEmployes', {
    name: name,
    email: email,
    address: address,
    phone: phone
  }); //.then(res=>renderData(res.data.students))
} //DELETE


function deleteRecord(personId) {
  axios.post('/deleteEmploye', {
    id: personId
  }).then(function (res) {
    console.log(employes); //renderData(res.data.students)
  });
} //UPDATE


function updateEmploye(personId) {
  var newName = document.getElementById("".concat(personId, "name")).value;
  console.dir(newName);
  axios.put('/updateEmploye', {
    id: personId,
    name: newName
  }).then(function (res) {
    console.log(res.data.message);
    renderData(res.data.allEmployes);
  });
}