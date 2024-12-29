//module ( we are using type modules here)
import express  from 'express'; 
import dotenv from "dotenv";
import {connectDB} from '../server/DB/connectDB.js';
import authroutes from "./routers/auth.route.js"



dotenv.config();  // it reads the.env file and sets the environment variables.

const app  = express();
const PORT = process.env.PORT ||5000;

app.get('/', async (req, res) => {
    res.send(" hello serever is ready to paly");
})

app.use("/api/auth",authroutes); // pass like function
 

app.listen(PORT,()=>{
    connectDB();
    console.log("server is running on port 3000",PORT);
});