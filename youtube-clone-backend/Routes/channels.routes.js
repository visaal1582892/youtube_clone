import express from 'express';
import multer from 'multer';
import { createChannel,updateChannel,deleteChannel } from '../Controller/channels.controller.js';
import { channelDetailsValidator } from '../Validator/channels.validator.js';
import protectRoute from '../Middleware/protectRoute.js';
import upload from '../Middleware/fileHandler.js';

// Creating Router Object
const router = express.Router();

// Defining all the channel relted routes
// 1. Create a new channel
router.post('/createChannel', protectRoute, upload.fields([{ name: 'banner', maxCount: 1 }, { name: 'avatar', maxCount: 1 }]), channelDetailsValidator, createChannel);

// 2. Update a channel
router.put('/updateChannel/:channelId', protectRoute, upload.fields([{ name: 'banner', maxCount: 1 }, { name: 'avatar', maxCount: 1 }]), channelDetailsValidator, updateChannel);

// 3. Delete a channel
router.delete('/deleteChannel/:channelId', protectRoute, deleteChannel);

export default router;
