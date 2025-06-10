import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const CreateChannel = () => {
    const [banner, setBanner] = useState(null);
    const [avatar, setavatar] = useState(null);
    const [name, setName] = useState('');
    const [handle, setHandle] = useState('');
    const [description, setDescription] = useState('');

    const userDetails = useSelector((state) => state.auth.userDetails)

    const handleBannerUpload = (e) => setBanner(URL.createObjectURL(e.target.files[0]));
    const handleProfileUpload = (e) => setavatar(URL.createObjectURL(e.target.files[0]));

    const handlePublish = () => {
        console.log({ banner, avatar, name, handle, description });
        alert('Channel updated!');
    };

    return (
        <div className="max-w-4xl w-[90vw] mx-auto p-6 bg-white rounded shadow">
            <h2 className="text-2xl font-semibold mb-4">Create Channel</h2>
            <div className="flex space-x-6 mb-8 border-b pb-2">
                <button className="font-semibold border-b-2 border-black">Profile</button>
                <button className="text-gray-500 hover:text-black">Home tab</button>
            </div>

            {/* Banner Upload */}
            <div className="mb-8">
                <h3 className="font-medium mb-2">Banner image</h3>
                <p className="text-sm text-gray-600 mb-4">This image will appear across the top of your channel.</p>
                <div className="flex items-start gap-6">
                    <div className="w-64 h-36 bg-gray-100 flex items-center justify-center overflow-hidden">
                        {banner ? (
                            <img src={banner} alt="Banner" className="object-cover w-full h-full" />
                        ) : (
                            <img
                                src="/images/channelBannerPlaceholder.PNG"
                                alt="channelBannerPlaceholder"
                                className="object-cover w-full h-full"
                            />
                        )}
                    </div>
                    <div>
                        <p className="text-sm text-gray-600 mb-2">Recommended: 2048x1152px & 6MB or less</p>
                        <label className="inline-block px-2 py-1 bg-black text-white rounded cursor-pointer hover:bg-gray-800 transition-colors duration-150">
                            Upload
                            <input
                                type="file"
                                accept="image/*"
                                onChange={(e) => {
                                    const file = e.target.files[0];
                                    if (file) setBanner(URL.createObjectURL(file));
                                }}
                                className="hidden"
                                key={banner || 'initial-banner'}
                            />
                        </label>
                        {banner && (
                            <button
                                type="button"
                                className="ml-3 px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                                onClick={() => setBanner(null)}
                            >
                                Remove
                            </button>
                        )}
                    </div>
                </div>
            </div>

            {/* Profile Picture Upload */}
            <div className="mb-8">
                <h3 className="font-medium mb-2">Picture</h3>
                <p className="text-sm text-gray-600 mb-4">
                    Your profile picture will appear on your channel and next to your videos and comments.
                </p>
                <div className="flex items-start gap-6">
                    <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center overflow-hidden">
                        {avatar ? (
                            <img src={avatar} alt="Profile" className="object-cover w-full h-full" />
                        ) : (
                            <span className="text-2xl font-bold text-teal-700">
                                {userDetails?.username?.charAt(0)?.toUpperCase()}
                            </span>
                        )}
                    </div>
                    <div>
                        <p className="text-sm text-gray-600 mb-2">
                            Recommended: 98x98px, PNG/GIF, 4MB max
                        </p>
                        <label className="inline-block px-2 py-1 bg-black text-white rounded cursor-pointer hover:bg-gray-800 transition-colors duration-150">
                            Upload
                            <input
                                type="file"
                                accept="image/*"
                                onChange={(e) => {
                                    const file = e.target.files[0];
                                    if (file) setavatar(URL.createObjectURL(file));
                                }}
                                className="hidden"
                                key={avatar || 'initial-avatar'}
                            />
                        </label>

                        {avatar && (
                            <button
                                type="button"
                                className="ml-3 px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                                onClick={() => setavatar(null)}
                            >
                                Remove
                            </button>
                        )}
                    </div>
                </div>
            </div>

            {/* Name */}
            <div className="mb-6">
                <label className="block mb-1 font-medium">Name</label>
                <input
                    type="text"
                    className="w-full border p-2 rounded"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Datla Rohit Varma"
                />
            </div>

            {/* Handle */}
            <div className="mb-6">
                <label className="block mb-1 font-medium">Handle</label>
                <input
                    type="text"
                    className="w-full border p-2 rounded"
                    value={handle}
                    onChange={(e) => setHandle(e.target.value)}
                    placeholder="@datlarohitvarma738"
                />
                {handle && <p className="text-sm text-gray-500 mt-1">https://www.youtube.com/{handle}</p>}
            </div>

            {/* Description */}
            <div className="mb-8">
                <label className="block mb-1 font-medium">Description</label>
                <textarea
                    className="w-full border p-2 rounded h-28"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Tell viewers about your channel..."
                />
            </div>

            {/* Buttons */}
            <div className="flex justify-end gap-3">
                <button className="px-4 py-2 border rounded hover:bg-gray-100">Cancel</button>
                <button
                    className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800"
                    onClick={handlePublish}
                >
                    Publish
                </button>
            </div>
        </div>
    );
};

export default CreateChannel;
