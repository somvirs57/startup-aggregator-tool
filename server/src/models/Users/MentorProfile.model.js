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
      type: DataTypes.ENUM(
        "BUSINESS_STRATEGY",
        "MARKETING",
        "SALES",
        "PRODUCT_DEVELOPMENT",
        "TECHNOLOGY",
        "OPERATIONS",
        "FINANCE",
        "FUNDRAISING",
        "LEGAL",
        "HR",
        "BRANDING",
        "CUSTOMER_SERVICE",
        "SUPPLY_CHAIN",
        "GROWTH_HACKING",
        "UX_UI_DESIGN"
      ),
      allowNull: false,
    },
    yearsOfExperience: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    industry: {
      type: DataTypes.ENUM(
        "TECHNOLOGY",
        "HEALTHCARE",
        "FINANCE",
        "EDUCATION",
        "E_COMMERCE",
        "AGRICULTURE",
        "TRANSPORTATION",
        "ENERGY",
        "REAL_ESTATE",
        "ENTERTAINMENT",
        "CONSUMER_GOODS",
        "TELECOMMUNICATIONS",
        "AUTOMOTIVE",
        "AEROSPACE",
        "FOOD_BEVERAGE",
        "RETAIL",
        "MEDIA",
        "BIOTECHNOLOGY",
        "HOSPITALITY",
        "MANUFACTURING",
        "LOGISTICS",
        "FINTECH",
        "CLEANTECH",
        "GAMING",
        "AI_ML",
        "CYBERSECURITY",
        "BLOCKCHAIN",
        "SAAS",
        "HARDWARE",
        "CONSULTING"
      ),
      allowNull: false,
    },
    mentorBio: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    availability: {
      type: DataTypes.ENUM(
        "FULL_TIME",
        "PART_TIME",
        "OCCASIONAL",
        "AD_HOC",
        "WEEKENDS",
        "EVENINGS",
        "WEEKDAYS"
      ),
      allowNull: false,
    },
  });

  MentorProfile.associate = (models) => {
    MentorProfile.belongsTo(models.User, { foreignKey: "userId", as: "user" });
  };

  return MentorProfile;
};
