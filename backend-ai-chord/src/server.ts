import express,{Express,Request,Response} from "express";
import OpenAI from "openai";
import { env } from "./config/env";


const openai = new OpenAI({
    apiKey:env.OPEN_API_KEY
});

const app:Express = express()

const PORT = 5000;

app.get("/health", (_req: Request, res: Response) => {
    console.log("The app is working fine");
    res.status(200).send("The app is working fine");
});

app.listen(PORT,
    ()=>{
        console.log(`Server is running on ${PORT}`)
    }
)


const getAiResponse = async( ) =>{
    try{
        const completion = await openai.chat.completions.create({
            model: "gpt-4o-mini",
            messages: [
                { role: "system", content: "You are a helpful assistant." },
                {
                    role: "user",
                    content: "Write a haiku about recursion in programming.",
                },
            ],
        });
        console.log(completion.choices[0].message);
    }catch(error){
        console.log("error in getting the response", error);
        

    }
}
getAiResponse()