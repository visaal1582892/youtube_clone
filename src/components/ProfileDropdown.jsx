import { useState, useRef, useEffect } from "react";
import { logout } from "../utils/redux/slices/authSlice";
import { useDispatch } from "react-redux";
import { useNavigate,Link } from "react-router-dom";

import {
    FaUserCircle,
    FaLanguage,
    FaKeyboard,
    FaCog,
    FaQuestionCircle,
} from "react-icons/fa";
import {
    MdOutlineSwitchAccount,
    MdLogout,
    MdOutlineDataUsage,
    MdLocationOn,
    MdOutlineColorLens,
    MdOutlineVideoSettings,
    MdOutlinePayments,
    MdOutlineTranslate,
} from "react-icons/md";
import { GoSignOut } from "react-icons/go";
import { IoMdArrowDropright } from "react-icons/io";
import { PiGlobeSimple } from "react-icons/pi";
import { TbMoon } from "react-icons/tb";
import { RiYoutubeLine } from "react-icons/ri";
import { useSelector } from "react-redux";

const ProfileDropdown = () => {
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef();
    const dispatch=useDispatch();
    const navigate=useNavigate();

    // Selecting user details
    const userDetails=useSelector((state) => state.auth.userDetails);

    // Function to handle logout
    const handleLogout = () => {
        dispatch(logout());
        navigate('/');
    }

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const menuItems = [
        {
            label: "Google Account",
            icon: <PiGlobeSimple />,
        },
        {
            label: "Switch account",
            icon: <MdOutlineSwitchAccount />,
            arrow: true,
        },
        {
            label: "Sign out",
            icon: <GoSignOut />,
        },
        "divider",
        {
            label: "YouTube Studio",
            icon: <MdOutlineVideoSettings />,
        },
        {
            label: "Purchases and memberships",
            icon: <MdOutlinePayments />,
        },
        "divider",
        {
            label: "Your data in YouTube",
            icon: <MdOutlineDataUsage />,
        },
        {
            label: "Appearance: Device theme",
            icon: <TbMoon />,
            arrow: true,
        },
        {
            label: "Language: British English",
            icon: <FaLanguage />,
            arrow: true,
        },
        {
            label: "Restricted Mode: Off",
            icon: <MdOutlineTranslate />,
            arrow: true,
        },
        {
            label: "Location: India",
            icon: <MdLocationOn />,
            arrow: true,
        },
        {
            label: "Keyboard shortcuts",
            icon: <FaKeyboard />,
        },
        "divider",
        {
            label: "Settings",
            icon: <FaCog />,
        },
        {
            label: "Help",
            icon: <FaQuestionCircle />,
        },
    ];

    return (
        <div className="absolute right-0 mt-2 w-80 bg-white rounded-xl shadow-2xl border border-gray-100 z-50 overflow-auto max-h-[90vh] top-[100%]">
            {/* Profile Header */}
            <div className="p-4 border-b border-gray-200">
                <div className="text-md font-normal text-black">{userDetails?.username}</div>

                {/* channel handle */}
                {userDetails?.channel?<div className="text-sm text-gray-500">{userDetails?.channel?.handle}</div>:null}

                {/* view channel link */}
                <Link to="/customizeContent" className="text-blue-600 text-sm hover:underline">
                    View your channel
                </Link>
            </div>

            {/* Menu Items */}
            {menuItems.map((item, idx) =>
                item === "divider" ? (
                    <hr key={idx} className="my-1 border-gray-200" />
                ) : (
                    <div
                        key={idx}
                        className="flex items-center px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer" onClick={item.label==="Sign out"?handleLogout:null}
                    >
                        <span className="text-lg text-gray-700 mr-3">{item.icon}</span>
                        <span className="flex-1 text-gray-800">{item.label}</span>
                        {item.arrow && <IoMdArrowDropright className="text-gray-400" />}
                    </div>
                )
            )}
        </div>
    )
}

export default ProfileDropdown;
