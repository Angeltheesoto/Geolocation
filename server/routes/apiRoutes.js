const express = require("express");
const router = express.Router();
const userRoute = require("../controllers/users");

router.use("/users", userRoute);
router.use("/signin", userRoute);
router.use("/logout", userRoute);

module.exports = router;
