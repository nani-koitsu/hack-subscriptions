const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  googleID: String,
  subs: [{ type: mongoose.Schema.Types.ObjectId, ref:'Subs' }]
});

const User = mongoose.model("User", userSchema);

module.exports = User;
