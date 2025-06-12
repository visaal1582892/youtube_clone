import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ChannelVideos from './ChannelVideos';
import { setAuthType } from '../utils/redux/slices/showAuthSlice';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import axios from 'axios';


const ChannelPage = () => {
    const { channelId } = useParams();

    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [channel, setChannel] = useState(null);

    useEffect(() => {
        channelId && axios.get(`http://localhost:5000/channels/getChannelById/${channelId}`)
            .then(response => {
                setChannel(response.data.channel);
            })
            .catch(error => {
                console.error("Failed to fetch channel:", error);
            });
    }, [])

    if (!channelId) {
        return (
            <div className="flex justify-center items-center h-64">
                <span className="text-gray-500">Loading channel...</span>
            </div>
        );
    }

    return (
        <div className="max-w-6xl mx-auto mt-8 bg-white rounded-lg shadow p-2 flex flex-col items-center-safe">
            {/* Banner */}
            <div className="w-full bg-gray-200 rounded-lg overflow-hidden relative">
                {channel?.banner ? (
                    <img
                        src={channel?.banner}
                        alt="Channel Banner"
                        className="w-full h-full object-cover"
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-400">
                        No Banner
                    </div>
                )}
            </div>

            {/* Avatar, name, and info */}
            <div className="flex flex-col md:flex-row items-center md:items-end gap-4 md:gap-6 px-3 md:px-6 mt-2 w-full">
                <div className="w-20 h-20 md:w-28 md:h-28 rounded-full overflow-hidden border-4 border-white bg-gray-300 shadow-md flex-shrink-0">
                    {channel?.avatar ? (
                        <img
                            src={channel?.avatar}
                            alt="Channel Avatar"
                            className="w-full h-full object-cover"
                        />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center text-2xl md:text-3xl text-gray-400">
                            ?
                        </div>
                    )}
                </div>
                <div className="flex-1 mt-3 md:mt-0 w-full">
                    <h2 className="text-lg md:text-2xl font-bold break-words">{channel?.name || "Channel Name"}</h2>
                    <div className="flex flex-wrap items-center gap-2 text-gray-500 text-xs md:text-sm">
                        <span>{channel?.handle || "handle"}</span>
                        <span className="mx-1 text-xs">•</span>
                        <span>
                            {channel?.subscribers !== undefined
                                ? `${channel.subscribers} subscribers`
                                : "0 subscribers"}
                        </span>
                    </div>
                    <div className="mt-2 text-gray-700 text-xs md:text-sm break-words max-w-full">
                        {channel?.description || "No description"}
                    </div>
                    <button className="mt-2 px-4 md:px-6 py-2 bg-black text-white rounded-full font-semibold text-xs md:text-sm hover:bg-gray-800 transition w-full md:w-auto">
                        Subscribe
                    </button>
                </div>
            </div>

            <div className="mt-6 md:mt-8 px-3 md:px-6 border-b border-gray-200 w-full overflow-x-auto">
                <ul className="flex gap-4 md:gap-8 font-medium text-xs md:text-base text-gray-600">
                    <li className="border-b-2 border-black pb-2 cursor-pointer">Videos</li>
                    <li className="hover:text-black cursor-pointer">Shorts</li>
                    <li className="hover:text-black cursor-pointer">Playlists</li>
                </ul>
            </div>
            <div className="px-6 py-6">
                <ChannelVideos videos={channel?.videos || []} />
            </div>
        </div>
    );
};

export default ChannelPage;
