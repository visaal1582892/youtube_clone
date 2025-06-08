import React from 'react'

const SearchBar = ({ className }) => {
    return (
        <div className={`flex-grow max-w-[80%] w-full mx-2 md:mt-0 items-center ${className} `}>
            <input
                type="text"
                placeholder="Search"
                className="flex-grow px-4 py-2 border border-gray-300 rounded-l-full focus:outline-none focus:border-blue-500 text-base"
            />
            <button className="px-4 py-2 bg-gray-100 border border-l-0 border-gray-300 rounded-r-full cursor-pointer hover:bg-gray-200">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    height="24"
                    viewBox="0 0 24 24"
                    width="24"
                    aria-hidden="true"
                    className="w-6 h-6 text-gray-700">
                    <path
                        d="M16.296 16.996a8 8 0 11.707-.708l3.909 3.91-.707.707-3.909-3.909zM18 11a7 7 0 00-14 0 7 7 0 1014 0z"
                        fillRule="evenodd"
                        clipRule="evenodd" />
                </svg>
            </button>
        </div>
    )
}

export default SearchBar;