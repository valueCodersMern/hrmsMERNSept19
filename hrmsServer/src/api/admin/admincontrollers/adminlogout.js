const logout = async (req, res) => {
    try {
        req.admin.token = '';
        await req.admin.save()
        res.send(req.admin)
    } catch (e) {
        console.log(e)
        return res.status(400).send()
    }
}


module.exports = { logout }

