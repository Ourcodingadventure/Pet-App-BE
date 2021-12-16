const { PetModel } = require(`../models`);

const returnPet = (req, res) => {
  const { id } = req.body.jToken;
  if (!req.params.id) {
    return res.status(409).send(
      `
      and pet id in params
    `
    );
  }
  PetModel.findByIdAndUpdate(
    req.params.id,
    {
      userID: null,
      adoptionStatus: "ready for adoption",
    },
    { new: true },
    function (err, pet) {
      if (!err && pet) {
        res.send({
          message: `${pet.petName} is available `,
          pet,
        });
      } else {
        res.status(500).send({
          message: "server error" + err,
        });
      }
    }
  );
};
module.exports = returnPet;
