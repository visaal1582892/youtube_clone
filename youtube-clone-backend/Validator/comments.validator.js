import User from '../Model/users.model.js';
import Video from '../Model/videos.model.js';

export const validateAddComment = async (req, res, next) => {
    const { text,user,video } = req.body;

    // Check if text is provided
    if (!text || !user) {
        return res.status(400).json({ message: "Comment text and user are required fields" });
    }

    const currUser=await User.findById(user);
    if (!currUser) {
        return res.status(400).json({
            message: "User not found give valid userId"
        })
    }

    const currVideo=await Video.findById(video);
    if(!currVideo){
        return res.status(400).json({
            message: "Invalid video id"
        })
    }

    if(user!=req.user._id){
        return res.status(403).json({
            message: "User not authorized to perform this task"
        })
    }

    // Check if text length is valid
    if (text.length < 1 || text.length > 500) {
        return res.status(400).json({ message: "Comment text must be between 1 and 500 characters long" });
    }

    // If all validations pass, proceed to the next middleware
    next();
}

export const validateUpdateComment = (req, res, next) => {
    const { text } = req.body;

    // Check if text is provided
    if (!text) {
        return res.status(400).json({ message: "Comment text is a required field" });
    }

    // Check if text length is valid
    if (text.length < 1 || text.length > 500) {
        return res.status(400).json({ message: "Comment text must be between 1 and 500 characters long" });
    }

    // If all validations pass, proceed to the next middleware
    next();
}