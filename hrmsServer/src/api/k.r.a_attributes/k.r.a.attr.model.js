(function () {
    'use strict';
    var mongoose = require('mongoose');
    var Schema = mongoose.Schema;
    var kraAttrSchema = new Schema({
        id: { type: String },
        name: { type: String }
    });

    const kraAttributes = mongoose.model('kraAttributes', kraAttrSchema)
    module.exports = kraAttributes
}());