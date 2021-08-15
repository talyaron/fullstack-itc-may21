exports.get_admin = (req, res) => {
    try{
    const { admin } = req.cookies
        const cookie = JSON.parse(admin);
        const {selectedAdmin} = cookie;
    res.send(selectedAdmin)
}catch (e) {
    console.error(e)
}}