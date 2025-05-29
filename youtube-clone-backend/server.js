import express from "express";
import dotenv from "dotenv";
import connectToDb from './utils/db.js';
dotenv.config()

// Creating express server
const app=express();

// Using Application level middleware to prase json data from requests
app.use(express.json());

// Using Application level middleware to handle unknown errors
app.use((err,req,res,next) => {
    if(err){
        return res.send(err);
    }
    next();
})

// Connecting To databse
connectToDb();

// Listening to server
app.listen(process.env.PORT || 5000, () => {
    console.log(`server running successsfully at ${process.env.PORT}`)
});

