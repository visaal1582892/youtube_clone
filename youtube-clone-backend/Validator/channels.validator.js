export const channelDetailsValidator = (req, res, next) => {
    const { name, handle, owner, description } = req.body;
    const banner = req.files?.banner?.[0]?.path;
    const avatar = req.files?.avatar?.[0]?.path;

    // Validating name
    if (!name || name.length < 3 || name.length > 40) {
        return res.status(400).json({
            message: "Channel Name must be between 3 and 40 characters long"
        });
    }

    // Validating handle
    if (!handle || !/^@[a-zA-Z0-9._]{3,30}$/.test(handle)) {
        return res.status(400).json({
            message: "Channel Handle must start with '@' and can only contain alphanumeric characters, underscores, and periods, with a length between 3 and 30 characters"
        });
    }

    // Validating owner
    if (!owner) {
        return res.status(400).json({
            message: "Channel Owner is a required field"
        });
    }

    // Validating description
    if (description && description.length > 500) {
        return res.status(400).json({
            message: "Channel Description must not exceed 500 characters"
        });
    }

    // Validating Types of banner and avatar
    if (!/^image/.test(req.files.banner[0].mimetype)){
        return res.status(400).json({
            message: "Banner must be an image"
        });
    }

    if (!/^image/.test(req.files.avatar[0].mimetype)){
        return res.status(400).json({
            message: "Avatar must be an image"
        });
    }

    // Validating Cloudinary URLs for banner and avatar
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