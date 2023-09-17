const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  firstname: {
    type: String,
    min: 3,
    max: 20,
    require: true,
    unique: false,
  },
  lastname: {
    type: String,
    min: 3,
    max: 20,
    require: true,
    unique: false,
  },
});

module.exports = mongoose.model("User", UserSchema);
