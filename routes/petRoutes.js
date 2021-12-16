const express = require("express");
const addToCart = require("../controller/addToCart");
const adoptOrFoster = require("../controller/adoptOrFoster");
const returnPet = require("../controller/returnPet");
const api = express.Router();

api.post("/pet/:id/return", returnPet);
api.post("/pet/:id/adopt", adoptOrFoster);
module.exports = api;
