import React, { useState } from 'react';
import { FaEllipsisV, FaThumbsUp, FaThumbsDown } from 'react-icons/fa';
import axios from 'axios';

const CommentCard = ({ comment, currentUser, onUpdate }) => {
    const [showOptions, setShowOptions] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [editedText, setEditedText] = useState(comment.text);

    const isOwner = currentUser?._id === comment.user._id;

    const handleUpdate = async () => {
        try {
            await axios.put(
                `http://localhost:5000/comments/updateComment/${comment._id}`,
                { text: editedText },
                {
                    headers: {
                        Authorization: `JWT ${localStorage.getItem('userToken')}`,
                    },
                }
            );
            setIsEditing(false);
            if (onUpdate) onUpdate();
        } catch (err) {
            console.error('Update failed:', err);
        }
    };

    const handleDelete = async () => {
        try {
            await axios.delete(`http://localhost:5000/comments/deleteComment/${comment._id}`, {
                headers: {
                    Authorization: `JWT ${localStorage.getItem('userToken')}`,
                },
            });
            if (onUpdate) onUpdate();
        } catch (err) {
            console.error('Delete failed:', err);
        }
    };

    return (
        <div className="flex items-start gap-3 relative">
            {/* Avatar */}
            <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white font-bold">
                {comment?.user?.username?.[0] || '?'}
            </div>

            <div className="flex-1">
                {/* Name and Time */}
                <div className="flex items-center gap-2 text-sm">
                    <span className="font-semibold">{comment?.user?.username || 'Unknown'}</span>
                    <span className="text-gray-500">{new Date(comment.createdAt).toLocaleDateString()}</span>
                </div>

                {/* Comment text */}
                {isEditing ? (
                    <div className="mt-1">
                        <input
                            value={editedText}
                            onChange={(e) => setEditedText(e.target.value)}
                            className="border rounded w-full p-1"
                        />
                        <button onClick={handleUpdate} className="text-blue-500 text-sm mr-2 mt-1">Save</button>
                        <button onClick={() => setIsEditing(false)} className="text-sm">Cancel</button>
                    </div>
                ) : (
                    <p className="text-sm mt-1">{comment.text}</p>
                )}

                {/* Actions */}
                <div className="flex gap-4 text-gray-600 text-sm mt-2 items-center">
                    <FaThumbsUp /> 16
                    <FaThumbsDown />
                    <span className="cursor-pointer">Reply</span>
                </div>
            </div>

            {/* Dots menu */}
            {isOwner && (
                <div className="relative">
                    <button onClick={() => setShowOptions(!showOptions)}>
                        <FaEllipsisV />
                    </button>
                    {showOptions && (
                        <div className="absolute top-6 right-0 bg-white border shadow rounded-md text-sm z-10">
                            <button
                                onClick={() => {
                                    setIsEditing(true);
                                    setShowOptions(false);
                                }}
                                className="block px-3 py-2 hover:bg-gray-100 w-full text-left"
                            >
                                Edit
                            </button>
                            <button
                                onClick={handleDelete}
                                className="block px-3 py-2 hover:bg-gray-100 text-red-500 w-full text-left"
                            >
                                Delete
                            </button>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default CommentCard;
