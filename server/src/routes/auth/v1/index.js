const express = require("express");
const { check } = require("express-validator");
const authController = require("../../../controllers/auth.controller");

const router = express.Router();

router.post(
  "/signup",
  [
    check("name", "Name is required").not().isEmpty(),
    check("email", "Please include a valid email").isEmail(),
    check(
      "password",
      "Please enter a password with 6 or more characters"
    ).isLength({ min: 6 }),
  ],
  authController.signupUser
);

router.post("/signin", authController.signinUser);

module.exports = router;
