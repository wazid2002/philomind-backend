const express = require("express");
const router = express.Router();
const Psychiatrist = require("../models/Psychiatrist");

router.get('/psy',async(req,res)=>{
try{
    const hospitals= await Psychiatrist.find();
    res.status(200).json(hospitals);
}catch(error){
    res.status(500).json({error:'Failed to fetch hospitals data'});
}

});

module.exports = router;