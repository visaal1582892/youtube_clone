import Channel from "../Model/channels.model.js";
import User from "../Model/users.model.js";

// Function To create a new channel
export const createChannel = async (req, res) => {
    const { name, handle, owner, description } = req.body;
    const banner = req.files?.banner?.[0]?.path;
    const avatar = req.files?.avatar?.[0]?.path;
    try {
        const newChannel = await Channel.create({
            name,
            handle,
            owner,
            description,
            banner,
            avatar
        });

        // Update the user channels array
        User.findByIdAndUpdate(owner, { $push: { channels: newChannel._id } }, { new: true });
        return res.status(201).json({
            message: "Channel created successfully"
        });
    } catch (error) {
        return res.status(400).json({
            message: error.message,
        });
    }
}

// Function To Edit a channel
export const updateChannel = async (req, res) => {
    const { channelId } = req.params;
    const { name, handle, description } = req.body;
    const banner = req.files?.banner?.[0]?.path;
    const avatar = req.files?.avatar?.[0]?.path;

    try {
        // Validate the channelId and update the channel
        if (!channelId) {
            return res.status(400).json({ message: "Channel ID is required" });
        }
        const updatedChannel = await Channel.findByIdAndUpdate(channelId, {
            name,
            handle,
            description,
            banner,
            avatar
        }, { new: true });

        if (!updatedChannel) {
            return res.status(404).json({ message: "Channel not found" });
        }

        return res.status(200).json({
            message: "Channel updated successfully",
            channel: updatedChannel
        });
    } catch (error) {
        return res.status(400).json({
            message: error.message,
        });
    }
}