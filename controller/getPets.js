const { PetModel } = require(`../models`);

const getPets = (req, res) => {
  let pageNumber = req.query.pageNumber;
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
  })
    .skip(pageNumber * 10)
    .limit(10);
};
module.exports = getPets;
