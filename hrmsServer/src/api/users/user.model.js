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
    designation: {
        type: String,
        trim: true,
        required: true
    },
    department: {
        type: String,
        trim: true,
        required: true
    },
    reportingManager: {
        managerId: {
            type: Number,
            required: true,
            trim: true
        },
        managerName: {
            type: String,
            trim: true,
            required: true
        }
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
})

userSchema.plugin(AutoIncrement, { inc_field: "_id", prefix: 'v' });

userSchema.methods.generateAuthToken = async function () {
    const user = this;
    const token = jwt.sign({ _id: user._id }, "secretKey");
    user.token = token;
    await user.save();
    return token;
};

userSchema.statics.findByCredentials = async (email, password) => {
    console.log(email,password)
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
   // console.log(user.password)
    if (user.isModified("password")) {
        user.password = await bcrypt.hash(user.password, 8);
    }
    next();
});

const User = mongoose.model('User', userSchema);
async function fun() {
    const number = await User.countDocuments();
    if (number < 1) {
        const obj = {
            name: "mern",
            email: "rahul@gmail.com",
            designation: "software",
            department: "mern",
            reportingManager: { managerId: 1, managerName: "ajit" }
        };
        const e = new User(obj);
        e.save();
    }
}
fun();

module.exports = User;


