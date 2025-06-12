import React, { useEffect,useMemo } from 'react';
import VideoCard from './VideoCard';
import SuggestionVideoCard from './SuggestionVideoCard';
import { useDispatch, useSelector } from 'react-redux';

const SuggestionVideos = ({className}) => {
  

  // Get videos and search filters from Redux
  const videos = useSelector((state) => state.videos.videos);
  const { category, query } = useSelector((state) => state.search);

  // Filter videos based on category and search query
  const filteredVideos = useMemo(() => {
    return videos.filter((video) =>
      (category === 'All' || video.category === category) &&
      video.title?.toLowerCase().includes(query.toLowerCase()));
  }, [videos, query, category]);


  return (
    <div className={className}>
      {filteredVideos.length > 0 ? (
        filteredVideos.map((video) => (
          <SuggestionVideoCard key={video._id} video={video} />
        ))
      ) : (
        <p className="text-center col-span-full text-gray-500">Loading ...</p>
      )}
    </div>
  );
};

export default SuggestionVideos;
