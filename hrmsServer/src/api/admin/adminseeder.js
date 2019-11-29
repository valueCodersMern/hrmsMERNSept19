var mongoose = require('mongoose')
require('../../../config/db/mongoose')
var Admin = require('./adminmodel');

module.exports = async (req, res, next) => {
    var admin = [
        new Admin({
            "name": "PRMVM",
            "email":"value@gmail.com",
            "password":"value"
        })]
       
    const number = await Admin.countDocuments();
    if (number < 1) {
            admin[0].save()
    }
    return next()
}
