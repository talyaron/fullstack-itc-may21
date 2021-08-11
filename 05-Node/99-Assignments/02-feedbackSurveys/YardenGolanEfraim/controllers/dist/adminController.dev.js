"use strict";

var models = require('../models');

var Ajv = require("ajv");

exports.getAdmin = function (req, res) {
  res.send(selectedAdmin);
};