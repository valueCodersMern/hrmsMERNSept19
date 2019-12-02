const jwt = require("jsonwebtoken");
const User = require("../users/user.model");
const userauth = async (req, res, next) => {
  try {
    const token = req.header("Authorization").replace("Bearer ", "");
    const decoded = jwt.verify(token, "secretKey");
    const user = await User.findOne({ _id: decoded._id, token: token });
    if (user.designation_id.toString() !== '5de4b34078b47a2560e4b090') {
      throw new Error("you do not access to add user");
    }
    req.token = token;
    req.user = user;
    next();
  } catch (e) {
    console.log(e)
    res.status(401).send({ error: "Please authenticate"});
  }
};
module.exports = userauth;
