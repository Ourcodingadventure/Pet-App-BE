const express = require("express");
const api = express.Router();
const createUser = require(`../controller/CreateUser`);
const signIn = require(`../controller/SignIn`);
const confirmPassAuth = require(`../middleware/signup/confirmPassAuth`);
const ifUserExists = require("../middleware/signup/ifUserExists");
const hashPass = require(`../middleware/signup/hashPass`);
const validateUserProperties = require(`../middleware/signup/validateUserProperties`);
const authenticateUserEmailPass = require("../middleware/signin/validation");
const checkForEmail = require("../middleware/signin/authentication");
// /auth nested routes post requests

api.post(
  "/signup",
  validateUserProperties,
  ifUserExists,
  confirmPassAuth,
  hashPass,
  createUser
);

api.post("/signin", authenticateUserEmailPass, checkForEmail, signIn);

module.exports = api;
