module.exports = (sequelize, DataTypes) => {
  const EntrepreneurProfile = sequelize.define("EntrepreneurProfile", {
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
    startupName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  EntrepreneurProfile.associate = (models) => {
    EntrepreneurProfile.belongsTo(models.User, {
      foreignKey: "userId",
      as: "user",
    });
  };

  return EntrepreneurProfile;
};
