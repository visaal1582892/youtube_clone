import express from "express";
import connectToDb from './utils/db.js';
import userRouter from './Routes/users.routes.js';
import channelRouter from './Routes/channels.routes.js';
import videoRouter from './Routes/videos.routes.js';
import insertDummyUsers from './utils/insertDummyUsers.js';
import createVideosForChannel from './utils/createVideosForChannel.js';
import createChannelsForUsers from './utils/createChannelsForUsers.js';
import User from "./Model/users.model.js";
import Channel from "./Model/channels.model.js";
import Video from "./Model/videos.model.js";
import dotenv from "dotenv";
dotenv.config();

// Creating express server
const app=express();

// Using Application level middleware to prase json data from requests
app.use(express.json());

// Adding userRouter to my app
app.use('/users',userRouter);
app.use('/channels',channelRouter);
app.use('/videos',videoRouter);

// Using Application level middleware to handle unknown errors
app.use((err, req, res, next) => {
  if(err) {
    console.error("An error occurred:", err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
});

// Connecting To databse
await connectToDb();

// Deleting any existing data in the collections
await User.deleteMany({});
await Channel.deleteMany({});
await Video.deleteMany({});

// Inserting dummy users and creating channels and videos for them
const userIds = await insertDummyUsers();
const channelIds = await createChannelsForUsers(userIds);
for (const channelId of channelIds) {
  await createVideosForChannel(channelId);
}

// Listening to server
app.listen(process.env.PORT || 5000, () => {
    console.log(`server running successsfully at ${process.env.PORT}`)
});

