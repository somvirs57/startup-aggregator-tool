module.exports = (sequelize, DataTypes) => {
  const InvestorProfile = sequelize.define("InvestorProfile", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: "Users",
        key: "id",
      },
      allowNull: false,
    },
    investmentRange: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  InvestorProfile.associate = (models) => {
    InvestorProfile.belongsTo(models.User, {
      foreignKey: "userId",
      as: "user",
    });
  };

  return InvestorProfile;
};
