// const { CartModel, UserModel } = require(`../models`);

// const getUserAndCart = (req, res) => {
//   //authenticate
//   const { jToken } = req.body;

//   CartModel.find({ userID: req.params.id }, (err, cart) => {
//     if (!err && cart)
//       UserModel.find({ _id: req.params.id }, (err, user) => {
//         let obj;
//         let inUser = user.map((i) => (obj = i));
//         console.log(inUser);
//         if (!err && user)
//           res.send({
//             message: `here is cart and user`,
//             obj,
//             cart,
//           });
//         else {
//           res.status(409).send({
//             message: `Could not find user`,
//           });
//         }
//       });
//     else {
//       res.status(409).send({
//         message: "Could not find a cart attached to this user",
//       });
//     }
//   });
// };
// module.exports = getUserAndCart;
