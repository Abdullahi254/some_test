import React from 'react'
import SearchBox from '../components/Trip/SearchBox'
import Status from '../components/Trip/Status'
import DistanceComponent from '../components/Trip/DistanceComponent'
import TimeComponent from '../components/Trip/TimeComponent'
import SearchButton from '../components/Trip/SearchButton'


const page = () => {
  return (
    <div className="max-w-[80%] flex flex-col space-y-4 gap-4 mt-6 mx-auto">
      <div className='w-full'>
        <SearchBox />
      </div>
      <div className='w-full'>
        <Status />
      </div>
      <div className='w-full'>
        <div className='max-w-lg mx-auto grid grid-cols-2 gap-4'>
          <DistanceComponent />
          <TimeComponent />
        </div>
      </div>
      <div className='w-full text-center'>
      <SearchButton/>
      </div>
    </div>
  )
}

export default page