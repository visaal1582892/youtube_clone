import React from 'react';
import {
  MdHomeFilled,
  MdSlowMotionVideo,
  MdSubscriptions,
  MdHistory,
  MdPlaylistPlay,
  MdVideoLibrary,
  MdWatchLater,
  MdThumbUp,
  MdLocalFireDepartment,
  MdShoppingBag,
  MdMusicNote,
  MdLocalMovies,
  MdLiveTv,
  MdSportsEsports,
  MdOutlineArticle,
  MdOutlineSportsSoccer,
  MdSchool,
  MdOutlineFaceRetouchingNatural,
} from 'react-icons/md';

const menu = [
  {
    section: '',
    items: [
      { label: 'Home', icon: <MdHomeFilled /> },
      { label: 'Shorts', icon: <MdSlowMotionVideo /> },
      { label: 'Subscriptions', icon: <MdSubscriptions /> },
    ],
  },
  {
    section: 'You',
    items: [
      { label: 'History', icon: <MdHistory /> },
      { label: 'Playlists', icon: <MdPlaylistPlay /> },
      { label: 'Your videos', icon: <MdVideoLibrary /> },
      { label: 'Watch Later', icon: <MdWatchLater /> },
      { label: 'Liked videos', icon: <MdThumbUp /> },
    ],
  },
  {
    section: 'Explore',
    items: [
      { label: 'Trending', icon: <MdLocalFireDepartment /> },
      { label: 'Shopping', icon: <MdShoppingBag /> },
      { label: 'Music', icon: <MdMusicNote /> },
      { label: 'Movies', icon: <MdLocalMovies /> },
      { label: 'Live', icon: <MdLiveTv /> },
      { label: 'Gaming', icon: <MdSportsEsports /> },
      { label: 'News', icon: <MdOutlineArticle /> },
      { label: 'Sports', icon: <MdOutlineSportsSoccer /> },
      { label: 'Learning', icon: <MdSchool /> },
      { label: 'Fashion & Beauty', icon: <MdOutlineFaceRetouchingNatural /> },
    ],
  },
];

const LargerSideBar = () => {
  return (
    <div className="w-54 h-screen border-r overflow-y-auto border-gray-200 bg-white text-sm absolute left-0 top-[50%] z-50 animate-showing">
      {menu.map((block, i) => (
        <div key={i} className="border-b border-gray-200">
          {block.section && (
            <div className="px-4 pt-4 pb-2 text-gray-600 font-semibold">{block.section}</div>
          )}
          {block.items.map(({ label, icon }) => (
            <div
              key={label}
              className={`flex items-center gap-4 px-4 py-2 cursor-pointer hover:bg-gray-100`}
            >
              <div className="text-xl">{icon}</div>
              <span>{label}</span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default LargerSideBar;
