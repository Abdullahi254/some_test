"use client"
import React, { useState } from 'react'

const Status = () => {
    const [status, selectStatus] = useState<string>('All Trips')
    const handleStatus = (val: string) => {
        selectStatus(val)
    }
    return (
        <div className='flex flex-col max-w-lg mx-auto text-gray-500'>
            <h2 className='px-4 mb-2'>Status</h2>
            <div className='flex space-x-6 rounded-xl w-fit bg-[#1a1a1a] p-2'>
                <button className={status === 'All Trips' ? 'bg-purple-400 text-white text-sm px-6 py-2 rounded-xl' :
                    'hover:bg-purple-400 hover:text-white text-gray-500 text-sm px-6 py-2 rounded-xl'
                } onClick={() => handleStatus('All Trips')}>
                    All Trips
                </button>
                <button className={status === 'Completed' ? 'bg-purple-400 text-white text-sm px-6 py-2 rounded-xl' :
                    'hover:bg-purple-400 hover:text-white text-gray-500 text-sm px-6 py-2 rounded-xl'
                } onClick={() => handleStatus('Completed')}>
                    Completed
                </button>
                <button className={status === 'Cancelled' ? 'bg-purple-400 text-white text-sm px-6 py-2 rounded-xl' :
                    'hover:bg-purple-400 hover:text-white text-gray-500 text-sm px-6 py-2 rounded-xl'
                } onClick={() => handleStatus('Cancelled')}>
                    Cancelled
                </button>
            </div>
        </div>
    )
}

export default Status