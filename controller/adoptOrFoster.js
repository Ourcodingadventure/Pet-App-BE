const { PetModel } = require(`../models`);

const adoptOrFoster = (req, res) => {
  const { id } = req.body.jToken;
  const { adoptionStatus } = req.body;
  if (!adoptionStatus || !req.params.id) {
    return res.status(409).send(
      `
      please send following in json body e.g:
      {
        "adoptionStatus":""fostered"
      }
      and id in params
    `
    );
  }
  console.log("adoptionstatus", adoptionStatus, id, req.params.id);
  PetModel.findByIdAndUpdate(
    req.params.id,
    {
      userID: id,
      adoptionStatus,
    },
    { new: true },
    function (err, pet) {
      if (!err && pet) {
        res.send({
          message: `${pet.petName} ${adoptionStatus} successfully`,
          pet,
        });
      } else {
        console.log("err", err);
        res.status(500).send({
          message: "server error",
        });
      }
    }
  );
};
module.exports = adoptOrFoster;
