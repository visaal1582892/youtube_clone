import mongoose, { Schema } from "mongoose";

// Creating User Schema
const userSchema=mongoose.Schema({
    username: {
        type: String,
        trim: true,
        minLength: [3, "Username must be atleast 3 character"],
        maxLength: [40, "Length of username canot exceed length of 40 characters"],
        required: [true, "Username must be given to register"],
        match: [/^[a-zA-Z\s]+$/, "Username must only contain letters and spaces"]
    },
    email: {
        type: String,
        trim: true,
        unique: true,
        lowercase: true,
        maxLength: [30, "Email length canot exceed more than 30 characters"],
        required: [true, "Email must me given to Register"],
        match: [/^[^\s@]+@[^\s@\.]+\.[^\s@\.]+$/, 'Please enter a valid email address']
    },
    password: {
        type: String,
        required: [true, "Password is required field"],
        minLength: [6, "Hashed password must be atleast 6 characters"]
    },
    avatar: {
        type: String,
        trim: true,

        // We Can add this filter to ensure that the banner and avatar URLs are valid cloudinary URLs
        match: [/^https?:\/\/res\.cloudinary\.com\/.+/, "Enter valid cloudinary url"]
    },
    channel: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Channel',
    }
});

// Creating User Model
const User=mongoose.model('User', userSchema);

export default User;
