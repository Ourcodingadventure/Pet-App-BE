const { PetModel } = require("../models");
const editPet = (req, res) => {
  req.body = { ...req.body, picture: req.files[0].filename };
  const { id } = req.params;
  PetModel.findByIdAndUpdate(id, req.body, { new: true }, function (err, pet) {
    if (!err && pet) {
      res.send({
        message: "edited pet successfully",
        pet,
      });
    } else {
      console.log(err);
      res.status(500).send({
        message: "server error" + err,
      });
    }
  });
};
module.exports = editPet;
