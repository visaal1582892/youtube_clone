import Channel from '../Model/channels.model.js';
import Video from '../Model/videos.model.js';

// Sample video data with valid YouTube URLs and thumbnails (24 samples)
const sampleVideos = [
  {
    title: "Top 10 Guitar Riffs of All Time",
    description: "Dive into the world of rock music with our list of the most iconic guitar riffs that defined generations.",
    category: "Music",
    thumbnailUrl: "https://res.cloudinary.com/dhc8dqoxo/image/upload/v1748833261/maxresdefault_xuqkwx.jpg"
  },
  {
    title: "Relaxing Piano Compilation",
    description: "Enjoy over an hour of peaceful and calming piano music to help you focus, study, or relax.",
    category: "Music",
    thumbnailUrl: "https://res.cloudinary.com/dhc8dqoxo/image/upload/v1748833391/maxresdefault_jaqqik.jpg"
  },
  {
    title: "Jazz Essentials Playlist",
    description: "A curated list of smooth jazz tracks that every enthusiast needs to hear. Sit back and let the groove take over.",
    category: "Music",
    thumbnailUrl: "https://res.cloudinary.com/dhc8dqoxo/image/upload/v1748833416/maxresdefault_up78b2.jpg"
  },
  {
    title: "Top 5 Open World Games in 2024",
    description: "From immersive landscapes to thrilling storylines, discover the best open-world games to play right now.",
    category: "Gaming",
    thumbnailUrl: "https://res.cloudinary.com/dhc8dqoxo/image/upload/v1748833654/maxresdefault_tngsj9.jpg"
  },
  {
    title: "Minecraft: Building a Modern City",
    description: "A full walkthrough on how to plan, design, and build a sprawling modern city in Minecraft.",
    category: "Gaming",
    thumbnailUrl: "https://res.cloudinary.com/dhc8dqoxo/image/upload/v1748833677/maxresdefault_bwnbep.jpg"
  },
  {
    title: "Call of Duty Warzone: Pro Tips",
    description: "Level up your Warzone gameplay with pro tips and movement strategies from competitive players.",
    category: "Gaming",
    thumbnailUrl: "https://res.cloudinary.com/dhc8dqoxo/image/upload/v1748833708/maxresdefault_ggpjl4.jpg"
  },
  {
    title: "Understanding Quantum Physics",
    description: "An easy-to-follow explanation of quantum mechanics and how it shapes our understanding of the universe.",
    category: "Education",
    thumbnailUrl: "https://res.cloudinary.com/dhc8dqoxo/image/upload/v1748833733/maxresdefault_ddojc9.jpg"
  },
  {
    title: "The History of Ancient Rome",
    description: "A documentary-style overview of Ancient Rome's rise, reign, and fall over a thousand years.",
    category: "Education",
    thumbnailUrl: "https://res.cloudinary.com/dhc8dqoxo/image/upload/v1748833759/maxresdefault_frllef.jpg"
  },
  {
    title: "Learn JavaScript in 24 Minutes",
    description: "A crash course on JavaScript fundamentals for beginners who want to get into web development quickly.",
    category: "Education",
    thumbnailUrl: "https://res.cloudinary.com/dhc8dqoxo/image/upload/v1748833784/maxresdefault_fujrk8.jpg"
  },
  {
    title: "Funniest Animal Fails Compilation",
    description: "Watch the internet's funniest pet fails and laugh out loud with these adorable and clumsy animals.",
    category: "Entertainment",
    thumbnailUrl: "https://res.cloudinary.com/dhc8dqoxo/image/upload/v1748833815/maxresdefault_l3srwf.jpg"
  },
  {
    title: "Top 10 Marvel Movie Moments",
    description: "From Iron Man's first flight to Endgame's epic final battle — relive Marvel's best cinematic moments.",
    category: "Entertainment",
    thumbnailUrl: "https://res.cloudinary.com/dhc8dqoxo/image/upload/v1748833842/maxresdefault_q5elwu.jpg"
  },
  {
    title: "Best Stand-Up Comedy Routines",
    description: "Enjoy a collection of hilarious stand-up bits from top comedians around the world.",
    category: "Entertainment",
    thumbnailUrl: "https://res.cloudinary.com/dhc8dqoxo/image/upload/v1748833864/maxresdefault_p5snwh.jpg"
  },
  {
    title: "Global Economic Update 2024",
    description: "A deep dive into global financial markets, inflation trends, and forecasts for the upcoming year.",
    category: "News",
    thumbnailUrl: "https://res.cloudinary.com/dhc8dqoxo/image/upload/v1748833884/maxresdefault_qsdymk.jpg"
  },
  {
    title: "Top Headlines: Weekly Recap",
    description: "Catch up on this week's most important news stories from around the world in just 10 minutes.",
    category: "News",
    thumbnailUrl: "https://res.cloudinary.com/dhc8dqoxo/image/upload/v1748833925/maxresdefault_q6whrk.jpg"
  },
  {
    title: "Climate Change Report Explained",
    description: "What the latest UN climate change report means for the planet — broken down simply.",
    category: "News",
    thumbnailUrl: "https://res.cloudinary.com/dhc8dqoxo/image/upload/v1748833948/maxresdefault_kac2hf.jpg"
  },
  {
    title: "Top 10 Sports Plays of the Year 2024",
    description: "A compilation of the most thrilling sports moments from 2024. From buzzer-beaters to game-winning goals, relive the excitement!",
    category: "Sports",
    thumbnailUrl: "https://res.cloudinary.com/dhc8dqoxo/image/upload/v1748833967/maxresdefault_fm1max.jpg"
  },
  {
    title: "Top 10 Sports Highlights Plays - Dec 29, 2024",
    description: "ESPN's selection of the top sports highlights at the end of 2024. This video features the most exciting plays from various sports, showcasing incredible athleticism and skill.",
    category: "Sports",
    thumbnailUrl: "https://res.cloudinary.com/dhc8dqoxo/image/upload/v1748833991/maxresdefault_xi8jwg.jpg"
  },
  {
    title: "Top 10 Sports Moments You Missed in 2024",
    description: "A look at some of the most underrated sports moments that flew under the radar in 2024. From unexpected upsets to incredible individual performances, these moments deserve more recognition.",
    category: "Sports",
    thumbnailUrl: "https://res.cloudinary.com/dhc8dqoxo/image/upload/v1748834014/maxresdefault_terumi.jpg"
  },
  {
    title: "Top 10 Emerging Technologies of 2024",
    description: "An overview of groundbreaking technologies that are set to shape the future. From AI advancements to quantum computing, discover what to watch for in the tech world.",
    category: "Technology",
    thumbnailUrl: "https://res.cloudinary.com/dhc8dqoxo/image/upload/v1748834048/maxresdefault_rp7tcm.jpg"
  },
  {
    title: "The BEST Tech of 2024!",
    description: "A review of the top tech gadgets and innovations that stood out in 2024. This video covers everything from smartphones to smart home devices, highlighting the best of the year.",
    category: "Technology",
    thumbnailUrl: "https://res.cloudinary.com/dhc8dqoxo/image/upload/v1748834069/maxresdefault_il0u2x.jpg"
  },
  {
    title: "Build a Full Stack App in 1 Hour",
    description: "Step-by-step tutorial on building a MERN stack application with modern design principles.",
    category: "Technology",
    thumbnailUrl: "https://res.cloudinary.com/dhc8dqoxo/image/upload/v1748834087/maxresdefault_ynwtxj.jpg"
  },
  {
    title: "How to Cook Perfect Pasta",
    description: "A comprehensive step-by-step guide to mastering the art of cooking authentic Italian pasta.",
    category: "Lifestyle",
    thumbnailUrl: "https://res.cloudinary.com/dhc8dqoxo/image/upload/v1748834109/maxresdefault_u42tdt.jpg"
  },
  {
    title: "Top 10 YouTubers of 2024 - Lifestyle, Vlogs, Edits, Self Development",
    description: "A showcase of influential lifestyle YouTubers who made an impact in 2024. This video highlights their unique styles, content, and contributions to the YouTube community.",
    category: "Lifestyle",
    thumbnailUrl: "https://res.cloudinary.com/dhc8dqoxo/image/upload/v1748834128/maxresdefault_gwabsl.jpg"
  },
  {
    title: "Minimalist Home Tour",
    description: "Explore the beauty and functionality of a minimalist home and how it helps reduce stress.",
    category: "Lifestyle",
    thumbnailUrl: "https://res.cloudinary.com/dhc8dqoxo/image/upload/v1748834149/maxresdefault_lnl53i.jpg"
  },
];

// Main function to create videos and update channels
async function createVideosForChannel(channelId) {
  try {
    const videosToCreate = sampleVideos.map(video => ({
      ...video,
      channel: channelId
    }));

    // Insert videos for this channel
    const createdVideos = await Video.insertMany(videosToCreate);

    // Get array of created video IDs
    const videoIds = createdVideos.map(v => v._id);

    // Update the channel's videos array
    await Channel.findByIdAndUpdate(channelId, { $push: { videos: { $each: videoIds } } });

    console.log(`Created 24 videos for channel ${channelId}`);
    console.log('All videos created and channels updated successfully!');
  } catch (error) {
    console.error('Error creating videos:', error);
  }
}

export default createVideosForChannel;
