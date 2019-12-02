const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const AutoIncrement = require("mongoose-sequence")(mongoose);

const userSchema = new mongoose.Schema({
    _id: {
        type: Number,
        AutoIncrement: true,
        primaryKey: true
    },
    prefix: {
        type: String,
        default: "v"
    },
    name: {
        type: String,
        trim: true,
        required: true,
        minlength: 2
    },
    email: {
        type: String,
        retuired: true,
        unique: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Email is invalid");
            }
        }
    },
    password: {
        type: String,
        trim: true,
        validate(value) {
            if (value.toLowerCase().includes("password")) {
                throw new Error("password cannot contain 'password' ");
            }
        }
    },
    designation_id: {
        type: mongoose.Schema.Types.ObjectId,
        trim: true,
        required: true,
        ref: "designation"
    },
    department_id: {
        type: mongoose.Schema.Types.ObjectId,
        trim: true,
        ref: "department"
    },
    reportingManager: {
      
    },

    dateOfJoining: {
        type: Date,
        default: new Date()
    },

    jobStatus: {
        type: String,
        default: "working"
    },
    kraAttributes: {},
    token: {
        type: String
    }
});


userSchema.plugin(AutoIncrement, { inc_field: "_id", prefix: 'v' });

userSchema.virtual('designation_details', {
    ref: 'designation',
    localField: 'designation_id',
    foreignField: '_id'
})

userSchema.virtual('department_details', {
    ref: 'department',
    localField: 'department_id',
    foreignField: '_id'
})


userSchema.methods.generateAuthToken = async function () {
    const user = this;
    const token = jwt.sign({ _id: user._id }, "secretKey");
    user.token = token;
    await user.save();
    return token;
};

userSchema.statics.findByCredentials = async (email, password) => {
    const user = await User.findOne({ email });
    console.log(user)
    if (!user) {
        throw new Error("Unable to login");
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        console.log(email, password)
        throw new Error("Password not match");
    }
    return user;
};

userSchema.pre("save", async function (next) {
    const user = this;
    user.password = (await user.name) + user.dateOfJoining.getFullYear();
    if (user.isModified("password")) {
        user.password = await bcrypt.hash(user.password, 8);
    }
    next();
});

const User = mongoose.model('User', userSchema);
module.exports = User;


