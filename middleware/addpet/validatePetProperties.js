const validatePetProperties = (req, res, next) => {
  let {
    type,
    petName,
    adoptionStatus,
    picture,
    height,
    weight,
    color,
    bio,
    allergies,
    dietaryRestrictions,
    breed,
  } = req.body;
  //if one of these variables does not exist throw err
  if (
    !type ||
    !petName ||
    !adoptionStatus ||
    !picture ||
    !height ||
    !weight ||
    !color ||
    !bio ||
    !allergies ||
    !dietaryRestrictions ||
    !breed
  ) {
    return res.status(403).send(`
              please send type, petName, adoptionStatus, picture,height, weight, color, bio,allergies,dietaryRestrictions, and breed in json body.
              e.g:
              {
                  "type": "dog",
                  "petName": "Chloe",
                  "adoptionStatus": "ready for adoption",
                  "picture": "https://animalso.com/wp-content/uploads/2017/06/blue-nose-pit_6.jpg",
                  "height":"30",
                  "weight":"15",
                  "color": "grey",
                  "bio":"Sweet dog loves everyone great with kids",
                  "allergies":"true",
                  "dietaryRestrictions":"no chicken or grain",
                  "breed":"PitBull"
              }`);
  }
  next();
};
module.exports = validatePetProperties;
