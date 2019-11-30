(function () {
    'use strict';
    var mongoose = require('mongoose');
    var Schema = mongoose.Schema;
    var departmentSchema = new Schema({
        id: { type: String },
        name: { type: String }
    });

    const Department = mongoose.model('Department', departmentSchema)
    module.exports = Department
}());