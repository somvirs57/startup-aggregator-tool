const { validationResult } = require("express-validator");
const userService = require("../services/user.service");

exports.signupUser = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    userService.createUser(req.body);
    console.log(req.body);
    return res.status(201).json({ message: "signup" });
  } catch (error) {}
};

exports.signinUser = async (req, res, next) => {
  return res.json({ message: "auth signin" });
};
