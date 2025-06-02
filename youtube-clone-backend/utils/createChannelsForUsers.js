import Channel from "../Model/channels.model.js";
import User from "../Model/users.model.js";

// Function to create channels for users in a MongoDB database
async function createChannelsForUsers(userIds) {
  try {
    // Create 10 channels, one per user
    const channelsData = userIds.map((userId, idx) => ({
      name: `Sample Channel ${idx + 1}`,
      handle: `@samplechannel${idx + 1}`,
      owner: userId,
      description: `Description for Sample Channel ${idx + 1}`,
      banner: 'https://res.cloudinary.com/demo/image/upload/sample_banner.jpg', // example default banner
      avatar: 'https://res.cloudinary.com/demo/image/upload/sample_avatar.jpg', // example default avatar
      subscribers: 5200,
      videos: []
    }));

    const createdChannels = await Channel.insertMany(channelsData);

    const channelIds = createdChannels.map(channel => channel._id);

    // Update users with their corresponding channel IDs
    const updatePromises = createdChannels.map((channel) => {
      return User.findByIdAndUpdate(channel.owner, { channel: channel._id });
    });

    await Promise.all(updatePromises);

    console.log('Channels created and linked to users successfully!');

    return channelIds;
  } catch (error) {
    console.error('Error creating channels and linking to users:', error);
  }
}

export default createChannelsForUsers;