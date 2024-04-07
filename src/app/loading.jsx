"use client"
import React from 'react'
import Image from 'next/image';
const Loading = () => {
  return (
    <div className='absolute top-0 left-0 w-full z-[999] h-[100vh] flex items-center justify-center bg-white'>

      <h1 className='text-4xl text-black'>Loading...</h1>

  </div>
  )
}

export default Loading