const app = require("./app");
const dotenv = require("dotenv");
const {
  createDatabaseIfNotExists,
  createTableIfNotExists,
} = require("../src/config/db.config");
const { syncModels } = require("./models");

dotenv.config();

const PORT = process.env.PORT || 8080;

const startServer = async () => {
  try {
    await createDatabaseIfNotExists(); // Ensure the database exists
    await createTableIfNotExists();
    await syncModels(); // Sync Sequelize models

    app.listen(PORT, () => {
      console.log(`Server running at http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Failed to start the server:", error);
  }
};

startServer();
