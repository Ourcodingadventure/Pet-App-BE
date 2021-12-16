const { UserModel } = require(`../models`);
const getUsers = (req, res) => {
  UserModel.find(req.query, function (err, users) {
    if (!err && users) {
      return res.send({
        message: "Got Users successfully",
        users,
      });
    } else {
      return res.status(500).send({
        message: "server error",
      });
    }
  });
};
module.exports = getUsers;
