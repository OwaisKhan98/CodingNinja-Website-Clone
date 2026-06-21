import React from 'react'
import aiicon from '../../assets/Herosections1icons/aiicon.svg'
import dbicon from '../../assets/Herosections1icons/dbicon.svg'
import fire from '../../assets/Herosections1icons/fire.svg'
import growicon from '../../assets/Herosections1icons/growicon.svg'
import sdicon from '../../assets/Herosections1icons/sdicon.svg'

const Skillcapsules = () => {
  
  const skills = [
    { icon: fire, name: "Popular" },
    { icon: aiicon, name: "Generative AI" },
    { icon: dbicon, name: "Data Science" },
    { icon: growicon, name: "Data Analytics" },
    { icon: sdicon, name: "Software Development" },
  ];

  return (
    <>
      <div>
        <div className='flex'>
          {skills.map((skill, index) => {
            return (
              <div key={index} className='flex flex-row gap-2'>
               
                <img src={skill.icon} alt={skill.name} className='w-6 h-6' />
                <span className='mulishfont block'>{skill.name}</span>
    
              </div>
            );
          })}
        </div>
      </div>
    </>
  )
}

export default Skillcapsules;