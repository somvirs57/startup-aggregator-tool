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
      type: DataTypes.ENUM(
        "BELOW_50K",
        "FROM_50K_TO_100K",
        "FROM_100K_TO_500K",
        "FROM_500K_TO_1M",
        "FROM_1M_TO_5M",
        "FROM_5M_TO_10M",
        "ABOVE_10M"
      ),
      allowNull: false,
    },
    preferredIndustries: {
      type: DataTypes.ARRAY(
        DataTypes.ENUM(
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
        )
      ),
      allowNull: false,
    },
    portfolioSize: {
      type: DataTypes.ENUM(
        "SMALL",
        "MEDIUM",
        "LARGE",
        "VERY_LARGE",
        "DIVERSIFIED"
      ),
      allowNull: false,
    },
    investmentStage: {
      type: DataTypes.ENUM(
        "SEED",
        "EARLY_STAGE",
        "GROWTH_STAGE",
        "LATE_STAGE",
        "PRE_IPO"
      ),
      allowNull: false,
    },
    investmentThesis: {
      type: DataTypes.ENUM(
        "TECH_FOCUSED",
        "SUSTAINABILITY",
        "SOCIAL_IMPACT",
        "HIGH_GROWTH",
        "MARKET_LEADER",
        "DIVERSIFIED",
        "INDUSTRY_SPECIFIC"
      ),
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
