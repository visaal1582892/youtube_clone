import { text } from 'express';
import mongoose from 'mongoose';

// Creating Comment Schema
const commentSchema = new mongoose.Schema({
    text: {
        type: String,
        required: [true, "Comment content is a required field"],
        trim: true,
        minLength: [1, "Comment content must be at least 1 character long"],
        maxLength: [500, "Comment content must not exceed 500 characters"]
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: [true, "User is a required field"]
    },
});

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
    url: {
        type: String,
        trim: true,

        // Giving a dummy video url for now
        default: "https://res.cloudinary.com/dhc8dqoxo/video/upload/v1748779048/sampleVideo_i6tihg.mp4",


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
        // For later uses
        // type: [mongoose.Schema.Types.ObjectId],
        // ref: 'Comment',
        // default: []

        type: [commentSchema],
        default: []
    },
    uploadedAt: {
        type: Date,
        default: Date.now
    }
});

// Creating Video Model
const Video = mongoose.model('Video', videoSchema);
export default Video;