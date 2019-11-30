'use strict';
var Designation = require('./designation.model');

const showDesignation = async (req, res) => {
    try {
        const designation = await Designation.find()
        if (!designation) {
            return res.status(404).send()
        }
        res.send(designation)
    }
    catch (e) {
        console.log(e)
        return res.status(500).send()

    }
}

module.exports = { showDesignation }