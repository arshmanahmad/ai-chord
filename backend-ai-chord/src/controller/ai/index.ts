import OpenAI from "openai";
import { env } from "../../config/env";

const openai = new OpenAI({
    apiKey: env.OPEN_API_KEY
});

export const getPromptResponse = async() =>{
    try{
        const response = await openai.chat.completions.create({
            model: 'gpt-4o-mini',
            messages: [
                {
                    "role": "user",
                    "content": [
                      {
                        "type": "text",
                        "text": "Write a haiku about programming."
                      }
                    ]
                  }
            ]
          });
        console.log("AI Response:", response.choices[0].message.content as string);
        
    }catch(error){
        console.log("Error in getting response",error);
        
    }

}
