module.exports = (sequelize, DataTypes) => {
  const MentorProfile = sequelize.define("MentorProfile", {
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
    expertise: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  MentorProfile.associate = (models) => {
    MentorProfile.belongsTo(models.User, { foreignKey: "userId", as: "user" });
  };

  return MentorProfile;
};
