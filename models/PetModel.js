const mongoose = require("mongoose");

const PetSchema = new mongoose.Schema({
  type: { type: String, required: true },
  petName: { type: String, required: true },
  adoptionStatus: { type: String, required: true },
  picture: { type: String, required: true },
  height: { type: Number, required: true },
  weight: { type: Number, required: true },
  color: { type: String, required: true },
  bio: { type: String, required: true },
  allergies: { type: Boolean, required: true },
  dietaryRestrictions: { type: String, required: true },
  breed: { type: String, required: true },
  userID: { type: String, ref: "user" },
});
const PetModel = mongoose.model("pet", PetSchema);

module.exports = PetModel;
