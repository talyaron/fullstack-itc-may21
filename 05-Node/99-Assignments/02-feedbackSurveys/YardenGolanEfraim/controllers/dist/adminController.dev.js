"use strict";

exports.get_admin = function (req, res) {
  var admin = req.cookies.admin;
  var cookie = JSON.parse(admin);
  var selectedAdmin = cookie.selectedAdmin;
  res.send(selectedAdmin);
};