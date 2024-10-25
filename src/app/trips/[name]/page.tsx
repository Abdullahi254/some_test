import TripCard from '@/app/components/Trip/TripCard'
import React from 'react'
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import Link from 'next/link';

const page = () => {
    return (
        <div className="max-w-[80%] flex flex-col space-y-4 gap-4 mt-6 mx-auto py-6">

            <div className='flex space-x-4'>
                <Link href="/trips">
                    <IoArrowBackCircleOutline className='text-purple-300 text-4xl cursor-pointer' />
                </Link>

                <div className='px-4 bg-[#1a1a1a] rounded-xl flex justify-between space-x-4 items-center'>
                    <span className='text-gray-300 text-xs'>Name</span>
                    <IoMdClose className='text-white cursor-pointer' />
                </div>
                <div className='px-4 bg-[#1a1a1a] rounded-xl flex justify-between space-x-4 items-center'>
                    <span className='text-gray-300 text-xs'>3 to 6 km</span>
                    <IoMdClose className='text-white cursor-pointer' />
                </div>
                <div className='px-4 bg-[#1a1a1a] rounded-xl flex justify-between space-x-4 items-center'>
                    <span className='text-gray-300 text-xs'>More than 20 min</span>
                    <IoMdClose className='text-white cursor-pointer' />
                </div>
            </div>

            <div className='grid gap-4 grid-cols-1 md:grid-cols-3'>
                <div className='col-span-full mb-2 flex space-x-2'>
                    <h3 className='text-purple-300 text-sm font-semibold'>23</h3>
                    <h3 className='text-white text-sm font-semibold'>trips found</h3>
                </div>
                <TripCard />
                <TripCard />
                <TripCard />
                <TripCard />
                <TripCard />
                <TripCard />
            </div>
        </div>
    )
}

export default page