const showme = async (req, res) => {
    res.send(req.user)

}
module.exports = { showme }