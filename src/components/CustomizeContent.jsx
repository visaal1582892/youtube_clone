import React, { useEffect, useState } from 'react';
import CustomizeVideoCard from './CustomizeVideoCard';
import { useSelector,useDispatch } from 'react-redux';
import axios from 'axios';
import { deleteVideoById } from '../utils/redux/slices/videosSlice';

const CustomizeContent = () => {
  const dispatch=useDispatch();
  const [videos, setVideos] = useState([]);
  const channel = useSelector((state) => state.auth?.userDetails?.channel);

  useEffect(() => {
    if (channel?.videos) {
      setVideos(channel.videos);
    }
  }, [channel]);

  const handleUpdate = (updatedVideo) => {
    setVideos((prev) =>
      prev.map((v) => (v._id === updatedVideo._id ? updatedVideo : v))
    );
    axios.put(`http://localhost:5000/videos/updateVideo/${updatedVideo._id}`, updatedVideo, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `JWT ${localStorage.getItem('userToken')}`,
      },
    })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
  };

  const handleDelete = (videoId) => {
    setVideos((prev) => prev.filter((v) => v._id !== videoId));
    axios.delete(`http://localhost:5000/videos/deleteVideo/${videoId}`, {
      headers: {
        'Authorization': `JWT ${localStorage.getItem('userToken')}`,
      },
    })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
    dispatch(deleteVideoById(videoId));
  };

  return (
    <div className="max-w-6xl mx-auto mt-6 px-4">
      {/* Channel Info Section */}
      {channel && (
        <div className="flex items-start gap-4 mb-6">
          {/* Avatar */}
          <div className="w-24 h-24 rounded-full bg-gray-300 overflow-hidden flex items-center justify-center text-white font-bold text-3xl">
            {channel.avatar ? (
              <img src={channel.avatar} alt="avatar" className="w-full h-full object-cover" />
            ) : (
              channel.name?.charAt(0)
            )}
          </div>

          {/* Channel Info */}
          <div>
            <h1 className="text-2xl font-bold">{channel.name}</h1>
            <p className="text-sm text-gray-600">{channel.handle} · {channel.subscribers || 0} subscribers</p>
            <p className="text-sm text-gray-500 mt-1">More about this channel...<span className="text-blue-600 ml-1 cursor-pointer">more</span></p>
          </div>
        </div>
      )}

      {/* Tabs */}
      <div className="flex border-b border-gray-200 mb-4">
        <button className="border-b-2 border-black text-black px-4 py-2 font-semibold">Manage Content</button>
        <button className="text-gray-500 px-4 py-2 font-semibold cursor-not-allowed">Posts</button>
      </div>

      {/* Videos Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.length === 0 ? (
          <div className="col-span-full flex flex-col items-center text-gray-500">
            <img src="/no-videos.png" alt="No videos" className="w-40 mb-2" /> {/* Use a placeholder or your own image */}
            <p>Create content on any device</p>
          </div>
        ) : (
          videos.map((video) => (
            <CustomizeVideoCard
              key={video._id}
              video={video}
              onUpdate={handleUpdate}
              onDelete={handleDelete}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default CustomizeContent;
