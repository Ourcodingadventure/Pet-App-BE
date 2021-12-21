const express = require("express");
const getPetById = require("../controller/getPetById");
const getPets = require("../controller/getPets");
const api = express.Router();

app.get("/pets", getPets);
app.get("/pet/:id", getPetById);
