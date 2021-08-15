"use strict";

exports.get_admin = function (req, res) {
  try {
    var admin = req.cookies.admin;
    var cookie = JSON.parse(admin);
    var selectedAdmin = cookie.selectedAdmin;
    res.send(selectedAdmin);
  } catch (e) {
    console.error(e);
  }
};