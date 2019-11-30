var KRA_Attributes = require("../../api/k.r.a_attributes/k.r.a.attr.model");

async function func(req, res, next) {
    const number = await KRA_Attributes.countDocuments();
    if (number < 1) {
        var kra_attributes = [
            new KRA_Attributes({
                name: "Meet Deadlines"
            }),
            new KRA_Attributes({
                name: "Work Hours"
            }),
            new KRA_Attributes({
                name: "Team Spirit/Coordination with others"
            }),
            new KRA_Attributes({
                name: "Creative"
            }),
            new KRA_Attributes({
                name: "Performance"
            }),
            new KRA_Attributes({
                name: "Interpersonal Skills"
            }),
            new KRA_Attributes({
                name: "Supervision Rate"
            }),
            new KRA_Attributes({
                name: "Leadership"
            }),
            new KRA_Attributes({
                name: "Culturally Fit"
            }),
            new KRA_Attributes({
                name: "Passionate"
            })
        ];
        for (var i = 0; i < kra_attributes.length; i++) {
            kra_attributes[i].save();
        }
    }
}
func();
module.exports = func;
