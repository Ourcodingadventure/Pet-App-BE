require("dotenv").config();
module.exports = {
  PORT: process.env.PORT,
  SERVER_SECRET: process.env.SERVER_SECRET,
  databaseURL: process.env.databaseURL,
};
