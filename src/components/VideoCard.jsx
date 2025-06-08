import React from 'react';
import { Link } from 'react-router-dom';

const VideoCard = ({ video }) => {
  return (
    <Link to={`/watch/${video._id}`} className="w-full">
      <div className="mb-4">
        {/* Thumbnail or video preview placeholder */}
        <div className="relative rounded-lg overflow-hidden">
          <img src={video.thumbnailUrl} alt="thumbnail" />
          {/* Showing default duration */}
          <span className="absolute bottom-1 right-1 bg-black bg-opacity-70 text-white text-xs px-1 rounded">3:45</span>
        </div>

        <div className="flex mt-2 gap-2">
          {/* Channel logo placeholder */}
          <div className="w-9 h-9 rounded-full bg-gray-300 flex items-center justify-center text-xs text-white font-bold">
            {video.channel.name}
          </div>

          <div className="text-sm">
            <p className="font-semibold line-clamp-2">{video.title}</p>
            <p className="text-gray-600 text-xs">{video.channel.name}</p>
            <p className="text-gray-600 text-xs">{video.views} views • {new Date(video.createdAt).toLocaleDateString()}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default VideoCard;
