import express,{Express,Request,Response} from "express";
import cors from 'cors'
import { env } from "./config/env";
import { getPromptResponse } from "./controller/ai";
import bodyParser from "body-parser";
const app:Express = express()

app.use(express.json())

app.use(bodyParser.json())

app.use(cors({
    origin: "*"
}))

app.get("/health", (_req: Request, res: Response) => {
    console.log("The app is working fine");
    res.status(200).send("The app is working fine");
});

app.listen(env.PORT,
    ()=>{
        console.log(`Server is running on ${env.PORT}`)
    }
)

getPromptResponse()