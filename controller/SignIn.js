const { UserModel } = require("../models");
const bcrypt = require(`bcrypt-inzi`);
const jwt = require("jsonwebtoken");
const { SERVER_SECRET } = require("../config");
//auth for sign in
const signIn = (req, res) => {
  //take my object force into token
  const { user } = req.body;
  const token = jwt.sign(
    {
      id: user._id,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      role: user.role,
      phoneNumber: user.phoneNumber,
    },
    SERVER_SECRET
  );
  res.cookie("jToken", token, {
    maxAge: 86_400_000,
    httpOnly: true,
    sameSite: "none",
    secure: false,
  });
  res.status(200).send({
    message: "signed in succesfully",
    user,
    token,
  });
};

module.exports = signIn;
