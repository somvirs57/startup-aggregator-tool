const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");

// Routes
const authRoutes = require("./routes/auth");

const app = express();

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Middleware to handle URL-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

// Middleware to enable CORS
app.use(cors());

// Middleware to enhance your API's security
app.use(helmet());

// Middleware to log HTTP requests
app.use(morgan("combined"));

app.get("/", (req, res) =>
  res.json({ message: "welcome to startup aggregator" })
);
app.use("/auth", authRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

module.exports = app;
