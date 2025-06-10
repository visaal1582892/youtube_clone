import React from 'react';

const items = [
    {
        label: 'Home',
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                height="24"
                viewBox="0 0 24 24"
                width="24"
                aria-hidden="true"
                className='w-6 h-6'
            >
                <path
                    clipRule="evenodd"
                    fillRule="evenodd"
                    d="M22.146 11.146a.5.5 0 01-.353.854H20v7.5a1.5 1.5 0 01-1.5 1.5H14v-8h-4v8H5.5A1.5 1.5 0 014 19.5V12H2.207a.5.5 0 01-.353-.854L12 1l10.146 10.146Z"
                />
            </svg>
        ),
    },
    {
        label: 'Shorts',
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                height="24"
                viewBox="0 0 24 24"
                width="24"
                aria-hidden="true"
                className='w-6 h-6'
            >
                <path
                    clipRule="evenodd"
                    fillRule="evenodd"
                    d="M18.45 8.851c1.904-1.066 2.541-3.4 1.422-5.214-1.119-1.814-3.57-2.42-5.475-1.355L5.55 7.247c-1.29.722-2.049 2.069-1.968 3.491.081 1.423.989 2.683 2.353 3.268l.942.404-1.327.742c-1.904 1.066-2.541 3.4-1.422 5.214 1.119 1.814 3.57 2.421 5.475 1.355l8.847-4.965c1.29-.722 2.049-2.068 1.968-3.49-.081-1.423-.989-2.684-2.353-3.269l-.942-.403 1.327-.743ZM10 14.567a.25.25 0 00.374.217l4.45-2.567a.25.25 0 000-.433l-4.45-2.567a.25.25 0 00-.374.216v5.134Z"
                />
            </svg>
        ),
    },
    {
        label: 'Subscriptions',
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                height="24"
                viewBox="0 0 24 24"
                width="24"
                aria-hidden="true"
                className='w-6 h-6'
            >
                <path
                    clipRule="evenodd"
                    fillRule="evenodd"
                    d="M4 4.5A1.5 1.5 0 015.5 3h13A1.5 1.5 0 0120 4.5H4Zm16.5 3h-17v11h17v-11ZM3.5 6A1.5 1.5 0 002 7.5v11A1.5 1.5 0 003.5 20h17a1.5 1.5 0 001.5-1.5v-11A1.5 1.5 0 0020.5 6h-17Zm7.257 4.454a.5.5 0 00-.757.43v4.233a.5.5 0 00.757.429L15 13l-4.243-2.546Z"
                />
            </svg>
        ),
    },
    {
        label: 'You',
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                height="24"
                viewBox="0 0 24 24"
                width="24"
                aria-hidden="true"
                className='w-6 h-6'
            >
                <path
                    clipRule="evenodd"
                    fillRule="evenodd"
                    d="M12 20.5c1.894 0 3.643-.62 5.055-1.666a5.5 5.5 0 00-10.064-.105.755.755 0 01-.054.099A8.462 8.462 0 0012 20.5Zm4.079-5.189a7 7 0 012.142 2.48 8.5 8.5 0 10-12.443 0 7 7 0 0110.3-2.48ZM12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Zm2-12.5a2 2 0 11-4 0 2 2 0 014 0Zm1.5 0a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0Z"
                />
            </svg>
        ),
    },
];


const SmallSideBar = () => {
    return (
        <div className="w-[6%] hidden flex-col items-center py-4 space-y-6 border-gray-200 md:flex bg-white h-[100vh] absolute top-[50%]">
            {items.map((item) => (
                <div key={item.label} className="flex flex-col items-center space-y-1 cursor-pointer hover:bg-gray-200 p-2 rounded-lg">
                    {item.icon}
                    <span className="text-[0.65em]">{item.label}</span>
                </div>
            ))}
        </div>
    );
};

export default SmallSideBar;
