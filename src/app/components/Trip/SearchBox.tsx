"use client"
import React, { useState } from 'react'
import { CiSearch } from "react-icons/ci";
function SearchBox() {
    const [query, setQuery] = useState<string>('');

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Searching for:", query);
        // Add search functionality here
    };

    return (
        <>
            <h2 className='text-gray-400 max-w-lg mx-auto mb-2 px-4'>Keyword</h2>
            <form onSubmit={handleSearch} className="max-w-lg mx-auto text-white">
                <div className="relative">
                    <input
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Search by distance, duration, keyword...."
                        className=" text-sm w-full p-3 bg-[#1a1a1a] pl-10 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-200"
                    />
                    <button
                        type="submit"
                        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white text-lg  hover:text-purple-500"
                    >
                        <CiSearch />
                    </button>
                </div>
            </form>
        </>

    );
}

export default SearchBox;