const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  role: { type: String, required: true },
  bio: String,
  cart: [
    {
      petId: { type: mongoose.SchemaTypes.ObjectId, ref: "pet" },
    },
  ],
});
const UserModel = mongoose.model("user", userSchema);

module.exports = UserModel;
