import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CommentCard from './CommentCard';
import { useSelector, useDispatch } from 'react-redux';
import { setAuthType } from '../utils/redux/slices/showAuthSlice';

const Comments = ({ videoId }) => {
    const dispatch = useDispatch();
    const [comments, setComments] = useState([]);
    const [text, setText] = useState('');

    const { isLoggedIn, userDetails } = useSelector(state => state.auth);

    const fetchUpdatedComments = async () => {
        try {
            const { data } = await axios.get(`http://localhost:5000/comments/getCommentsByVideoId/${videoId}`);
            console.log(data.comments);
            setComments(data.comments);
        } catch (err) {
            console.error('Failed to fetch updated comments:', err);
            alert("failed to fetch comments");
        }
    };

    useEffect(() => {
        if (videoId) {
            fetchUpdatedComments();
        }
    }, [videoId]);

    const handleAddComment = async () => {
        if (!isLoggedIn || !userDetails || !localStorage.getItem('userToken')) {
            dispatch(setAuthType('login'));
            return;
        }

        if (!text.trim()) return;

        try {
            const { data } = await axios.post(
                'http://localhost:5000/comments/addComment',
                {
                    text,
                    video: videoId,
                    user: userDetails._id,
                },
                {
                    headers: {
                        Authorization: `JWT ${localStorage.getItem('userToken')}`,
                    },
                }
            );
            setText('');
            setComments(prev => [{...(data?.comment), user: userDetails}, ...prev]);

        } catch (err) {
            console.error('Error adding comment:', err);
            alert("Failed to add comments");
        }
    };

    return (
        <div>
            <h3 className="text-lg font-bold mb-4">{comments.length} Comments</h3>

            <div className="flex gap-3 items-center mb-6">
                <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-white font-bold overflow-hidden">
                    {userDetails?.name?.[0] || (
                        <img
                            src="/images/defaultAvatar.jpg"
                            alt="avatar"
                            className="w-full h-full object-cover rounded-full"
                        />
                    )}
                </div>
                <input
                    value={text}
                    onChange={e => setText(e.target.value)}
                    placeholder="Add a comment..."
                    className="flex-1 border p-2 rounded-md"
                />
                <button onClick={handleAddComment} className="bg-blue-600 text-white px-3 py-2 rounded-md">
                    Comment
                </button>
            </div>

            <div className="space-y-6">
                {Array.isArray(comments) && comments.map((comment, index) => {
                    if (!comment || !comment._id || !comment.user) return null;

                    return (
                        <CommentCard
                            key={comment._id || index}
                            comment={comment}
                            currentUser={userDetails}
                            onUpdate={fetchUpdatedComments}
                        />
                    );
                })}

            </div>
        </div>
    );
};

export default Comments;
