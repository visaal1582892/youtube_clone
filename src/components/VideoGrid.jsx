import React, { useEffect } from 'react';
import VideoCard from './VideoCard';
import useFetch from '../utils/customHooks/useFetch';
import { useDispatch,useSelector } from 'react-redux';
import {setData,setLoading,setError} from '../utils/redux/slices/videosSlice.js'

const VideoGrid = () => {

    // Using dispatch
    const dispatch=useDispatch();

    // Using my custom hook here
    const {data,error,loading}=useFetch("http://localhost:5000/videos/getAllVideos");

    useEffect(() => {
        if(data){
            console.log(data);
            dispatch(setData(data))
            dispatch(setLoading(false))
        }
        else if(error){
            dispatch(setError(error.message));
            dispatch(setLoading(false))
        }
        else if(loading){
            dispatch(setLoading(false));
        }
    }, [dispatch,data,error])

    const videos=useSelector((state)=>state.videos.data);

  return (
    <div className="grid gap-6 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 w-[94%] ml-[6%]">
      {videos!=[] && videos.map(video => (
        <VideoCard key={video._id} video={video} />
      ))}
    </div>
  );
};

export default VideoGrid;
