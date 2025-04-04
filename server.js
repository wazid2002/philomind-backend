const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./src/config/db');
const lessonRoutes = require("./src/routes/lessonRoutes");
const profileRoutes= require("./src/routes/profileRoutes");
const registerRoutes=require("./src/routes/registerRoute");
const cors = require("cors")

dotenv.config();
const app = express();


// Middleware
app.use(express.json());
app.use(cors());

// Connect MongoDB
connectDB();

//connecting lessonRoutes
app.use("/api", lessonRoutes);
//connecting profileRoutes
app.use("/api",profileRoutes);
//connecting registerRoutes.js
app.use("/api",registerRoutes);


app.listen(process.env.PORT || 5000, () => {
    console.log(`Server running on PORT ${process.env.PORT}`);
});
