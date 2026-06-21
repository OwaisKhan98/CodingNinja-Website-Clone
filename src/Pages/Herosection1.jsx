import React from 'react'
import Skillcapsules from '../Components/Herosection1components/Skillcapsules';

const Herosection1 = () => {
  return (
    <>
      <div className='text-white h-[100vh] mt-[-5%] bg-[linear-gradient(transparent,#000000_30%)]'>
        <div className='flex flex-col justify-center p-2 gap-2  h-full'>
          <h1 className='text-4xl ml-32 mulishfontbold mt-77'>Explore all our courses</h1>
          <h1 className='text-2xl ml-32 mulishfontexbold mt-10'>For working professionals</h1>
        </div>
        <Skillcapsules />
      </div>
      <div className='text-white h-[100vh] bg-red-500'>

      </div>
    </>
  )
}

export default Herosection1; 