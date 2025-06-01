// Can be added further to expand or improve the project functionality


// import mongoose from 'mongoose';
//
// const commentSchema = new mongoose.Schema({
//     text: {
//         type: String,
//         required: [true, "Comment text is a required field"],
//         trim: true,
//         minLength: [1, "Comment text must be at least 1 character long"],
//         maxLength: [500, "Comment text must not exceed 500 characters"]
//     },
//     user: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'User',
//         required: [true, "User is a required field"]
//     },
//     likes: {
//         type: Number,
//         min: [0, "Likes cannot be negative"],
//         default: 70
//     },
//     dislikes: {
//         type: Number,
//         min: [0, "Dislikes cannot be negative"],
//         default: 0
//     },
// }, { timestamps: true });

// const Comment = mongoose.model('Comment', commentSchema);
// export default Comment;
