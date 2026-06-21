import React from 'react'
import aiicon from '../../assets/Herosections1icons/aiicon.svg'
import dbicon from '../../assets/Herosections1icons/dbicon.svg'
import fire from '../../assets/Herosections1icons/fire.svg'
import growicon from '../../assets/Herosections1icons/growicon.svg'
import sdicon from '../../assets/Herosections1icons/sdicon.svg'

const Skillcapsules = () => {
  
  const skills = [
    { icon: fire, name: "Popular", color: "focus:bg-[#271405] focus:border-[#D76D15]"},
    { icon: growicon, name: "Data Analytics", color: "focus:bg-[#041C27] focus:border-[#12B7FE]"},
    { icon: aiicon, name: "Generative AI", color: "focus:bg-[#242206] focus:border-[#CDBE1F]"},
    { icon: sdicon, name: "Software Development", color: "focus:bg-[#270505] focus:border-[#FF1818]"},
    { icon: dbicon, name: "Data Science", color: "focus:bg-[#122406] focus:border-[#6FEB23]"},
  ];

  return (
    <>
      <div className='overflow-x-auto w-[90%] hide-scrollbar'>
        <div className='relative z-500 flex mt-5 ml-38 justify-center gap-10 overflowX-hidden w-[100%] p-5'>
          {skills.map((skill, index) => {
            return (
              <button key={index} className={`${skill.color} transition-all duration-100 ease-in-out cursor-pointer flex flex-row gap-3 p-6 py-3  whitespace-nowrap flex-shrink-0 rounded-4xl border-1`}>
                <img src={skill.icon} alt={skill.name} className='w-6 h-6' />
                <span className='mulishfont block text-xl'>{skill.name}</span>
              </button>
            );
          })}
        </div>
      </div>
    </>
  )
}

export default Skillcapsules;