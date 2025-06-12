import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MdHomeFilled } from 'react-icons/md';
import { SiYoutubeshorts } from 'react-icons/si';
import { MdSubscriptions } from 'react-icons/md';
import { MdAccountCircle } from 'react-icons/md';

const SmallSideBar = () => {
    const navigate = useNavigate();
    const items = [
        {
            label: 'Home',
            icon: <MdHomeFilled size={24} />,
            onClick: () => navigate('/')
        },
        {
            label: 'Shorts',
            icon: <SiYoutubeshorts size={24} />,
            onClick: null
        },
        {
            label: 'Subscriptions',
            icon: <MdSubscriptions size={24} />,
            onClick: null
        },
        {
            label: 'You',
            icon: <MdAccountCircle size={24} />,
            onClick: null
        },
    ];

    return (
        <div className="w-[7%] hidden flex-col items-center py-4 space-y-6 border-gray-200 md:flex bg-white h-[100vh] absolute top-[50%]">
            {items.map((item) => (
                <div
                    key={item.label}
                    className="flex flex-col items-center space-y-1 cursor-pointer hover:bg-gray-200 p-2 rounded-lg"
                    onClick={item.onClick}
                >
                    {item.icon}
                    <span className="text-[0.65em]">{item.label}</span>
                </div>
            ))}
        </div>
    );
};

export default SmallSideBar;
