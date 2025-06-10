import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setCategory } from '../utils/redux/slices/searchSlice';

const categories = [
    'All',
    'Music',
    'Gaming',
    'Education',
    'Entertainment',
    'News',
    'Sports',
    'Technology',
    'Lifestyle',
];

const HeaderCategories = () => {
    const [active, setActive] = useState('All');
    const dispatch=useDispatch();

    return (
        <div className="flex items-center space-x-3 no-scrollbar px-4 py-2 bg-white h-13 relative overflow-x-auto md:w-[94%] md:ml-[6%]">
            {categories.map((category) => (
                <button
                    key={category}
                    onClick={() => {setActive(category);
                        dispatch(setCategory(category))
                    }}
                    className={`px-4 py-1.5 text-[0.8em] font-medium whitespace-nowrap rounded-lg flex items-center-safe justify-center-safe cursor-pointer
            ${active === category
                            ? 'bg-black text-white'
                            : 'bg-gray-100 text-black hover:bg-gray-200'
                        }`}
                >
                    {category}
                </button>
            ))}
        </div>
    );
};

export default HeaderCategories;
