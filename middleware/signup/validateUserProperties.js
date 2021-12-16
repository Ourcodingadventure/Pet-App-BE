const validateUserProperties = (req, res, next) => {
  let { firstName, lastName, email, password, confirmPassword, phoneNumber } =
    req.body;
  //if one of these variables does not exist throw err
  if (
    !firstName ||
    !lastName ||
    !email ||
    !password ||
    !confirmPassword ||
    !phoneNumber
  ) {
    return res.status(403).send(`
        please send firstName,lastName, email, password  in json body.
        e.g:
        {
            "firstName": "jordan",
            "lastName": "Avitan",
            "email": "Javitan0309@gmail.com",
            "password": "abc123"
            "phoneNumber":"1234567890"
            "confirmPassword":"abc123"
        }`);
  }
  next();
};
module.exports = validateUserProperties;
