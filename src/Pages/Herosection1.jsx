import React from 'react'
import Skillcapsules from '../Components/Herosection1components/Skillcapsules';
import Cards from '../Components/Herosection1components/Cards';

const Herosection1 = () => {
  return (
    <>
      <div className='text-white h-[100vh] mt-[-5%] bg-[linear-gradient(transparent,#000000_30%)]'>
        <div className='flex flex-col justify-center p-2 gap-2  h-full'>
          <h1 className='text-4xl ml-32 mulishfontbold mt-77'>Explore all our courses</h1>
          <h1 className='text-2xl ml-32 mulishfontexbold mt-10'>For working professionals</h1>
          <Skillcapsules />
        </div>
        <div className='flex justify-center h-20 relative bottom-[7%]'>
        <hr className='bg-white w-[81%] mt-2'></hr>
        </div>
      </div>
      <div className='text-white h-[100vh] bg-red-500'>
        <Cards />
      </div>
    </>
  )
}

export default Herosection1; 