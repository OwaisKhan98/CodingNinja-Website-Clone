import React from 'react';
import codingninja from '../assets/Herosectionicons/codingninja.svg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <nav className='fixed relative bg-[#1A1A1A] w-full p-5 border-[#242424] border-b-1 text-white flex h-19'>
      <div className='ml-1 flex gap-11 justify-center items-center w-full'>
        <div className='flex item-center size-[25.5vh]'>
          <img src={codingninja} alt='new-cn-logos'/>
        </div>

        <div className='flex items-center gap-1 ml-4'>
          <h4 className='mulishfontbold text-[18px]'>For working professionals</h4>
          <FontAwesomeIcon icon={faAngleDown} />
        </div>

        <div className='flex items-center gap-1'>
          <h3 className='mulishfontbold text-[18px]'>For College Students</h3>
          <FontAwesomeIcon icon={faAngleDown} />
        </div>

        <div>
          <button className='bg-[#F66C3B] p-3 rounded-lg w-17 ml-60 mulishfontbold text-sm'>
            Login
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;