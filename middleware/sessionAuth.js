const jwt = require("jsonwebtoken");
const { SERVER_SECRET } = require("../config");
const sessionAuth = (req, res, next) => {
  //check cookies for jtoken
  if (!req.cookies.jToken) {
    res.status(401).send("include http-only credentials with every request");
    return;
  } //make sure its a token for my user
  jwt.verify(req.cookies.jToken, SERVER_SECRET, function (err, decodedData) {
    if (!err && decodedData) {
      const issueDate = decodedData.iat * 1000; // 1000 miliseconds because in js ms is in 16 digits
      const nowDate = new Date().getTime();
      const diff = nowDate - issueDate; // 86400,000
      // if (diff > 30000000) {
      //   // expire after 5 min (in milis)
      //   res.clearCookie("jToken");
      //   res.status(401).send({
      //     message: "token expired",
      //   });
      // } else {
      const token = jwt.sign(
        {
          id: decodedData.id,
          email: decodedData.email,
          firstName: decodedData.firstName,
          lastName: decodedData.lastName,
          role: decodedData.role,
          phoneNumber: decodedData.phoneNumber,
        },
        SERVER_SECRET
      );
      res.cookie("jToken", token, {
        maxAge: 86_400_000,
        // httpOnly: true,
        domain: "http://localhost:3000",
        sameSite: "none",
        secure: false,
      });
      req.body.jToken = decodedData;
      req.headers.jToken = decodedData;
      next();
      // }
    } else {
      res.status(401).send({
        message: "please login again",
      });
    }
  });
};
module.exports = sessionAuth;
