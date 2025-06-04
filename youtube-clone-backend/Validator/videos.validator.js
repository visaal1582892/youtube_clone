// Validating video upload detais
export const uploadVideoValidator = (req, res, next) => {
    const { title, description, category, views, likes, dislikes, uploadedAt, channel } = req.body;

    const video=req.files?.video?.[0]?.path || null;
    const thumbnail = req.files?.thumbnail?.[0]?.path || null;

    // Validating required fields
    if (!title || !channel || !category || !video || !thumbnail) {
        return res.status(400).json({ message: 'Title, channel, category, views, likes, dislikes, uploadedAt, video, and thumbnail are required.' });
    }

    // Validating title length
    if (title.length < 3 || title.length > 100) {
        return res.status(400).json({ message: 'Title must be between 3 and 100 characters long.' });
    }

    // Validating description length
    if (description.length > 500) {
        return res.status(400).json({ message: 'Description must not exceed 500 characters.' });
    }

    // Validating video format
    if (video && !/^https?:\/\/res\.cloudinary\.com\/.+/.test(video)) {
        return res.status(400).json({
            message: "Enter valid cloudinary video for video"
        });
    }

    // Validating thumbnail video format
    if (thumbnail && !/^https?:\/\/res\.cloudinary\.com\/.+/.test(thumbnail)) {
        return res.status(400).json({ message: 'Enter a valid cloudinary video for thumbnail.' });
    }

    if(req.user.channel.toString() !== channel) {
        return res.status(403).json({ message: 'You are not authorized to upload videos to this channel.' });
    }

    // Validating Types of video and thumbnail
    if (!/^video/.test(req.files.video[0].mimetype)){
        return res.status(400).json({
            message: "Video video must be a video file"
        });
    }
    if (!/^image/.test(req.files.thumbnail[0].mimetype)){
        return res.status(400).json({
            message: "Thumbnail must be an image"
        });
    }

    next();
}

// Validating video update details
export const updateVideoValidator = (req, res, next) => {
    const { title, description, category } = req.body;

    const video=req.files?.video?.[0]?.path || null;
    const thumbnail = req.files?.thumbnail?.[0]?.path || null;

    // Validating title length
    if (title && (title.length < 3 || title.length > 100)) {
        return res.status(400).json({ message: 'Title must be between 3 and 100 characters long.' });
    }

    // Validating description length
    if (description && description.length > 500) {
        return res.status(400).json({ message: 'Description must not exceed 500 characters.' });
    }

    // Validating video format
    if (video && !/^https?:\/\/res\.cloudinary\.com\/.+/.test(video)) {
        return res.status(400).json({
            message: "Enter valid cloudinary video for video"
        });
    }

    // Validating thumbnail video format
    if (thumbnail && !/^https?:\/\/res\.cloudinary\.com\/.+/.test(thumbnail)) {
        return res.status(400).json({ message: 'Enter a valid cloudinary video for thumbnail.' });
    }

    // Validating Types of video and thumbnail
    if (video && (!/^video/.test(req.files.video[0].mimetype))) {
        return res.status(400).json({
            message: "Video video must be a video file"
        });
    }
    if (thumbnail && (!/^image/.test(req.files.thumbnail[0].mimetype))) {
        return res.status(400).json({
            message: "Thumbnail must be an image"
        });
    }

    next();
}

