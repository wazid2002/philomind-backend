const express = require("express");
const router = express.Router();
const Psychiatrist = require("../models/Psychiatrist");

router.get('/psy',async(req,res)=>{
try{
    const { city, page=1 , limit = 10 } = req.query;

    const filter = city ? {city}:{};

    const skip = (page - 1)*limit;
    const hospitals= await Psychiatrist.find(filter)
    .skip(skip)
    .limit(Number(limit));

    const totalCount= await Psychiatrist.countDocuments(filter);
    const totalPages = Math.ceil(totalCount / limit);

    res.status(200).json({
        hospitals,
        totalCount,
        totalPages,
        currentPage:Number(page)

    });
}catch(error){
    res.status(500).json({error:'Failed to fetch hospitals data'});
}

});

module.exports = router;