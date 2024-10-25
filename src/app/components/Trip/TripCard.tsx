"use client"
import React from 'react'
import { CiStar } from "react-icons/ci";
import { FiMapPin } from "react-icons/fi";
import { useRouter } from 'next/navigation'

const TripCard = () => {
    const router = useRouter()
    const handleRedirection = (name: string, id: string)=>{
        router.push(`/trips/${name}/${id}`)
    }
    return (
        <div className='w-full max-w-sm h-72 bg-cover bg-center shadow-lg overflow-hidden rounded-xl cursor-pointer'
            style={{
                backgroundImage: `url('/images/safari.jpg')`,
            }}
            onClick={()=>handleRedirection('papa', 'id')}
        >
            <div className="py-6 px-4 bg-black bg-opacity-40 h-full flex flex-col justify-between">
                <div>
                    <div className='text-white w-full justify-between flex items-center mb-2'>
                        <h3 className='text-sm'>Tue Oct 22, 2024 2:15</h3>
                        <button className='rounded-2xl bg-green-400 px-4 py-2 text-sm'>Complete</button>
                    </div>

                    <div className='flex justify-end mb-4'>
                        <CiStar className='text-orange-300 cursor-pointer' />
                        <CiStar className='text-orange-300 cursor-pointer' />
                        <CiStar className='text-orange-300 cursor-pointer' />
                        <CiStar className='text-orange-300 cursor-pointer' />
                        <CiStar className='text-orange-300 cursor-pointer' />
                    </div>

                    <div className='flex space-x-2 mb-2'>
                        <FiMapPin className='text-green-500' />
                        <h3 className='text-sm text-white'>St James, Nairobi</h3>
                    </div>

                    <div className='flex space-x-2 mb-2'>
                        <FiMapPin className='text-red-400' />
                        <h3 className='text-sm text-white'>Amboselii Estate, Nairobi</h3>
                    </div>
                </div>

                <div>
                    <h3 className='mb-1 font-semibold text-white'>
                        KES 200
                    </h3>
                    <h3 className='mb-1 text-white text-sm'>
                        2.1KM
                    </h3>
                </div>


            </div>
        </div>
    )
}

export default TripCard