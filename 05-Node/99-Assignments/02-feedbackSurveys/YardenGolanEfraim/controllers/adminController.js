exports.get_admin = (req, res) => {
    const { admin } = req.cookies
        const cookie = JSON.parse(admin);
        const {selectedAdmin} = cookie;
    res.send(selectedAdmin)
}