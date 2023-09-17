const router = require("express").Router();
const User = require("../models/Users");
const DATA = {
  firstNames: ["Angel", "Kevin", "Adolfo", "Jamie"],
  lastNames: ["Soto", "Nieves", "Gudino", "Carso"],
};

router.get("/", (req, res) => {
  res.send(DATA);
});

module.exports = router;
