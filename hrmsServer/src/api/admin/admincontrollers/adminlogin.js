const Admin = require('../adminmodel')

const login = async (req, res) => {
    try {
        console.log("in login");
        const admin = await Admin.findByCredentials(req.body.email, req.body.password)
        const token = await admin.generateAuthToken()
        res.send({ admin, token })

    } catch (e) {
        console.log(e);

        return res.status(400).send()
    }
}


module.exports = { login }