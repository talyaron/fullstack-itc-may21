"use strict";
exports.__esModule = true;
exports.passwordsControl = void 0;
exports.passwordsControl = function (req, res) {
    if (req.role === 'admin')
        res.send({ password: 123 });
    else
        res.status(401).send({ error: 'Unauthrized path' });
};
