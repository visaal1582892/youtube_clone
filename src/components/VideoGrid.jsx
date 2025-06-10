import React, { useEffect,useMemo } from 'react';
import VideoCard from './VideoCard';
import useFetch from '../utils/customHooks/useFetch';
import { useDispatch, useSelector } from 'react-redux';
import { setData, setLoading, setError } from '../utils/redux/slices/videosSlice.js';

const VideoGrid = () => {
  const dispatch = useDispatch();

  // Using custom hook
  const { data, error, loading } = useFetch("http://localhost:5000/videos/getAllVideos");

  // Dispatch to Redux store
  useEffect(() => {
    if (data) {
      dispatch(setData(data));
      dispatch(setLoading(false));
    } else if (error) {
      dispatch(setError(error.message));
      dispatch(setLoading(false));
    } else if (loading) {
      dispatch(setLoading(true));
    }
  }, [dispatch, data, error]);

  // Get videos and search filters from Redux
  const videos = useSelector((state) => state.videos.data);
  const { category, query } = useSelector((state) => state.search);

  // Filter videos based on category and search query
  const filteredVideos = useMemo(() => {
    return videos.filter((video) =>
      (category === 'All' || video.category === category) &&
      video.title?.toLowerCase().includes(query.toLowerCase()));
  }, [videos, query, category]);


  return (
    <div className="grid gap-6 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 w-full md:w-[94%] md:ml-[6%]">
      {filteredVideos.length > 0 ? (
        filteredVideos.map((video) => (
          <VideoCard key={video._id} video={video} />
        ))
      ) : (
        <p className="text-center col-span-full text-gray-500">Loading ...</p>
      )}
    </div>
  );
};

export default VideoGrid;
