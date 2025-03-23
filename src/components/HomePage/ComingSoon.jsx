import React from 'react'
import images from '../coming.svg'
function ComingSoon() {
  return (
        <div className='flex flex-col justify-center items-center h-full relative'>
            <h1 className='text-2xl font-bold absolute top-30 text-black max-md:text-lg max-md:top-55'>This page is under construction</h1>
            <img src={images} alt="" className='w-125 h-125 max-md:w-75 max-md:h-75 bg-gray-300 p-5 rounded-xl shadow-md' />
    </div>
  )
}

export default ComingSoon