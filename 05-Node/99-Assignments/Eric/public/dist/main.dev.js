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

  if (name !== "" || email !== "" || address !== "" || phone !== "") {
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
  } else {
    alert('You need to complete at least one field');
  }
} //DELETE


function deleteRecord(personId) {
  axios["delete"]('/deleteEmployes', {
    id: personId
  }).then(function (res) {
    console.log(employes);
    render(res.array.allEmployes);
  });
} //tengo que guardar el id del que estoy clickeando para borrar y mandarlo a deleteRecord para eliminarlo


function handleDelete(event) {
  event.preventDefault();
  deleteRecord();
  console.log('hio');
} //UPDATE


function updateEmploye(personId) {
  var newName = document.getElementById("".concat(personId, "name")).value;
  axios.put('/updateEmploye', {
    id: personId,
    name: newName
  }).then(function (res) {
    console.log(res.data.message);
    render(res.array.allEmployes);
  });
}

function handleEdit(event) {
  event.preventDefault();
  updateEmploye();
} //Get the employes information:


function getAllEmployes() {
  var employesData;
  return regeneratorRuntime.async(function getAllEmployes$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(axios.get('/getEmployes'));

        case 3:
          employesData = _context.sent;
          render(employesData.data);
          _context.next = 10;
          break;

        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0);

        case 10:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 7]]);
}

;