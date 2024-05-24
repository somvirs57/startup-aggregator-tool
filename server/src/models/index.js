const Sequelize = require("sequelize");
const { sequelize } = require("../config/db.config");

// db initailization using sequelize
const User = require("./user.model")(sequelize, Sequelize.DataTypes);

const syncModels = async () => {
  try {
    await sequelize.sync({ alter: true }); // Use { force: true } to drop and recreate tables
    console.log("All models were synchronized successfully.");
  } catch (error) {
    console.error("Unable to sync models:", error);
  }
};

module.exports = {
  User,
  sequelize,
  syncModels,
};
