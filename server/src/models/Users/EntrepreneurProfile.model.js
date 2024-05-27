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
    startupStage: {
      type: DataTypes.ENUM(
        "IDEA",
        "PROTOTYPE",
        "PRE_SEED",
        "SEED",
        "EARLY_STAGE",
        "GROWTH",
        "SCALE_UP",
        "ESTABLISHED"
      ),
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
    businessModel: {
      type: DataTypes.ENUM(
        "B2B",
        "B2C",
        "B2B2C",
        "C2C",
        "SAAS",
        "PAAS",
        "IAAS",
        "SUBSCRIPTION",
        "FREEMIUM",
        "MARKETPLACE",
        "DIRECT_SALES",
        "ADVERTISING",
        "AFFILIATE",
        "E_COMMERCE",
        "FRANCHISE"
      ),
      allowNull: false,
    },
    fundingNeeds: {
      type: DataTypes.ENUM(
        "PRODUCT_DEVELOPMENT",
        "MARKETING",
        "SALES",
        "HIRING",
        "OPERATIONS",
        "RESEARCH_AND_DEVELOPMENT",
        "LEGAL_AND_COMPLIANCE",
        "EXPANSION",
        "TECHNOLOGY_UPGRADE",
        "WORKING_CAPITAL"
      ),
      allowNull: false,
    },
    pitchDeckUrl: {
      type: DataTypes.STRING,
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
