const {
  User,
  EntrepreneurProfile,
  MentorProfile,
  InvestorProfile,
} = require("../models");

exports.createUser = async (userData) => {
  const { name, email, password, role, ...profile } = userData;
  const user = await User.create({ name, email, password, role });
  if (role === "entrepreneur") {
    await EntrepreneurProfile.create({ userId: user.id, ...profile });
  } else if (role === "mentor") {
    await MentorProfile.create({ userId: user.id, ...profile });
  } else if (role === "investor") {
    await InvestorProfile.create({ userId: user.id, ...profile });
  }
  return user;
};
