const express = require("express");
const authV1Routes = require("./v1");

const router = express.Router();

router.use("/v1", authV1Routes);

module.exports = router;
