import React from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';

const SuggestionVideoCard = ({ video }) => {
  const navigate = useNavigate();
  const location = useLocation();

  // Function to navigate to channel page
  const navigateToChannelPage = (event) => {
    event.stopPropagation();
    navigate(`/viewChannel/${video.channel._id}`);
  };

  return (
    <div className="flex w-full gap-3 cursor-pointer mb-4">
      {/* Thumbnail */}
      <Link to={`/viewVideo/${video._id}`} className="min-w-[168px] max-w-[168px] relative rounded-lg overflow-hidden">
        <img
          src={video.thumbnailUrl}
          alt="thumbnail"
          className="w-full h-auto object-cover rounded-lg"
        />
        {/* Video duration */}
        <span className="absolute bottom-1 right-1 bg-black bg-opacity-70 text-white text-xs px-1 rounded">
          {video.duration || '4:46'}
        </span>
      </Link>

      {/* Video Info */}
      <div className="flex flex-col justify-start">
        <Link to={`/viewVideo/${video._id}`}>
          <p className="text-sm font-semibold leading-snug line-clamp-2">{video.title}</p>
        </Link>

        <div
          className="flex items-center gap-1 text-xs text-gray-600 mt-1"
        >
          <p
            onClick={location.pathname === '/' ? navigateToChannelPage : undefined}
            className="hover:underline"
          >
            {video.channel.name}
          </p>
          {video.channel.verified && <span className="text-blue-500">✔</span>}
        </div>

        <p className="text-xs text-gray-600">
          {video.views} views • {new Date(video.createdAt).toLocaleDateString(undefined, {
            year: 'numeric',
            month: 'short',
          })}
        </p>
      </div>
    </div>
  );
};

export default SuggestionVideoCard;
