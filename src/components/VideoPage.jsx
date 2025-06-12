import React, { useEffect, useState } from 'react';
import VideoDisplay from './VideoDisplay';
import SuggestionVideos from './SuggestionVideos';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const VideoPage = () => {
  const videos = useSelector((state) => state.videos.videos);
  const [videoObj, setVideoObj] = useState(null);
  const { videoId } = useParams();

  useEffect(() => {
    if (videos && videoId) {
      const video = videos.find((video) => video._id === videoId);
      setVideoObj(video);
    }
  }, [videoId, videos]);

  return (
    <div className="flex flex-col lg:flex-row max-w-7xl p-4 justify-center items-center-safe mx-auto lg:items-start gap-15">
      {/* Main Video Display */}
      <div className="flex items-center justify-center">
        <VideoDisplay videoObj={videoObj} />
      </div>

      {/* Suggested Videos Section */}
      <div className="w-full lg:w-[30%]">
        <SuggestionVideos />
      </div>
    </div>
  );
};

export default VideoPage;
