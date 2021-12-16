const { UserModel, PetModel } = require(`../models`);

const getUserCartAndOwned = async (req, res) => {
  //authenticate
  const { jToken } = req.body;
  console.log("request", req.body.jToken);
  // Populate
  try {
    const userSavedPets = await PetModel.find({ userID: jToken.id }, {});
    const user = await UserModel.findById(
      jToken.id,
      "_id lastName firstName phoneNumber role"
    ).populate({
      path: "cart.petId",
      model: PetModel,
    });

    if (user) {
      res.send({
        message: "here are your pets and cart",
        user,
        userSavedPets,
      });
    } else {
      res.status(403).send({
        message: "please log in again",
      });
    }
  } catch (err) {
    res.status(500).send({
      message: "there was an error" + err,
    });
  }
};
module.exports = getUserCartAndOwned;
