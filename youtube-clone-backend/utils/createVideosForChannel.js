import Channel from './models/channels.model.js';
import Video from './models/videos.model.js';

// Sample video data with valid YouTube URLs and thumbnails (30 samples)
const sampleVideos = [
  {
    title: "Top 10 Guitar Riffs of All Time",
    description: "Dive into the world of rock music with our list of the most iconic guitar riffs that defined generations.",
    category: "Music",
    thumbnailUrl: "https://img.youtube.com/vi/Zoxucin_mFM/maxresdefault.jpg"
  },
  {
    title: "Relaxing Piano Compilation",
    description: "Enjoy over an hour of peaceful and calming piano music to help you focus, study, or relax.",
    category: "Music",
    thumbnailUrl: "https://img.youtube.com/vi/3NycM9lYdRI/maxresdefault.jpg"
  },
  {
    title: "Jazz Essentials Playlist",
    description: "A curated list of smooth jazz tracks that every enthusiast needs to hear. Sit back and let the groove take over.",
    category: "Music",
    thumbnailUrl: "https://img.youtube.com/vi/FYXRD18oUS0/maxresdefault.jpg"
  },
  {
    title: "Top 5 Open World Games in 2024",
    description: "From immersive landscapes to thrilling storylines, discover the best open-world games to play right now.",
    category: "Gaming",
    thumbnailUrl: "https://img.youtube.com/vi/fI1vfxc8jK4/maxresdefault.jpg"
  },
  {
    title: "Minecraft: Building a Modern City",
    description: "A full walkthrough on how to plan, design, and build a sprawling modern city in Minecraft.",
    category: "Gaming",
    thumbnailUrl: "https://img.youtube.com/vi/9vf0BbuOXFM/maxresdefault.jpg"
  },
  {
    title: "Call of Duty Warzone: Pro Tips",
    description: "Level up your Warzone gameplay with pro tips and movement strategies from competitive players.",
    category: "Gaming",
    thumbnailUrl: "https://img.youtube.com/vi/ySq6sEF3ajM/maxresdefault.jpg"
  },
  {
    title: "Understanding Quantum Physics",
    description: "An easy-to-follow explanation of quantum mechanics and how it shapes our understanding of the universe.",
    category: "Education",
    thumbnailUrl: "https://img.youtube.com/vi/Lm9SZf2XFCc/maxresdefault.jpg"
  },
  {
    title: "The History of Ancient Rome",
    description: "A documentary-style overview of Ancient Rome's rise, reign, and fall over a thousand years.",
    category: "Education",
    thumbnailUrl: "https://img.youtube.com/vi/z3uvnwBMTdY/maxresdefault.jpg"
  },
  {
    title: "Learn JavaScript in 30 Minutes",
    description: "A crash course on JavaScript fundamentals for beginners who want to get into web development quickly.",
    category: "Education",
    thumbnailUrl: "https://img.youtube.com/vi/hdI2bqOjy3c/maxresdefault.jpg"
  },
  {
    title: "Funniest Animal Fails Compilation",
    description: "Watch the internet's funniest pet fails and laugh out loud with these adorable and clumsy animals.",
    category: "Entertainment",
    thumbnailUrl: "https://img.youtube.com/vi/SfLV8hD7zX4/maxresdefault.jpg"
  },
  {
    title: "Top 10 Marvel Movie Moments",
    description: "From Iron Man's first flight to Endgame's epic final battle — relive Marvel's best cinematic moments.",
    category: "Entertainment",
    thumbnailUrl: "https://img.youtube.com/vi/npvJ9FTgZbM/maxresdefault.jpg"
  },
  {
    title: "Best Stand-Up Comedy Routines",
    description: "Enjoy a collection of hilarious stand-up bits from top comedians around the world.",
    category: "Entertainment",
    thumbnailUrl: "https://img.youtube.com/vi/iCvmsMzlF7o/maxresdefault.jpg"
  },
  {
    title: "Global Economic Update 2024",
    description: "A deep dive into global financial markets, inflation trends, and forecasts for the upcoming year.",
    category: "News",
    thumbnailUrl: "https://img.youtube.com/vi/Z1BCujX3pw8/maxresdefault.jpg"
  },
  {
    title: "Top Headlines: Weekly Recap",
    description: "Catch up on this week's most important news stories from around the world in just 10 minutes.",
    category: "News",
    thumbnailUrl: "https://img.youtube.com/vi/BHACKCNDMW8/maxresdefault.jpg"
  },
  {
    title: "Climate Change Report Explained",
    description: "What the latest UN climate change report means for the planet — broken down simply.",
    category: "News",
    thumbnailUrl: "https://img.youtube.com/vi/G4H1N_yXBiA/maxresdefault.jpg"
  },
  {
    title: "Top 10 Football Goals of the Season",
    description: "Watch the most jaw-dropping goals from the world's best football leagues and tournaments.",
    category: "Sports",
    thumbnailUrl: "https://img.youtube.com/vi/XGgW3ryGWWk/maxresdefault.jpg"
  },
  {
    title: "Olympic Records That Shocked the World",
    description: "Relive the most extraordinary moments in Olympic history that left fans speechless.",
    category: "Sports",
    thumbnailUrl: "https://img.youtube.com/vi/3lZkL2KkJAs/hqdefault.jpg"
  },
  {
    title: "NBA Playoff Highlights 2024",
    description: "The best dunks, assists, and buzzer-beaters from this season's NBA playoffs.",
    category: "Sports",
    thumbnailUrl: "https://img.youtube.com/vi/8UGVdZQfQIM/hqdefault.jpg"
  },
  {
    title: "Top 5 AI Tools to Boost Productivity",
    description: "From automation to writing code, discover how AI tools can transform your daily workflow.",
    category: "Technology",
    thumbnailUrl: "https://img.youtube.com/vi/Ix6kGqQLaY8/hqdefault.jpg"
  },
  {
    title: "iPhone 15 Pro Review: Is It Worth It?",
    description: "A full breakdown of the iPhone 15 Pro's new features, design, performance, and pricing.",
    category: "Technology",
    thumbnailUrl: "https://img.youtube.com/vi/TjdZzt_jEwY/hqdefault.jpg"
  },
  {
    title: "Build a Full Stack App in 1 Hour",
    description: "Step-by-step tutorial on building a MERN stack application with modern design principles.",
    category: "Technology",
    thumbnailUrl: "https://img.youtube.com/vi/4UZrsTqkcW4/maxresdefault.jpg"
  },
  {
    title: "How to Cook Perfect Pasta",
    description: "A comprehensive step-by-step guide to mastering the art of cooking authentic Italian pasta.",
    category: "Lifestyle",
    thumbnailUrl: "https://img.youtube.com/vi/1-SJGQ2HLp8/maxresdefault.jpg"
  },
  {
    title: "10 Morning Habits of Successful People",
    description: "Discover powerful routines and habits that can boost your productivity and mindset every day.",
    category: "Lifestyle",
    thumbnailUrl: "https://img.youtube.com/vi/VyV5mQF8qyw/maxresdefault.jpg"
  },
  {
    title: "Minimalist Home Tour",
    description: "Explore the beauty and functionality of a minimalist home and how it helps reduce stress.",
    category: "Lifestyle",
    thumbnailUrl: "https://img.youtube.com/vi/GlV5PMv2nKY/maxresdefault.jpg"
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

    console.log(`Created 30 videos for channel ${channelId}`);
    console.log('All videos created and channels updated successfully!');
  } catch (error) {
    console.error('Error creating videos:', error);
  }
}

// Example usage (make sure you have the channelIds array ready)
// await createVideosForChannels(channelIds);
