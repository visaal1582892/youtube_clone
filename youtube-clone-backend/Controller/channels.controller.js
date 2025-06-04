import Channel from "../Model/channels.model.js";
import User from "../Model/users.model.js";
import Video from "../Model/videos.model.js";

// Function To create a new channel
export const createChannel = async (req, res) => {
    const { name, handle, owner, description } = await req.body;
    const banner = await req.files?.banner?.[0]?.path;
    const avatar = await req.files?.avatar?.[0]?.path;
    try {
        // Check if user already have a channel
        const user = await User.findById(owner);
        if (user.channel) {
            return res.status(400).json({
                message: "User already has a channel associated with their account. Please delete the existing channel before creating a new one."
            });
        }

        const newChannel = await Channel.create({
            name,
            handle,
            owner,
            description,
            banner,
            avatar
        });

        // Update the user channel
        await User.findByIdAndUpdate(owner, { $set: { channel: newChannel._id } }, { new: true });
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

// Function To delete a channel by its ID
export const deleteChannel = async (req, res) => {
    const { channelId } = req.params;

    try {
        // Validate the channelId and delete the channel
        if (!channelId) {
            return res.status(400).json({ message: "Channel ID is required" });
        }
        const deletedChannel = await Channel.findByIdAndDelete(channelId);

        if (!deletedChannel) {
            return res.status(404).json({ message: "Channel not found" });
        }

        // Remove the channel reference from the user
        await User.findByIdAndUpdate(deletedChannel.owner, { $unset: { channel: '' } });

        // Optionally, you can also delete all videos associated with this channel
        await Video.deleteMany({ channel: channelId });

        return res.status(200).json({
            message: "Channel deleted successfully"
        });
    } catch (error) {
        return res.status(400).json({
            message: error.message,
        });
    }
}