"use strict";

var _require = require('../models.js'),
    getAdminCookie = _require.getAdminCookie;

exports.get_admin = function (req, res) {
  try {
    var selectedAdmin = getAdminCookie(req);
    res.send(selectedAdmin);
  } catch (e) {
    console.error(e);
  }
};