const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const postRoutes = require("./routes/postRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());


// Test route
app.get("/", (req, res) => {
  res.send("API is running 🚀");
});

mongoose.connect("mongodb+srv://harshsolanki2203_db_user:f02qjI3mKsec3JmZ@cluster0.fepetlt.mongodb.net/quickqnect?retryWrites=true&w=majority")
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