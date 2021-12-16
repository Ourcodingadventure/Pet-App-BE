const { UserModel, CartModel } = require(`../models`);

const deleteFromCart = async (req, res) => {
  try {
    const checkPetExists = await UserModel.findOne({
      _id: req.body.jToken.id,
      "cart.petId": req.body.cart.petId,
    });

    console.log("req.body", req.body.cart);
    if (checkPetExists) {
      const updateUser = await UserModel.findOneAndUpdate(
        {
          _id: req.body.jToken.id,
        },
        { $pull: { cart: req.body.cart } },
        { new: true }
      );
      res.send({
        user: updateUser,
      });
    } else {
      message = "pet is not in your cart";
      return res.status(403).send({
        message,
      });
    }
  } catch (err) {
    res.status(500).send({
      message: "there was an error" + err,
    });
  }
};
module.exports = deleteFromCart;
