"use client"
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'



const SearchButton = () => {
    const router = useRouter()
    const [search, setSearch] = useState<string>('Any');
    const handleSearch = ()=>{
        router.push("/trips/richard?distance=3-6km&time=more-than-20")
    }
    return (
        <button className='w-[20%] bg-purple-400 text-white text-sm px-6 py-2 rounded-xl hover:bg-purple-500' onClick={handleSearch}>
          SEARCH
        </button>
    )
}

export default SearchButton