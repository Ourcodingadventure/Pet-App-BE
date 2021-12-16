const express = require("express");
const addToCart = require("../controller/addToCart");
const deleteFromCart = require("../controller/deleteFromCart");
const getProfile = require("../controller/getProfile");
const getUserCartAndOwned = require("../controller/getUserCartAndOwned");
const getUsers = require("../controller/getUsers");
const updateUser = require("../controller/updateUser");
const api = express.Router();

api.get("/profile", getProfile);

api.put("/user", updateUser);
api.delete("/user/:id/cart", deleteFromCart);
api.put("/user/:id/cart", addToCart);
api.get("/user/pets", getUserCartAndOwned);
module.exports = api;
