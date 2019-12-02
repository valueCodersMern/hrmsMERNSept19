const User = require('../user.model')

const addUser = async (req, res, next) => {
    try {
        const user = new User(req.body)
        user.save()
       res.send({user})
    } catch (e) {
        console.log(e);
        return res.status(400).send()
    }
}


module.exports = { addUser }