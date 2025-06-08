import express from 'express';
import { uploadVideo,updateVideo,deleteVideo, getAllVideos } from '../Controller/videos.controller.js';
import upload from '../Middleware/fileHandler.js';
import protectRoute from '../Middleware/protectRoute.js';
import { uploadVideoValidator,updateVideoValidator } from '../Validator/videos.validator.js';

// Creating route Object
const router = express.Router();

// Defining all the video related routes
// 1. Route to upload a video
router.post('/uploadVideo', protectRoute, upload.fields([{ name: 'video', maxCount: 1 }, { name: 'thumbnail', maxCount: 1 }]), uploadVideoValidator, uploadVideo);

// 2. Route to update a video
router.put('/updateVideo/:id', protectRoute, upload.fields([{ name: 'video', maxCount: 1 }, { name: 'thumbnail', maxCount: 1 }]), updateVideoValidator, updateVideo);

// 3. Route to delete a video
router.delete('/deleteVideo/:id', protectRoute, deleteVideo);

// 4. Route to get all the videos
router.get('/getAllVideos', getAllVideos);
export default router;