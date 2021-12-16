const { UserModel } = require("../../models");
const bcrypt = require(`bcrypt-inzi`);

const checkForEmail = async (req, res, next) => {
  const { email, password } = req.body;
  const user = await UserModel.findOne({ email });
  if (user) {
    //decrypt PW to verify its my user
    const isPasswordMatched = await bcrypt.varifyHash(password, user.password);
    if (!isPasswordMatched)
      return res.status(403).send({
        message: "password not matched",
      });
    req.body.user = user;
    next();
  } else {
    res.status(404).send({
      message: "User not found ",
    });
  }
};
module.exports = checkForEmail;
