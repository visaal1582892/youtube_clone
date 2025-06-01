import mongoose from 'mongoose';
const channelSchema=new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Channel Name is a required field"],
        trim: true,
        minLength: [3, "Channel Name must be at least 3 characters long"],
        maxLength: [40, "Channel Name must not exceed 40 characters"]
    },
    handle: {
        type: String,
        required: [true, "Channel Handle is a required field"],
        unique: true,
        lowercase: true,
        trim: true,
        match: [/^@[a-zA-Z0-9._]{3,30}$/, "Channel Handle must start with '@' and can only contain alphanumeric characters, underscores, and periods, with a length between 3 and 30 characters"]
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: [true, "Channel Owner is a required field"],
    },
    description: {
        type: String,
        trim: true,
        maxLength: [500, "Channel Description must not exceed 500 characters"]
    },
    banner: {
        type: String,
        trim: true,

        // We Can add this filter to ensure that the banner and avatar URLs are valid cloudinary URLs
        // match: [/^https?:\/\/res\.cloudinary\.com\/.+/, "Enter valid cloudinary url"]
    },
    avatar: {
        type: String,
        trim: true,

        // We Can add this filter to ensure that the banner and avatar URLs are valid cloudinary URLs
        // match: [/^https?:\/\/res\.cloudinary\.com\/.+/, "Enter valid cloudinary url"]
    },
    subscribers: {
        type: Number,
        min: [0, "Subscribers cannot be negative"],
        default: 5200,
    },
    videos: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Video',
        default: [],
    }
});

const Channel = mongoose.model('Channel', channelSchema);
export default Channel;