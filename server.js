const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./src/config/db');
const {requireAuth,createClerkClient}= require("@clerk/express");
const {Clerk} = require('@clerk/clerk-sdk-node');

dotenv.config();
const app = express();
const clerkClient = createClerkClient({ secretKey: process.env.CLERK_SECRET_KEY });


// Middleware
app.use(express.json());

// Connect MongoDB
connectDB();

app.get("/",requireAuth(),async(req,res)=>{
    try{
        const getUsers = await clerkClient.users.getUserList();
        res.json(getUsers)
    }
    catch(error){
        console.log("Error Fetching users from clerk:",error);
        res.status(500).json({error:"Internal Server Error"});
    };
});

app.listen(process.env.PORT || 5000, () => {
    console.log(`Server running on PORT ${process.env.PORT}`);
});
