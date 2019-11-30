var Designation = require("../../api/designation/designation.model");

async function func(req, res, next) {
    const number = await Designation.countDocuments();
    if (number < 1) {
        var designations = [
            new Designation({
                name: "Admin"
            }),
            new Designation({
                name: "Manager"
            }),
            new Designation({
                name: "Employee/Team Lead"
            })
        ];
        for (var i = 0; i < designations.length; i++) {
            designations[i].save();
        }
    }
}
func();
module.exports = func;
