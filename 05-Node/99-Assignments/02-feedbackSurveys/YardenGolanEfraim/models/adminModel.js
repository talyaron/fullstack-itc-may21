const jwt = require('jwt-simple');
let payload = '';
const secret = 'jdgfjkdgfjdjkbvzjkhdvlj';

function createAdminCookie(selectedAdmin, res){
    try{
    payload = JSON.stringify({ selectedAdmin })
    const token = jwt.encode(payload, secret);
    res.cookie('admin', token, { maxAge: 300000000, httpOnly: true });
  
}catch (e) {
    console.error(e)
}}

function getAdminCookie(req){
    try{
        const {admin} = req.cookies
        console.log(admin)
        const decoded = jwt.decode(admin, secret);
        console.log(decoded)
        const cookie = JSON.parse(decoded);
        console.log(cookie)
        const {selectedAdmin} = cookie;
        return selectedAdmin
}catch (e) {
    console.error(e)
}}
function createGuestCookie(guestUser, res){
    try{
    const guestCookie = JSON.stringify({ guestUser })
    res.cookie('guest', guestCookie, { maxAge: 300000000, httpOnly: true });
}catch (e) {
    console.error(e)
}}
function getAdminCookieIndex(req){
    const { adminIndex } = req.cookies
    const cookieIndex = JSON.parse(adminIndex);
    const {selectedAdminIndex} = cookieIndex;
    return selectedAdminIndex
}

module.exports = { createAdminCookie, getAdminCookie, createGuestCookie, getAdminCookieIndex }
