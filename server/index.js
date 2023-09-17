const express = require("express");
const app = express();
const apiRouter = express.Router();

// controllers (functions)
const userRoute = require("./routes/users");

require("dotenv").config();
const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Server is running!");
});

// views (routes)
apiRouter.use("/users", userRoute);
apiRouter.use("/signin", userRoute);
apiRouter.use("/logout", userRoute);

app.use("/api", apiRouter);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
