(function () {
    'use strict';
    const validator = require('validator')
    const bcrypt = require('bcryptjs')
    const jwt = require('jsonwebtoken')
    var mongoose = require('mongoose');
    var Schema = mongoose.Schema;
    var adminSchema = new Schema({
        name: { type: String },
        email: {
            type: String,
            unique: true,
        },
        password: {
            type: String,
        }
        
      
    });

    adminSchema.methods.generateAuthToken = async function () {
        const admin = this
        const token = jwt.sign({ _id: admin._id }, 'thisismytoken')
        admin.token = token
        await admin.save()
        return token
    } 

    adminSchema.statics.findByCredentials = async (email, password) => {
        const admin = await Admin.findOne({ email })
        if (!admin) {
            throw new Error('Unable to login')
        }
        const isMatch = await bcrypt.compare(password, admin.password)
        if (!isMatch) {
            throw new Error('Unable to login')
        }
        return user
    } 

    adminSchema.pre('save', async function (next) {
        const admin = this
        if (admin.isModified('password')) {
            admin.password = await bcrypt.hash(admin.password, 8)
        }
        next()
    })


const Admin = mongoose.model('Admin', adminSchema)
    module.exports = Admin
}());