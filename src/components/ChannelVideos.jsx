import React from 'react';
import VideoCard from './VideoCard';

const ChannelVideos = ({ videos }) => {
  if (!videos || videos.length === 0) {
    return <p className="px-4 mt-6 text-gray-500">No videos uploaded yet.</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      {videos.map((video) => (
        <VideoCard key={video._id} video={video} />
      ))}
    </div>
  );
};

export default ChannelVideos;
