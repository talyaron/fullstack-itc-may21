"use strict";

// window.onload = function () {
// }
//render
function render(array) {
  if ($("#addEmployeeModal")) {
    $("#addEmployeeModal").modal("hide"); //se agrega si esta vacio, modificarlo!!
  }

  var root = document.querySelector(".root");
  var html = "";

  if (array && array.length > 0) {
    html += "<table class=\"table table-striped table-hover\">\n\t\t<thead>\n\t\t\t<tr>\n\t\t\t\t<th>\n\t\t\t\t\n\t\t\t\t</th>\n\t\t\t\t<th>Name</th>\n\t\t\t\t<th>Email</th>\n\t\t\t\t<th>Address</th>\n\t\t\t\t<th>Phone</th>\n\t\t\t\t<th>Actions</th>\n\t\t\t</tr>\n\t\t</thead>\n\t\t<tbody>";
    array.forEach(function (elem) {
      var name = elem.name,
          email = elem.email,
          address = elem.address,
          phone = elem.phone;
      html += "<tr>\n\t\t\t<td></td>\n\t\t\t<td>".concat(name, "</td>\n\t\t\t<td>").concat(email, "</td>\n\t\t\t<td>").concat(address, "</td>\n\t\t\t<td>").concat(phone, "</td>\n\t\t\t<td>\n\t\t\t\t<a href=\"#editEmployeeModal\" class=\"edit\" data-toggle=\"modal\"><i class=\"material-icons\" data-toggle=\"tooltip\" title=\"Edit\">&#xE254;</i></a>\n\t\t\t\t<a href=\"#deleteEmployeeModal\" class=\"delete\" data-toggle=\"modal\"><i class=\"material-icons\" data-toggle=\"tooltip\" title=\"Delete\">&#xE872;</i></a>\n\t\t\t</td>\n\t\t</tr>");
    });
    html += "</tbody></table>";
  } else {
    var _html = "";
  }

  root.innerHTML = html;
}

render(); //POST

function handleSubmit(event) {
  event.preventDefault();
  var _event$target$element = event.target.elements,
      name = _event$target$element.name,
      email = _event$target$element.email,
      address = _event$target$element.address,
      phone = _event$target$element.phone;
  name = name.value;
  email = email.value;
  address = address.value;
  phone = phone.value;
  axios({
    method: "post",
    url: "/addEmployes",
    data: {
      name: name,
      email: email,
      address: address,
      phone: phone
    },
    headers: {
      "Content-Type": "application/json"
    }
  }).then(function (_ref) {
    var allEmployes = _ref.data.allEmployes;
    return render(allEmployes);
  }).then(function () {
    return event.target.reset();
  });
} //DELETE


function deleteRecord(personId) {
  axios.post('/deleteEmploye', {
    id: personId
  }).then(function (res) {
    console.log(employes);
    render(res.array.allEmployes);
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
    render(res.array.allEmployes);
  });
}