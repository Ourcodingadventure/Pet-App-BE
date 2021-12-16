const { UserModel } = require("../../models");
const bcrypt = require(`bcrypt-inzi`);
const hashPass = async (req, res, next) => {
  console.log("hi");
  let { firstName, lastName, email, password, role, phoneNumber } = req.body;
  //hash password
  let hashPassword = await bcrypt.stringToHash(password);
  const newUser = new UserModel({
    firstName,
    lastName,
    email,
    password: hashPassword,
    role: "user",
    phoneNumber,
  });
  req.body.newUser = newUser;
  next();
};
module.exports = hashPass;
