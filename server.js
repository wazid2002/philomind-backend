const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./src/config/db');
const lessonRoutes = require("./src/routes/lessonRoutes");
const profileRoutes= require("./src/routes/profileRoutes");
const registerRoutes=require("./src/routes/registerRoute");
const lessonProgress = require ("./src/routes/lessonProgress");
const synclessons = require("./src/routes/synclessons");
const aiRoute = require("./src/routes/aiRoute");
const psyRoutes= require("./src/routes/psyRoutes");
const videos = require("./src/routes/videoRoutes");
const cors = require("cors");


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
//connecting registerRoutes
app.use("/api",registerRoutes);
//connecting lessonProgress
app.use("/api",lessonProgress);
//connecting synclessons
app.use("/api",synclessons);
//connecting aiRoute
app.use("/api",aiRoute);
//connecting psyRoutes
app.use("/api",psyRoutes);
//videoroute
app.use("/api",videos)


app.listen(process.env.PORT || 5000, () => {
    console.log(`Server running on PORT ${process.env.PORT}`);
});
