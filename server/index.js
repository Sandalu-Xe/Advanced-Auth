//module ( we are using type modules here)
import express  from 'express'; 
import dotenv from "dotenv";
import {connectDB} from '../server/DB/connectDB.js';
import authroutes from "./routers/auth.route.js"



dotenv.config();  // it reads the.env file and sets the environment variables.

const app = express();


app.get('/', async (req, res) => {
    res.send(" hello serever is ready to paly");
})

app.use("/api/auth",authroutes);
 // pass like const 

app.listen(3000,()=>{
    connectDB();
    console.log("server is running on port 3000");
});