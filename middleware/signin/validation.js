const authenticateUserEmailPass = (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(403).send(`
              please send email and password in json body
              e.g:
              {
              email : "abc@gmail.com",
              password: "1234",
              }
           `);
    return;
  }
  next();
};

module.exports = authenticateUserEmailPass;
