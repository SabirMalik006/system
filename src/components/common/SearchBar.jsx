import React from 'react';

const SearchBar = ({ placeholder = "Search items", onSearch }) => {
    return (
        <div className="relative">
            <input
                type="text"
                placeholder={placeholder}
                className="w-80 px-4 py-2 pl-10 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-[#1A8FA0] bg-white"
            />
            <svg className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
        </div>
    );
};

export default SearchBar;