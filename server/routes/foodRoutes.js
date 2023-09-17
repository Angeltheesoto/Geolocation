const express = require("express");
const router = express.Router();
const foodsRoute = require("../controllers/foods");

router.use("/myfoods", foodsRoute);

module.exports = router;
