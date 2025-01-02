import express,{ Express } from 'express';
import cors from 'cors'
import bodyParser from 'body-parser';

const app:Express = express();

app.use(express.json());

app.use(bodyParser.json());

app.use(cors());

app.get("/health",(req,res)=>{
    console.log("Server is working fine");
})

const PORT = 5000;

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})