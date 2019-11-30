'use strict';
var Department = require('./department.model');

const showDepartments = async (req, res) => {
    try {
        const departments = await Department.find()
        if (!departments) {
            return res.status(404).send()
        }
        res.send(departments)
    }
    catch (e) {
        console.log(e)
        return res.status(500).send()

    }
}

module.exports = { showDepartments }