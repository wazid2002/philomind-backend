const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./src/config/db');
const lessonRoutes = require("./src/routes/lessonRoutes");

dotenv.config();
const app = express();


// Middleware
app.use(express.json());

// Connect MongoDB
connectDB();

//connecting lessonRoutes
app.use("/api", lessonRoutes);


app.listen(process.env.PORT || 5000, () => {
    console.log(`Server running on PORT ${process.env.PORT}`);
});
