import React, { useState } from 'react';

const CustomizeVideoCard = ({ video, onUpdate, onDelete }) => {
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState(video);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleUpdateSubmit = () => {
    onUpdate(form); // update in state
    setShowModal(false);
    // send update API request
  };

  const handleDelete = () => {
    onDelete(video._id);
    // send delete API request
  };

  return (
    <div className="bg-white shadow rounded-lg p-4 relative">
      <img src={video.thumbnailUrl} alt="Thumbnail" className="rounded mb-2" />
      <h3 className="font-semibold text-lg">{video.title}</h3>
      <p className="text-sm text-gray-500">{video.views} views • {new Date(video.createdAt).toLocaleDateString()}</p>

      <div className="flex gap-3 mt-3">
        <button
          onClick={() => setShowModal(true)}
          className="bg-slate-500 text-white px-3 py-1 rounded"
        >
          Update
        </button>
        <button
          onClick={handleDelete}
          className="bg-red-500 text-white px-3 py-1 rounded"
        >
          Delete
        </button>
      </div>

      {/* Update Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-40">
          <div className="bg-white rounded-lg p-6 w-[90%] max-w-md">
            <h2 className="text-xl font-bold mb-4">Update Video</h2>
            <input
              type="text"
              name="title"
              value={form.title}
              onChange={handleChange}
              className="w-full border px-3 py-2 mb-3 rounded"
              placeholder="Title"
            />
            <input
              type="text"
              name="description"
              value={form.description}
              onChange={handleChange}
              className="w-full border px-3 py-2 mb-3 rounded"
              placeholder="Description"
            />
            <div className="flex justify-end gap-2 mt-4">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-1 border rounded"
              >
                Cancel
              </button>
              <button
                onClick={handleUpdateSubmit}
                className="px-4 py-1 bg-blue-600 text-white rounded"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomizeVideoCard;
