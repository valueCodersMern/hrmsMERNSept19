'use strict';
var KRA_attributes = require('./k.r.a.attr.model');

const showkraAttributes = async (req, res) => {
    try {
        const kra_attributes = await KRA_attributes.find()
        if (!kra_attributes) {
            return res.status(404).send()
        }
        res.send(kra_attributes)
    }
    catch (e) {
        console.log(e)
        return res.status(500).send()

    }
}

module.exports = { showkraAttributes }