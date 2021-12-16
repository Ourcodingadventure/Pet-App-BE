const cookieParser = require("cookie-parser");
const logout = (req, res) => {
  res.cookie("jToken", "", {
    maxAge: 0,
    httpOnly: true,
  });
  res.clearCookie("jToken");
  res.send({
    message: "logout succesfully",
  });
};
module.exports = logout;
