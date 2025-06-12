import { FaThumbsUp, FaThumbsDown, FaShare, FaEllipsisH } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Comments from './Comments';

const VideoDisplay = ({ videoObj }) => {
    const { video, title, views, likes, createdAt, description, channel } = videoObj || {};

    const navigate=useNavigate();

    // Function to navigate to channel page
    const navigateToChannelPage = (event) => {
        event.stopPropagation();
        navigate(`/viewChannel/${channel._id}`);
    };

    return (
        <div className="w-full lg:max-w-2xl max-w-3xl flex  flex-col justigy-center">
            {/* Video Player */}
            <div className="aspect-video w-full bg-black rounded-md overflow-hidden mb-4">
                <video
                    className="w-full h-full"
                    controls
                    src={video}
                    title={title}
                    autoPlay
                >
                    Your browser does not support the video tag.
                </video>
            </div>

            {/* Video Title */}
            <h2 className="text-xl font-bold mb-2">{title}</h2>

            {/* Channel Info & Buttons */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                <div className="flex items-center space-x-4">
                    {/* Channel Logo */}
                    <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center font-bold text-white text-xl cursor-pointer" onClick={(event) => navigateToChannelPage(event)}>
                        {channel?.avatar ? <img src={channel?.avatar} alt="channelAvatar" className='rounded-full' /> : (channel?.name?.charAt(0))}
                    </div>
                    <div>
                        <p className="font-semibold">{channel?.name}</p>
                        <p className="text-gray-500 text-sm">{channel?.subscribers} subscribers</p>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center space-x-3 mt-4 sm:mt-0">
                    {/* Like/Dislike Group */}
                    <div className="flex items-center bg-gray-100 hover:bg-gray-200 px-3 py-1.5 rounded-full space-x-2 cursor-pointer">
                        <FaThumbsUp className="text-gray-600" />
                        <span className="text-sm font-medium text-gray-800">{likes || '48K'}</span>
                        <div className="h-5 w-px bg-gray-400" />
                        <FaThumbsDown className="text-gray-600" />
                    </div>

                    {/* Share Button */}
                    <button className="flex items-center bg-gray-100 hover:bg-gray-200 px-3 py-1.5 rounded-full space-x-2 cursor-pointer">
                        <FaShare className="text-gray-600" />
                        <span className="text-sm font-medium text-gray-800">Share</span>
                    </button>

                    {/* More Options Button */}
                    <button className="flex items-center justify-center bg-gray-100 hover:bg-gray-200 px-3 py-1.5 rounded-full cursor-pointer">
                        <FaEllipsisH className="text-gray-600" />
                    </button>
                </div>
            </div>

            {/* Views & Tags */}
            <div className="text-sm text-gray-600 mb-4">
                <p>
                    {views || '6.1M'} views • {createdAt ? new Date(createdAt).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' }) : '2 years ago'}
                </p>
            </div>

            {/* Description */}
            <div className="bg-gray-100 p-4 rounded-md text-sm mb-6 whitespace-pre-line">
                {description || 'No description provided.'}
            </div>

            {/* Comments */}
            <Comments videoId={videoObj?._id}/>
        </div>
    );
};

export default VideoDisplay;
