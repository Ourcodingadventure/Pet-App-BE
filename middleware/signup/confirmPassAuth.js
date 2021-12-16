const confirmPassAuth = (req, res, next) => {
  console.log(req.body);
  let { password, confirmPassword } = req.body;
  if (password !== confirmPassword) {
    return res.status(409).send({
      message: "Passwords do not match.",
    });
  }
  next();
};
module.exports = confirmPassAuth;
