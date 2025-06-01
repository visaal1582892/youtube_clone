export const channelDetailsValidator = (req, res, next) => {
    const { name, handle, owner, description } = req.body;
    const banner = req.files?.banner?.[0]?.path;
    const avatar = req.files?.avatar?.[0]?.path;

    if (!name || name.length < 3 || name.length > 40) {
        return res.status(400).json({
            message: "Channel Name must be between 3 and 40 characters long"
        });
    }

    if (!handle || !/^@[a-zA-Z0-9._]{3,30}$/.test(handle)) {
        return res.status(400).json({
            message: "Channel Handle must start with '@' and can only contain alphanumeric characters, underscores, and periods, with a length between 3 and 30 characters"
        });
    }

    if (!owner) {
        return res.status(400).json({
            message: "Channel Owner is a required field"
        });
    }

    if (description && description.length > 500) {
        return res.status(400).json({
            message: "Channel Description must not exceed 500 characters"
        });
    }

    if (banner && !/^https?:\/\/res\.cloudinary\.com\/.+/.test(banner)) {
        return res.status(400).json({
            message: "Enter valid cloudinary url for banner"
        });
    }

    if (avatar && !/^https?:\/\/res\.cloudinary\.com\/.+/.test(avatar)) {
        return res.status(400).json({
            message: "Enter valid cloudinary url for avatar"
        });
    }

    next();
}