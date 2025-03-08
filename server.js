const express = require("express");
const sequelize = require("./models/db");  // Import Sequelize instance
const User = require("./models/User");
const HelpRequest = require("./models/HelpRequest"); // Import the new model

const userRoutes = require("./routes/user");  // Import user routes
const helpRequestRoutes = require("./routes/helpRequests");  // Import help request routes


const app = express();
app.use(express.json());

// Register Routes
app.use("/api/users", userRoutes);
app.use("/api/help-requests", helpRequestRoutes);  // Register new routes

// sequelize.authenticate()
//   .then(() => console.log("✅ Connected to RDS"))
//   .catch(err => console.error("❌ Unable to connect to the RDS database:", err));
  
// // Sync database (Creates tables if they don’t exist)
// sequelize.sync({ alter: true })
//   .then(() => {
//     console.log("✅ Database & tables created!");
//   })
//   .catch((error) => {
//     console.error("❌ Error syncing database:", error.message, error);
//   });

// Test Route
app.get("/", (req, res) => {
  res.send("Disaster Relief API is running!");
});

// Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
