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

var getStudents = function getStudents() {
  axios.get('/getEmployes').then(function (res) {
    console.log(employes);
    render(res.array.allEemployes);
  });
}; //render


function render(array) {
  var html = "";
  var list = document.getElementById("root");

  if (array.length > 0) {
    html += "<table class=\"table table-striped table-hover\">\n\t\t<thead>\n\t\t\t<tr>\n\t\t\t\t<th>\n\t\t\t\t\t<span class=\"custom-checkbox\">\n\t\t\t\t\t\t<input type=\"checkbox\" id=\"selectAll\">\n\t\t\t\t\t\t<label for=\"selectAll\"></label>\n\t\t\t\t\t</span>\n\t\t\t\t</th>\n\t\t\t\t<th>Name</th>\n\t\t\t\t<th>Email</th>\n\t\t\t\t<th>Address</th>\n\t\t\t\t<th>Phone</th>\n\t\t\t\t<th>Actions</th>\n\t\t\t</tr>\n\t\t</thead>\n\t\t<tbody>";
    array.forEach(function (elem) {
      var name = elem.name,
          email = elem.email,
          address = elem.address,
          phone = elem.phone;
      html += "<tr>\n\t\t\t<td>\n\t\t\t\t<span class=\"custom-checkbox\">\n\t\t\t\t\t<input type=\"checkbox\" id=\"checkbox1\" name=\"options[]\" value=\"1\">\n\t\t\t\t\t<label for=\"checkbox1\"></label>\n\t\t\t\t</span>\n\t\t\t</td>\n\t\t\t<td>".concat(name, "</td>\n\t\t\t<td>").concat(email, "</td>\n\t\t\t<td>").concat(address, "</td>\n\t\t\t<td>").concat(phone, "</td>\n\t\t\t<td>\n\t\t\t\t<a href=\"#editEmployeeModal\" class=\"edit\" data-toggle=\"modal\"><i class=\"material-icons\" data-toggle=\"tooltip\" title=\"Edit\">&#xE254;</i></a>\n\t\t\t\t<a href=\"#deleteEmployeeModal\" class=\"delete\" data-toggle=\"modal\"><i class=\"material-icons\" data-toggle=\"tooltip\" title=\"Delete\">&#xE872;</i></a>\n\t\t\t</td>\n\t\t</tr>\n\t\t\n\t</tbody>\n</table>");
    });
    html += "</tbody></table>";
  } else {
    html += "";
  }

  list.innerHTML = html;
}

render(); //POST

function handleSubmit(event) {
  event.preventDefault();
  var _event$target$element = event.target.elements,
      name = _event$target$element.name,
      mail = _event$target$element.mail,
      addreess = _event$target$element.addreess,
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
    var data = _ref.data;
    return data;
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