const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const postRoutes = require("./routes/postRoutes");

const authRoutes = require("./routes/auth");

const app = express();

// Middleware
app.use(cors({
  origin: "*"
}));
app.use(express.json());

// Routes
app.use(express.json());
app.use("/api/auth", authRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("API is running 🚀");
});

mongoose.connect(process.env.MONGO_URI)
.then(() => {
  console.log("MongoDB connected ✅");

  // ✅ NOW ADD ROUTES HERE
  app.use("/api", postRoutes);

  // ✅ START SERVER AFTER DB CONNECTS
  app.listen(5000, () => {
    console.log("Server running on port 5000");
  });

})
.catch(err => console.log("MongoDB error ❌", err));