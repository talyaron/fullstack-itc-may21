const { getAdminCookie } = require('../models/adminModel')

exports.get_admin = (req, res) => {
    try{
    const selectedAdmin = getAdminCookie(req)
    res.send(selectedAdmin)
}catch (e) {
    console.error(e)
}}