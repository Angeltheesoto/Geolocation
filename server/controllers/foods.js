const router = require("express").Router();
const DATA = {
  foods: ["banana", "pizza", "burger", "hotdog"],
};

router.get("/", (req, res) => {
  res.send(DATA);
});

module.exports = router;
