import { useState } from "react";
import SearchBar from "./SearchBar";
import LargeSideBar from './LargeSideBar'
import { FaUserCircle } from 'react-icons/fa';
import { useSelector } from "react-redux";
import { toggleAuthModal, setAuthType } from '../utils/redux/slices/showAuthSlice.js'
import ProfileDropdown from "./ProfileDropdown.jsx";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Header() {

  const dispatch = useDispatch();
  const navigate=useNavigate();

  const [showProfileDropdown,setShowProfileDropdown]=useState(false);

  // Selecting loggedIn and user
  const { isLoggedIn, userDetails } = useSelector((state) => state.auth)

  // Creating State variable to show search bar
  const [showSearch, setShowSearch] = useState(false);

  // Creating State variable to show side bar
  const [showSideBar, setShowSideBar] = useState(false);

  const handleToggleSearch = () => {
    setShowSearch(prev => !prev);
  }

  const handleToggleSideBar = () => {
    setShowSideBar(prev => !prev);
  }

  const handleProfieClick = () => {
    setShowProfileDropdown(prev => !prev);
  }

  const handleCreateChannel = () => {
    // Navigate to the create channel page, e.g. '/create-channel'
    navigate('/createChannel');
  }
 
  const createMenuItems = [
    {
      label: 'Upload video',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M10 8.64v6.72c0 .44.5.68.85.43l5.15-3.36a.5.5 0 000-.86L10.85 8.2a.5.5 0 00-.85.44z" fill="currentColor" />
          <path d="M21 12c0-5-4-9-9-9S3 7 3 12s4 9 9 9 9-4 9-9z" fill="none" stroke="currentColor" strokeWidth="2" />
        </svg>
      ),
    },
    {
      label: 'Create Channel',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M4 20h16M4 4h16v16H4V4z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M8 12h8M8 16h5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
  ];

  return (
    <header className="items-center justify-between px-4 py-2 bg-white z-30 w-screen flex">
      {/* Left: Hamburger + Logo */}

      {/* Icon or CloseSearchIcon */}
      {showSearch ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" focusable="false" aria-hidden="true" className='w-6 h-6' onClick={handleToggleSearch}>
        <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"></path>
      </svg> : <div className="flex items-center gap-2.5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-9 h-9 p-2 hover:bg-gray-200 rounded-full sm:w-10 sm:h-10 block cursor-pointer"
          aria-hidden="true"
          onClick={handleToggleSideBar}
        >
          <path d="M21 6H3V5h18v1zm0 5H3v1h18v-1zm0 6H3v1h18v-1z" />
        </svg>

        {/* Logo */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          id="yt-ringo2-svg_yt7"
          width="93"
          height="25"
          viewBox="0 0 93 20"
          focusable="false"
          aria-hidden="true"
          className="cursor-pointer w-20 md:w-24"
          onClick={() => navigate('/')}
        >
          <g>
            <path
              d="M14.4848 20C14.4848 20 23.5695 20 25.8229 19.4C27.0917 19.06 28.0459 18.08 28.3808 16.87C29 14.65 29 9.98 29 9.98C29 9.98 29 5.34 28.3808 3.14C28.0459 1.9 27.0917 0.94 25.8229 0.61C23.5695 0 14.4848 0 14.4848 0C14.4848 0 5.42037 0 3.17711 0.61C1.9286 0.94 0.954148 1.9 0.59888 3.14C0 5.34 0 9.98 0 9.98C0 9.98 0 14.65 0.59888 16.87C0.954148 18.08 1.9286 19.06 3.17711 19.4C5.42037 20 14.4848 20 14.4848 20Z"
              fill="#FF0033"
            />
            <path d="M19 10L11.5 5.75V14.25L19 10Z" fill="white" />
          </g>
          <g id="youtube-paths_yt7">
            <path d="M37.1384 18.8999V13.4399L40.6084 2.09994H38.0184L36.6984 7.24994C36.3984 8.42994 36.1284 9.65994 35.9284 10.7999H35.7684C35.6584 9.79994 35.3384 8.48994 35.0184 7.22994L33.7384 2.09994H31.1484L34.5684 13.4399V18.8999H37.1384Z" />
            <path d="M44.1003 6.29994C41.0703 6.29994 40.0303 8.04994 40.0303 11.8199V13.6099C40.0303 16.9899 40.6803 19.1099 44.0403 19.1099C47.3503 19.1099 48.0603 17.0899 48.0603 13.6099V11.8199C48.0603 8.44994 47.3803 6.29994 44.1003 6.29994ZM45.3903 14.7199C45.3903 16.3599 45.1003 17.3899 44.0503 17.3899C43.0203 17.3899 42.7303 16.3499 42.7303 14.7199V10.6799C42.7303 9.27994 42.9303 8.02994 44.0503 8.02994C45.2303 8.02994 45.3903 9.34994 45.3903 10.6799V14.7199Z" />
            <path d="M52.2713 19.0899C53.7313 19.0899 54.6413 18.4799 55.3913 17.3799H55.5013L55.6113 18.8999H57.6012V6.53994H54.9613V16.4699C54.6812 16.9599 54.0312 17.3199 53.4212 17.3199C52.6512 17.3199 52.4113 16.7099 52.4113 15.6899V6.53994H49.7812V15.8099C49.7812 17.8199 50.3613 19.0899 52.2713 19.0899Z" />
            <path d="M62.8261 18.8999V4.14994H65.8661V2.09994H57.1761V4.14994H60.2161V18.8999H62.8261Z" />
            <path d="M67.8728 19.0899C69.3328 19.0899 70.2428 18.4799 70.9928 17.3799H71.1028L71.2128 18.8999H73.2028V6.53994H70.5628V16.4699C70.2828 16.9599 69.6328 17.3199 69.0228 17.3199C68.2528 17.3199 68.0128 16.7099 68.0128 15.6899V6.53994H65.3828V15.8099C65.3828 17.8199 65.9628 19.0899 67.8728 19.0899Z" />
            <path d="M80.6744 6.26994C79.3944 6.26994 78.4744 6.82994 77.8644 7.73994H77.7344C77.8144 6.53994 77.8744 5.51994 77.8744 4.70994V1.43994H75.3244L75.3144 12.1799L75.3244 18.8999H77.5444L77.7344 17.6999H77.8044C78.3944 18.5099 79.3044 19.0199 80.5144 19.0199C82.5244 19.0199 83.3844 17.2899 83.3844 13.6099V11.6999C83.3844 8.25994 82.9944 6.26994 80.6744 6.26994ZM80.7644 13.6099C80.7644 15.9099 80.4244 17.2799 79.3544 17.2799C78.8544 17.2799 78.1644 17.0399 77.8544 16.5899V9.23994C78.1244 8.53994 78.7244 8.02994 79.3944 8.02994C80.4744 8.02994 80.7644 9.33994 80.7644 11.7299V13.6099Z" />
            <path d="M92.6517 11.4999C92.6517 8.51994 92.3517 6.30994 88.9217 6.30994C85.6917 6.30994 84.9717 8.45994 84.9717 11.6199V13.7899C84.9717 16.8699 85.6317 19.1099 88.8417 19.1099C91.3817 19.1099 92.6917 17.8399 92.5417 15.3799L90.2917 15.2599C90.2617 16.7799 89.9117 17.3999 88.9017 17.3999C87.6317 17.3999 87.5717 16.1899 87.5717 14.3899V13.5499H92.6517V11.4999ZM88.8617 7.96994C90.0817 7.96994 90.1717 9.11994 90.1717 11.0699V12.0799H87.5717V11.0699C87.5717 9.13994 87.6517 7.96994 88.8617 7.96994Z" />
          </g>
        </svg>
      </div>}

      {/* Right: Create, search, Profile */}
      {showSearch ? <SearchBar className="flex" /> : <div className="flex items-center gap-[5%] relative mr-6 w-auto min-w-[65%] md:justify-between justify-end-safe">

        {/* Search Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          height="24"
          viewBox="0 0 24 24"
          width="24"
          aria-hidden="true"
          className="w-6 h-6 stroke-semibold md:hidden"
          onClick={handleToggleSearch}>
          <path
            d="M16.296 16.996a8 8 0 11.707-.708l3.909 3.91-.707.707-3.909-3.909zM18 11a7 7 0 00-14 0 7 7 0 1014 0z"
            fillRule="evenodd"
            clipRule="evenodd" />
        </svg>

        {/* Search Bar */}
        <SearchBar className={"hidden md:flex"} />

        {/* Create Button with Dropdown */}
        <div className="relative group">
          <button className="px-3 py-2 bg-gray-100 rounded-full text-sm font-medium flex items-center gap-2 hover:bg-gray-200 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="218"
              height="18"
              fill="currentColor"
              className="sm:w-6 sm:h-6 h-5 w-5"
            >
              <path d="M20 12h-8v8h-1v-8H3v-1h8V3h1v8h8v1z" />
            </svg>
            <span className="sm:inline text-md hidden">Create</span>
          </button>
          <div className="hidden group-hover:block group-focus-within:block absolute w-[200%] bg-white rounded-xl shadow-lg py-2 text-sm border border-gray-200 right-0 top-full z-50">
            {createMenuItems.map(({ label, icon }) => (
              <button
                key={label}
                className="flex items-center gap-3 px-4 py-2 w-full text-left hover:bg-gray-100 focus:bg-gray-100 cursor-pointer" onClick={(label=='Create Channel')?handleCreateChannel:null}
              >
                {icon}
                <span>{label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Profile */}
        {isLoggedIn ? <div className="w-8 h-8 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold min-w-8 min-h-8 relative cursor-pointer" onClick={handleProfieClick}>
          {userDetails?.avatar?<img src={userDetails.avatar} alt="avatar" />:userDetails?.username.charAt(0).toUpperCase()}
          {showProfileDropdown && <ProfileDropdown />}
        </div> : <button
          onClick={() => dispatch(setAuthType('login'))}
          className="flex items-center gap-2 px-4 py-1.5 border border-blue-500 text-blue-500 rounded-full hover:bg-blue-50 transition cursor-pointer"
        >
          <FaUserCircle className="text-xl" />
          <span className="font-medium text-sm whitespace-nowrap">Sign In</span>
        </button>
        }
      </div>}
      {showSideBar && <LargeSideBar setShowSideBar={setShowSideBar}/>}
    </header>
  );
}
