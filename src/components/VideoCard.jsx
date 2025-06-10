import React from 'react';
import { useNavigate, Link,useLocation } from 'react-router-dom';

const VideoCard = ({ video }) => {
  const navigate = useNavigate();
  const location=useLocation();

  // Function to navigate to channel page
  const navigateToChannelPage = (event) => {
    event.stopPropagation();
    navigate(`/viewChannel/${video.channel._id}`);
  };

  return (
    <div className="mb-4 w-full cursor-pointer">
      {/* Thumbnail and rest of card wrapped in Link */}
      <Link to={`/watch/${video._id}`} className="block">
        <div className="relative rounded-lg overflow-hidden">
          <img src={video.thumbnailUrl} alt="thumbnail" />
          <span className="absolute bottom-1 right-1 bg-black bg-opacity-70 text-white text-xs px-1 rounded">3:45</span>
        </div>
      </Link>
      <div className="flex mt-2 gap-2">
        {/* Channel logo */}
        <div
          className="w-9 h-9 rounded-full bg-gray-300 flex items-center justify-center text-xs text-white font-bold cursor-pointer"
          onClick={location.pathname=='/'?navigateToChannelPage:null}
        >
          <img src={video.channel.avatar} alt="channelAvatar" className="rounded-full" />
        </div>
        <Link to={`/watch/${video._id}`} className="flex-1">
          <div className="text-sm">
            <p className="font-semibold line-clamp-2">{video.title}</p>
            <p className="text-gray-600 text-xs">{video.channel.name}</p>
            <p className="text-gray-600 text-xs">
              {video.views} views • {new Date(video.createdAt).toLocaleDateString()}
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default VideoCard;
