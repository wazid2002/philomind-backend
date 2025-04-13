const express= require("express")
const router =express.Router();
const {streamGeminiResponse} = require ("../Gemini/chatBot");

router.get("/geminiStream",async(req,res)=>{
    const {userMessage,history}= req.body;

    res.setHeader("Content-Type","text/plain");

    try{
        for await(const chunk of streamGeminiResponse(userMessage,history) ){
            res.write(chunk);
        }
        res.end();
    }catch(error){
        console.error("Streaming error:",error)
        res.status(500).send("Something went wrong")
    };
});

module.exports=router;





