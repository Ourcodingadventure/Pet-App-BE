const { PetModel } = require("../models");

function createPet(req, res) {
  let {
    type,
    petName,
    adoptionStatus,
    height,
    weight,
    color,
    bio,
    allergies,
    dietaryRestrictions,
    breed,
  } = req.body;
  // jToken inside req.bod
  //  multer empties our req.body you wont find jtoken there
  console.log("color:", color);
  const newPet = new PetModel({
    type,
    petName,
    adoptionStatus,
    picture: req.files[0].filename,
    height,
    weight,
    color,
    bio,
    allergies,
    dietaryRestrictions,
    breed,
  });

  //save to db
  newPet.save((err, pet) => {
    console.log("create pet", pet);
    if (!err) {
      return res.status(200).send({
        pet,
        message: "Pet registered successfully to the system",
      });
    } else {
      console.log("err", err);
      return res.status(500).send({
        message: "Server error" + err,
      });
    }
  });
}

module.exports = createPet;
