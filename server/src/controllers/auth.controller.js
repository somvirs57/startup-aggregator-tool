const { validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
const userService = require("../services/user.service");
const { generateAccessToken } = require("../utils/helperFunctions");
const { User } = require("../models");
const { successResponse } = require("../utils/responseUtil");
const { textMessages } = require("../utils/textMessages");

exports.signupUser = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    await userService.createUser({ ...req.body, password: hashedPassword });
    return successResponse(res, textMessages.AUTH.SIGNUP_SUCCESS, 201);
  } catch (error) {
    next(error);
  }
};

exports.signinUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    const accessToken = generateAccessToken(user);
    return successResponse(res, textMessages.AUTH.SIGNUP_SUCCESS, 201, {
      accessToken,
    });
  } catch (error) {
    next(error);
  }
};
