const { UserModel } = require("../models");
const bcrypt = require(`bcrypt-inzi`);

const createUser = async (req, res) => {
  const { newUser } = req.body;
  //save to db
  newUser.save((err, user) => {
    if (!err) {
      return res.status(200).send({
        user,
        message: "User registered successfully",
      });
    } else {
      return res.status(500).send({
        message: "Server error",
      });
    }
  });
};

module.exports = createUser;
