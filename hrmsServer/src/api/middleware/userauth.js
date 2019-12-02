const jwt = require('jsonwebtoken')
const User = require('../users/user.model')
const userauth = async (req, res, next) => {
    try {
        const token = req.header('Authorization').replace('Bearer ', '')
        // console.log(token)
        const decoded = jwt.verify(token, "secretKey")
        const user = await User.findOne({ _id: decoded._id, 'token': token })
        if (!user) {
            console.log('user')
            throw new Error()
        }
        req.token = token
        req.user = user
        console.log(user)
        next()
    } catch (e) {
        res.status(401).send({ error: 'Please authenticate' })
    }
}
module.exports = userauth;