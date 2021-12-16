function authenticateAdmin(req, res, next) {
  console.log(req.body.jToken.role);
  if (req.body.jToken.role === "admin") {
    next();
  } else {
    return res.status(403).send({
      message: "Do not proceed.",
    });
  }
}
module.exports = authenticateAdmin;
