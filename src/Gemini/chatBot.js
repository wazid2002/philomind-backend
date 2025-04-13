const { GoogleGenAI } = require ("@google/genai");
require('dotenv').config({path:"../.env"});

const genAI = new GoogleGenAI(
    {apikey:process.env.GEMINI_API_KEY,});

async function* streamGeminiResponse(userMessage,History=[]){
    const response=await genAI.models.generateContentStream({
        model:"gemini-pro",
        contents:userMessage,
    })
   

    for await (const chunk of result.stream) {
        const textChunk = chunk.text();
        if (textChunk) {
          yield textChunk;
        }
      }
    
};

module.exports = {streamGeminiResponse};
