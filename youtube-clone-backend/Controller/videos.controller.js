import Video from '../Model/videos.model.js';

// Functio To implement upload of video
export const uploadVideo = async (req, res) => {
    try {
        const { title, description, channel, category, views, likes, dislikes, uploadedAt } = req.body;

        const video=req.files?.video?.[0]?.path || null;
        const thumbnail = req.files?.thumbnail?.[0]?.path || null;

        // Create a new video document
        const newVideo = new Video({
            title,
            description,
            video,
            thumbnail,
            channel,
            category,
            views,
            likes,
            dislikes,
            uploadedAt
        });

        // Save the video to the database
        await newVideo.save();

        res.status(201).json({ message: 'Video uploaded successfully', video: newVideo });
    } catch (error) {
        console.error('Error uploading video:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

// Function to update video details
export const updateVideo = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description, category, channel  } = req.body;

        const video=req.files?.video?.[0]?.path || null;
        const thumbnail = req.files?.thumbnail?.[0]?.path || null;

        // Find the video by ID
        const existingVideo = await Video.findById(id);
        if (!existingVideo) {
            return res.status(404).json({ message: 'Video not found' });
        }

        // Check if user is updating his cahnel video or not
        if (existingVideo.channel.toString() !== req.user.channel.toString()) {
            return res.status(403).json({ message: 'You are not authorized to update this video.' });
        }

        // Update video details
        existingVideo.title = title || existingVideo.title;
        existingVideo.description = description || existingVideo.description;
        existingVideo.video = video || existingVideo.video;
        existingVideo.thumbnail = thumbnail || existingVideo.thumbnail;
        existingVideo.category = category || existingVideo.category;
        existingVideo.uploadedAt = new Date(); // Update the uploadedAt field to current date

        // Save the updated video
        await existingVideo.save();

        res.status(200).json({ message: 'Video updated successfully', video: existingVideo });
    } catch (error) {
        console.error('Error updating video:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Function to delete a video
export const deleteVideo = async (req, res) => {
    try {
        const { id } = req.params;

        // Find the video by ID
        const existingVideo = await Video.findById(id);
        if (!existingVideo) {
            return res.status(404).json({ message: 'Video not found' });
        }

        // Check if user is deleting his channel video or not
        if (existingVideo.channel.toString() !== req.user.channel.toString()) {
            return res.status(403).json({ message: 'You are not authorized to delete this video.' });
        }

        // Delete the video
        await Video.findByIdAndDelete(id);

        res.status(200).json({ message: 'Video deleted successfully' });
    } catch (error) {
        console.error('Error deleting video:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
