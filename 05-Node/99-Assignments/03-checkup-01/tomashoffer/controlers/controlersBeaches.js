"use strict";
exports.__esModule = true;
exports.firstBeach = exports.allBeaches = void 0;
var images_1 = require("../model/images");
function allBeaches(req, res) {
    res.send(images_1.beaches);
}
exports.allBeaches = allBeaches;
function firstBeach(req, res) {
    res.send(images_1.beaches[0]);
}
exports.firstBeach = firstBeach;
;
