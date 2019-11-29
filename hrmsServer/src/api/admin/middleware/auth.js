const jwt = require('jsonwebtoken')
const Admin = require('../admin/adminmodel')
const auth = async (req, res, next) => {
    try {
        //console.log(req)
        const token = req.header('Authorization').replace('Bearer ', '')
        const decoded = jwt.verify(token, 'thisismytoken')
        const admin = await Admin.findOne({ _id: decoded._id, 'token': token })
        if (!admin) {
            // console.log('user')
            throw new Error()
        }
        req.token = token
        req.admin = admin
        // console.log(req.user)
        // console.log(req.token)
        next()
    } catch (e) {
        res.status(401).redirect('http://localhost:3000/*')
    }
}
module.exports = auth;