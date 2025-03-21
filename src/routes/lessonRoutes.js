const express = require("express");
const LessonContent = require("../models/lessonContent");
const LessonCategory= require("../models/lessonCategory");


const router=express.Router();

router.get("/categories",async(req, res)=>{
    try{
        const categories=await LessonCategory.find();
        res.status(200).json(categories);
    }catch{
        res.status(500).json({message:"Error fetching categories",error});
    }
});



module.exports=router;

