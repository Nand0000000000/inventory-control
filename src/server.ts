import express,{json, NextFunction, Request, Response} from "express";
import "express-async-errors" 
import { router } from "./routes";

const app = express();
app.use(express.json());
app.use(router);
const port = 3333;

app.use((err: Error, request: Request, response: Response, next: NextFunction)=>{
    if(err instanceof Error){
        return response.status(400).json({
            error: err.message,
        });
    }
    return response.status(500).json({
        status: 'error',
        message: 'Internal server error'
    })
})

app.listen(port, () =>{
    console.log("server up and runnig on port 3333" )
});