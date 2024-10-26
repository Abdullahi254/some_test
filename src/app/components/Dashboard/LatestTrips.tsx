"use client"
import React from 'react'


const LatestTrips = ({ dts }: any) => {
    // Sort the trips by latestTrip in descending order
    const sortedTrips = dts.trips.sort((a: any, b: any) => {
        return new Date(b.request_date).getTime() - new Date(a.request_date).getTime();
    });

    // Pick the first 4 trips
    const topTrips = sortedTrips.slice(0, 4);
    return (
        <ol className='w-full h-full py-4 max-w-md xl:max-w-lg text-white px-2 rounded-lg flex flex-col space-y-6'>
            <div className=' flex w-full justify-end'>
                <button className='text-purple-300 text-sm'>See all</button>
            </div>
            {
                topTrips.map((trip: any, index: number) => {
                    return (
                        <li className='w-full flex justify-between' key={index}>
                            <div className='flex space-x-2 items-center'>
                                <h1 className='text-lg text-yellow-300'>{index+1}</h1>
                                <h2 className='text-sm'>{trip?.dropoff_location}</h2>
                            </div>
                            <div>
                                <h3 className='text-sm text-gray-600'>{trip?.pickup_date}</h3>
                            </div>
                        </li>
                    )
                })
            }

        </ol>
    )
}

export default LatestTrips