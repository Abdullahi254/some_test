"use client"
import React from 'react'


const LatestTrips = () => {
    return (
        <ol className='w-full h-full py-4 max-w-md xl:max-w-lg text-white px-2 rounded-lg flex flex-col space-y-6'>
            <div className=' flex w-full justify-end'>
                <button className='text-purple-300 text-sm'>See all</button>
            </div>
            <li className='w-full flex justify-between'>
                <div className='flex space-x-2 items-center'>
                    <h1 className='text-lg text-yellow-300'>1.</h1>
                    <h2 className='text-sm'>Nextgen Mall, Nairobi</h2>
                </div>
                <div>
                    <h3 className='text-sm text-gray-600'>Tue Oct 22, 2024 2:30</h3>
                </div>
            </li>
            <li className='w-full flex justify-between'>
                <div className='flex space-x-2 items-center'>
                    <h1 className='text-lg text-yellow-300'>1.</h1>
                    <h2 className='text-sm'>Nextgen Mall, Nairobi</h2>
                </div>
                <div>
                    <h3 className='text-sm text-gray-600'>Tue Oct 22, 2024 2:30</h3>
                </div>
            </li>
            <li className='w-full flex justify-between'>
                <div className='flex space-x-2 items-center'>
                    <h1 className='text-lg text-yellow-300'>1.</h1>
                    <h2 className='text-sm'>Nextgen Mall, Nairobi</h2>
                </div>
                <div>
                    <h3 className='text-sm text-gray-600'>Tue Oct 22, 2024 2:30</h3>
                </div>
            </li>
            <li className='w-full flex justify-between'>
                <div className='flex space-x-2 items-center'>
                    <h1 className='text-lg text-yellow-300'>1.</h1>
                    <h2 className='text-sm'>Nextgen Mall, Nairobi</h2>
                </div>
                <div>
                    <h3 className='text-sm text-gray-600'>Tue Oct 22, 2024 2:30</h3>
                </div>
            </li>
        </ol>
    )
}

export default LatestTrips