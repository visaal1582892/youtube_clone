import express from "express";
import connectToDb from './utils/db.js';
import userRouter from './Routes/users.routes.js';
import channelRouter from './Routes/channels.routes.js';
import dotenv from "dotenv";
dotenv.config();

// Creating express server
const app=express();

// Using Application level middleware to prase json data from requests
app.use(express.json());

// Adding userRouter to my app
app.use('/users',userRouter);
app.use('/channels',channelRouter);

// Using Application level middleware to handle unknown errors
app.use((err, req, res, next) => {
  if(err) {
    console.error("An error occurred:", err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
});

// Connecting To databse
connectToDb();

// Listening to server
app.listen(process.env.PORT || 5000, () => {
    console.log(`server running successsfully at ${process.env.PORT}`)
});

