import React from 'react';

const LoadingPage = () => {
  return (
    <div className="flex items-center justify-center h-screen text-white w-full absolute inset-0">
      <div className="flex flex-col items-center space-y-4">
        {/* Spinner */}
        <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>

        {/* Optional Text */}
        <p className="text-lg font-medium animate-pulse text-slate-800">Loading, please wait...</p>
      </div>
    </div>
  );
};

export default LoadingPage;
