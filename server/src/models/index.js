const Sequelize = require("sequelize");
const { sequelize } = require("../config/db.config");

// db initailization using sequelize
const User = require("./Users/User.model")(sequelize, Sequelize.DataTypes);
const EntrepreneurProfile = require("./Users/EntrepreneurProfile.model")(
  sequelize,
  Sequelize.DataTypes
);
const MentorProfile = require("./Users/MentorProfile.model")(
  sequelize,
  Sequelize.DataTypes
);
const InvestorProfile = require("./Users/InvestorProfile.model")(
  sequelize,
  Sequelize.DataTypes
);

const syncModels = async () => {
  try {
    await sequelize.sync({ alter: true }); // Use { force: true } to drop and recreate tables
    console.log("All models were synchronized successfully.");
  } catch (error) {
    console.error("Unable to sync models:", error);
  }
};

const db = {
  User,
  EntrepreneurProfile,
  MentorProfile,
  InvestorProfile,
  sequelize,
  syncModels,
};

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

module.exports = db;
