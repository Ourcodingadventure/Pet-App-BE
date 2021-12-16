const { UserModel } = require(`../models`);

const addToCart = async (req, res) => {
  try {
    const checkPetExists = await UserModel.findOne({
      _id: req.body.jToken.id,
      "cart.petId": req.body.cart.petId,
    });

    if (checkPetExists) {
      message = "pet is already in your cart";
      return res.status(403).send({
        message,
      });
    }

    const updateUser = await UserModel.findOneAndUpdate(
      {
        _id: req.body.jToken.id,
      },
      { $push: { cart: [req.body.cart] } },
      { new: true }
    );
    res.send({
      user: updateUser,
    });
  } catch (err) {
    res.status(500).send({
      message: "there was an error" + err,
    });
  }
};
module.exports = addToCart;
