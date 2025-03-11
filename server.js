const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./src/config/db');

dotenv.config();
const app = express();

// Middleware
app.use(express.json());

// Connect MongoDB
connectDB();

app.listen(process.env.PORT || 5000, () => {
    console.log(`Server running on PORT ${process.env.PORT}`);
});
