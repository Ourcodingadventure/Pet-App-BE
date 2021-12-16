const { UserModel } = require(`../models`);

const getProfile = (req, res) => {
  let id = req.body.jToken.id;
  console.log("id:", id);
  if (req.query.id) {
    id = req.query.id;
  }
  console.log("id:", id);
  UserModel.findById(id, {}, function (err, user) {
    if (!err && user) {
      res.send({
        message: "Got User successfully",
        user: user,
      });
    } else {
      res.status(500).send({
        message: "server error",
      });
    }
  });
};
module.exports = getProfile;
