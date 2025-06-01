import mongoose from 'mongoose';

// Creating Video Schema
const commentSchema = new mongoose.Schema({
    text: {
        type: String,
        required: [true, "Comment text is a required field"],
        trim: true,
        minLength: [1, "Comment text must be at least 1 character long"],
        maxLength: [500, "Comment text must not exceed 500 characters"]
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: [true, "User is a required field"]
    },
}, { timestamps: true });

// Creating Comment Model
const Comment = mongoose.model('Comment', commentSchema);
export default Comment;
