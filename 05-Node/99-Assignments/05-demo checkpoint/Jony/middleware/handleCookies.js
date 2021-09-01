"use strict";
exports.__esModule = true;
exports.writeCookie = void 0;
var user_1 = require("../models/user");
var secret_1 = require("./secret/secret");
var jwt = require('jwt-simple');
function writeCookie(req, res, next) {
    try {
        var _a = req.body, name = _a.name, image = _a.image, color = _a.color;
        var user = new user_1.User(name, image, color);
        var id = JSON.stringify({ id: user.id });
        var tokenUser = jwt.encode(id, secret_1.secret);
        res.cookie('cookieUser', tokenUser, { maxAge: 3000000000, httpOnly: true });
        req.user = user;
        next();
    }
    catch (e) {
        alert(e);
    }
}
exports.writeCookie = writeCookie;
