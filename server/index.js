const express = require("express");
const app = express();
const apiRouter = require("./routes/apiRoutes");
const foodRouter = require("./routes/foodRoutes");

require("dotenv").config();
const PORT = process.env.PORT;

// Routes
app.use("/api", apiRouter);
app.use("/foods", foodRouter);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
