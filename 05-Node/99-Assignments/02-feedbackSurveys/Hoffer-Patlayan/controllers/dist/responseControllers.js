"use strict";
exports.__esModule = true;
exports.getResp = exports.sendRespon = exports.getSuveryShare = exports.getAllResponds = exports.getAllResponse = exports.getAllUsers = exports.getAllSurveys = void 0;
var express = require("express");
var app = express();
var fs = require("fs");
var uuidv4 = require('uuid').v4;
var cookieParser = require("cookie-parser");
app.use(express.json());
app.use(cookieParser());
// READ SURVEY JSON
exports.getAllSurveys = function () {
    var fileJson = fs.readFileSync("./db/survey.json");
    return JSON.parse(fileJson);
};
// READ USERS JSON`
exports.getAllUsers = function () {
    var fileJson = fs.readFileSync("./db/users.json");
    return JSON.parse(fileJson);
};
// READ RESPONSE JSON`
exports.getAllResponse = function () {
    var fileJson = fs.readFileSync("./db/response.json");
    return JSON.parse(fileJson);
};
exports.getAllResponds = function () {
    var fileJson = fs.readFileSync("./db/response.json");
    return JSON.parse(fileJson);
};
function getSuveryShare(req, res) {
    var idQuery = req.query;
    var getSuvery = exports.getAllSurveys();
    var findSurv = getSuvery.find(function (user) { return user.id === idQuery.id; });
    res.cookie('shareSurv', findSurv, { maxAge: 300000000, httpOnly: true });
    res.send(findSurv);
}
exports.getSuveryShare = getSuveryShare;
function sendRespon(req, res) {
    var _a = req.body, id = _a.id, arr = _a.arr;
    // let id = uuidv4();
    var responds = exports.getAllResponds();
    var survey = exports.getAllSurveys();
    var a = survey.find(function (user) { return user.id === id; });
    var aa = [{
            title: a.title,
            question: a.question,
            respondes: arr
        }];
    responds.push(aa);
    fs.writeFileSync("./db/response.json", JSON.stringify(responds));
    // const respond = new Response(id,arr);
    // responds.push(respond);
    // fs.writeFileSync("./db/response.json", JSON.stringify(responds));
    res.send(responds);
}
exports.sendRespon = sendRespon;
function getResp(req, res) {
    var getRes = exports.getAllResponse();
    console.log(getRes);
    res.send(getRes);
}
exports.getResp = getResp;
