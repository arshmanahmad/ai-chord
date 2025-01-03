import express,{Express,Request,Response} from "express";

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