function createAdminCookie(selectedAdmin, res){
    try{
    const adminCookie = JSON.stringify({ selectedAdmin })
    res.cookie('admin', adminCookie, { maxAge: 300000000, httpOnly: true });
  
}catch (e) {
    console.error(e)
}}

function getAdminCookie(req){
    try{
        const { admin } = req.cookies
        const cookie = JSON.parse(admin);
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
