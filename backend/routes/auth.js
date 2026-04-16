const express = require("express");
const router = express.Router();
const User = require("../models/User");


// 🔥 REGISTER
router.post("/register", async (req, res) => {
  try {
    console.log("BODY:", req.body);
    const { name, college, email, password } = req.body;

    const existing = await User.findOne({ email });
    if (existing) {
      return res.status(400).json({ msg: "User already exists" });
    }

    const user = new User({ name, college, email, password });
    await user.save();

    res.json(user);
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
});


// 🔥 LOGIN
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email, password });

    if (!user) {
      return res.status(400).json({ msg: "Invalid credentials" });
    }

    res.json(user);
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
});


module.exports = router;