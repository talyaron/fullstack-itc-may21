"use strict";

//Get the employes information:
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

; //render

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
          phone = elem.phone,
          id = elem.id;
      html += "<tr>\n\t\t\t<td></td>\n\t\t\t<td>".concat(name, "</td>\n\t\t\t<td>").concat(email, "</td>\n\t\t\t<td>").concat(address, "</td>\n\t\t\t<td>").concat(phone, "</td>\n\t\t\t<td>\n\t\t\t\t<a href=\"#editEmployeeModal\" class=\"edit\" data-toggle=\"modal\"><i class=\"material-icons\" data-toggle=\"tooltip\" title=\"Edit\"  onclick='updateEmploye(\"").concat(id, "\")' >&#xE254;</i></a>\n\t\t\t\t<i class=\"material-icons\" data-toggle=\"tooltip\" title=\"Delete\"  onclick='deleteEmploye(\"").concat(id, "\")' style=\"cursor:pointer\">&#xE872;</i>\n\t\t\t</td>\n\t\t</tr>");
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
}

function deleteEmploye(id) {
  var option, employeData;
  return regeneratorRuntime.async(function deleteEmploye$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          option = confirm("Are you sure do you want to delete this employe?");

          if (!option) {
            _context2.next = 7;
            break;
          }

          _context2.next = 5;
          return regeneratorRuntime.awrap(axios["delete"]("/deleteEmployes/".concat(id)));

        case 5:
          employeData = _context2.sent;
          render(employeData.data.allEmployes);

        case 7:
          _context2.next = 12;
          break;

        case 9:
          _context2.prev = 9;
          _context2.t0 = _context2["catch"](0);
          console.error(_context2.t0);

        case 12:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 9]]);
}

; //UPDATE

var currentId;

function updateEmploye(id) {
  currentId = id;
}

function handleEdit(event) {
  var id, nameEdit, emailEdit, addressEdit, phoneEdit, _updateEmploye, employeData;

  return regeneratorRuntime.async(function handleEdit$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          event.preventDefault();
          _context3.prev = 1;
          id = currentId;
          nameEdit = document.querySelector('#name').value;
          emailEdit = document.querySelector('#email').value;
          addressEdit = document.querySelector('#address').value;
          phoneEdit = document.querySelector('#phone').value;
          _updateEmploye = {
            nameEdit: nameEdit,
            emailEdit: emailEdit,
            addressEdit: addressEdit,
            phoneEdit: phoneEdit,
            id: id
          };

          if (!(nameEdit === "" || emailEdit === "" || addressEdit === "" || phoneEdit === "")) {
            _context3.next = 10;
            break;
          }

          throw new Error('data vacia');

        case 10:
          console.log(_updateEmploye);
          _context3.next = 13;
          return regeneratorRuntime.awrap(axios.put("/updateEmployes", _updateEmploye));

        case 13:
          employeData = _context3.sent;
          event.target.reset();
          render(employeData.data);

          if ($("#aditEmployeeModal")) {
            $("#editEmployeeModal").modal("hide");
          }

          _context3.next = 22;
          break;

        case 19:
          _context3.prev = 19;
          _context3.t0 = _context3["catch"](1);
          console.error(_context3.t0);

        case 22:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[1, 19]]);
}