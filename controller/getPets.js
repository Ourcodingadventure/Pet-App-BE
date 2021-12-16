const { PetModel } = require(`../models`);

const getPets = (req, res) => {
  console.log("query:", req.query);
  PetModel.find(req.query, function (err, pet) {
    if (!err && pet) {
      console.log(pet);
      return res.send({
        message: "Got Pets successfully",
        pet,
      });
    } else {
      return res.status(500).send({
        message: "server error",
      });
    }
  });
};
module.exports = getPets;
