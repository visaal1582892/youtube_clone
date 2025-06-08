import mongoose, { Schema } from 'mongoose';
import Comment from './comments.model.js';

// Creating Video Schema
const videoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Video Title is a required field"],
        trim: true,
        minLength: [3, "Video Title must be at least 3 characters long"],
        maxLength: [100, "Video Title must not exceed 100 characters"]
    },
    description: {
        type: String,
        trim: true,
        maxLength: [500, "Video Description must not exceed 500 characters"]
    },
    category: {
        type: String,
        required: [true, "Video Category is a required field"],
        trim: true,
        enum: {
            values: ['Music', 'Gaming', 'Education', 'Entertainment', 'News', 'Sports', 'Technology', 'Lifestyle'],
            message: "Category must be one of the predefined categories"
        }
    },
    video: {
        type: String,
        trim: true,

        // Giving a dummy video url for now
        default: "https://res.cloudinary.com/dhc8dqoxo/video/upload/v1748847535/sampleVideo_efotir.mp4",


        // For later uses
        // type: String,
        // required: [true, "Video URL is a required field"],

        // We Can add this filter to ensure that the banner and avatar URLs are valid cloudinary URLs
        // match: [/^https?:\/\/res\.cloudinary\.com\/.+/, "Enter valid cloudinary url"]
    },
    thumbnailUrl: {
        type: String,
        trim: true,

        // We Can add this filter to ensure that the banner and avatar URLs are valid cloudinary URLs
        // match: [/^https?:\/\/res\.cloudinary\.com\/.+/, "Enter valid cloudinary url"]
    },
    channel: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Channel',
        required: [true, "Channel is a required field"]
    },
    views: {
        type: Number,
        min: [0, "Views cannot be negative"],
        default: 5200
    },
    likes: {
        type: Number,
        min: [0, "Likes cannot be negative"],
        default: 100
    },
    dislikes: {
        type: Number,
        min: [0, "Dislikes cannot be negative"],
        default: 0
    },
    comments: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Comment',
        default: []
    }
}, {timestamps: true});

// Creating Video Model
const Video = await mongoose.model('Video', videoSchema);

// Adding Pre middlewares
videoSchema.pre('deleteMany', {document: false, query: true}, async function(next) {
    // If the video is being deleted, we can also delete all comments associated with it
    const videos = await Video.find(this.getQuery());

    // If no videos are found, we can skip the deletion of comments
    if (!videos) {
        return next();
    }

    // Extracting video IDs from the found videos
    const videoIds = videos.map(video => video._id);
    
    // Deleting all comments associated with the found videos
    await Comment.deleteMany({ video: { $in: videoIds } });

    next();
});
videoSchema.pre('findOneAndDelete', async function(next) {
    // If the video is being deleted, we can also delete all comments associated with it
    const videoId = this.getQuery()._id;
    
    // If no video ID is found, we can skip the deletion of comments
    if (!videoId) {
        return next();
    }

    await Comment.deleteMany({ video: videoId });

    next();
});
export default Video;