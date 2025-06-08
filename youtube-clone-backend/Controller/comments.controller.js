import Comment from '../Model/comments.model.js';
import Video from '../Model/videos.model.js';

export const addComment = async (req, res) => {
    try {
        const { text, user, video } = req.body;

        // Create a new comment
        const newComment = new Comment({
            text,
            user,
            video
        });

        // Save the comment to the database
        const currComment=await newComment.save();

        await Video.findByIdAndUpdate(video, {$push: {comments: currComment._id}});

        return res.status(201).json({ message: "Comment added successfully", comment: newComment });
    } catch (error) {
        console.error('Error adding comment:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

export const updateComment = async (req, res) => {
    const { id } = req.params;
    const { text } = req.body;

    try {
        // Find the comment by ID
        const existingComment = await Comment.findById(id);
        if (!existingComment) {
            return res.status(404).json({ message: 'Comment not found' });
        }

        // Check if user is updating their own comment
        if (existingComment.user.toString() !== req.user._id.toString()) {
            return res.status(403).json({ message: 'You are not authorized to update this comment.' });
        }

        // Update comment text
        existingComment.text = text || existingComment.text;

        // Save the updated comment
        await existingComment.save();

        res.status(200).json({ message: "Comment updated successfully", comment: existingComment });
    } catch (error) {
        console.error('Error updating comment:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

export const deleteComment = async (req, res) => {
    const { id } = req.params;

    try {
        // Find the comment by ID
        const existingComment = await Comment.findById(id);
        if (!existingComment) {
            return res.status(404).json({ message: 'Comment not found' });
        }

        // Check if user is deleting their own comment
        if (existingComment.user.toString() !== req.user._id.toString()) {
            return res.status(403).json({ message: 'You are not authorized to delete this comment.' });
        }

        // Update Video by deleting commentid from its list.
        await Video.findByIdAndUpdate(existingComment.video, {$pull: {comments: existingComment._id}});

        // Delete the comment
        await existingComment.deleteOne();

        res.status(200).json({ message: "Comment deleted successfully" });
    } catch (error) {
        console.error('Error deleting comment:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}