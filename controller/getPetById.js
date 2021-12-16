const { PetModel } = require(`../models`);

const getPetById = (req, res) => {
  PetModel.findById(req.params.id, {}, function (err, pet) {
    if (!err && pet) {
      res.send({
        message: "Got pet successfully",
        pet,
      });
    } else {
      res.status(500).send({
        message: "server error",
      });
    }
  });
};
module.exports = getPetById;
