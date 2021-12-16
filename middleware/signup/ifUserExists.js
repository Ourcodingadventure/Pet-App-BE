const { UserModel } = require(`../../models`);

const ifUserExists = async (req, res, next) => {
  const { email } = req.body;
  //checks for existing email
  const user = await UserModel.findOne({ email: email });
  //if exists throw err
  if (user) {
    return res.status(409).send({
      message: "User already exists",
    }); //user verified
  }
  next();
};
module.exports = ifUserExists;
