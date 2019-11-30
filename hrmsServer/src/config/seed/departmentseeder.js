var mongoose = require('mongoose')
require('../db/mongoose')
var Department = require('../../api/department/department.model');

module.exports = async (req, res, next) => {
    console.log('kfjl;skdajflkjsdal')
    var departments = [
        new Department({
            "type": "Sales"
        }),
        new Department({
            "type": "Human Resource"
        }),
        new Department({
            "type": "MERN"
        }),
        new Department({
            "type": "MEAN"
        }),
        new Department({
            "type": "JAVA"
        }),
        new Department({
            "type": "BLOCKCHAINING"
        }),
        new Department({
            "type": "PHP"
        })
    ];
    const number = await Department.countDocuments();
    if (number < 1) {
        console.log("jhiufgc")
        for (var i = 0; i < departments.length; i++) {
            departments[i].save()
        }
    }
    return next()
}
