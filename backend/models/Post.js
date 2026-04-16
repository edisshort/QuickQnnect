const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  title: String,
  desc: String,
  cat: String, // task or community
  loc: String,
  lat: Number,
  lng: Number,
  reward: Number,
  user: String,
  college: String,
  phone: String,
  // 🔥 ADD THIS
  accepted: {
    type: Boolean,
    default: false
  },
  acceptedBy: String,

  createdAt: {
    type: Date,
    default: Date.now
  }
  
});

module.exports = mongoose.model("Post", postSchema);