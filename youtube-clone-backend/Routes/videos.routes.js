import express from 'express';

// Creating route Object
const router = express.Router();

// Defining all the video related routes
// 1. Route to upload a video
router.post('/uploadVideo', (req, res) => {
    
    res.status(200).json({ message: 'Video uploaded successfully' });
});