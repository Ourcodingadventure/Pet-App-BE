const { UserModel, PetModel } = require(`../models`);

const updateUser = (req, res) => {
  const { id } = req.body.jToken;
  console.log("íd", id);
  // search for logged in user if it's not logged in user profile shouldnt be able to update this is not your profile.

  UserModel.findByIdAndUpdate(
    id,
    req.body,
    { new: true },
    function (err, user) {
      if (!err && user) {
        res.send({
          message: "Updated User successfully",
          user,
        });
      } else {
        res.status(500).send({
          message: "server error",
        });
      }
    }
  );
};
module.exports = updateUser;
