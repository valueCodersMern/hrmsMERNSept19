var Department = require("../../api/department/department.model");

async function func(req, res, next) {
    const number = await Department.countDocuments();
    if (number < 1) {
        var departments = [
            new Department({
                name: "Sales"
            }),
            new Department({
                name: "Human Resource"
            }),
            new Department({
                name: "MERN"
            }),
            new Department({
                name: "MEAN"
            }),
            new Department({
                name: "JAVA"
            }),
            new Department({
                name: "BLOCKCHAINING"
            }),
            new Department({
                name: "PHP"
            })
        ];
        for (var i = 0; i < departments.length; i++) {
            departments[i].save();
        }
    }
}
func();
module.exports = func;
