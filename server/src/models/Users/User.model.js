module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: {
      type: DataTypes.ENUM("entrepreneur", "mentor", "investor"),
      allowNull: false,
    },
  });

  User.associate = (models) => {
    User.hasOne(models.EntrepreneurProfile, {
      foreignKey: "userId",
      as: "entrepreneurProfile",
    });
    User.hasOne(models.MentorProfile, {
      foreignKey: "userId",
      as: "mentorProfile",
    });
    User.hasOne(models.InvestorProfile, {
      foreignKey: "userId",
      as: "investorProfile",
    });
  };

  return User;
};
