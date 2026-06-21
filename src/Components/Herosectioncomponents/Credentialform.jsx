import React from 'react'
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const Credentialform = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("");

  const options = [
    "Software Development",
    "Data Analytics",
    "Gen AI",
  ];

  return (
    <>
      <div>
        <div className='flex justify-end z-[50]'>
          <form className='h-[115%] absolute  top-[12%] left-[58%] w-[42%] bottom-[-15%] bg-[radial-gradient(circle_at_center,#3864E2_0%,#0000_70%)]'>
            <div className='border-t-1 border-t-white/70 border-b-1 border-b-white/70 rounded-2xl gap-5 flex flex-col bg-white/10 backdrop-blur-xl p-7 mt-9 w-[95%]'>
              <div className=''>
                <label className='text-2xl mulishfontbold'>Let's find the right course for you</label>
              </div>
              <div>
                <label>Experience </label>
              </div>
              <div className='gap-2 flex items-center'>
                <input className='w-4 h-4 appearance-none border-1 border-gray-400 checked:bg-white/80 rounded-xl' type="radio" name="select" id="professional" />Working Professional - Technical Roles
              </div>
              <div className='gap-2 flex items-center'>
                <input className='w-4 h-4 appearance-none border-1 border-gray-400 checked:bg-white/80 rounded-xl' type="radio" name="select" id="professional" />Working Professional - Non Technical
              </div>
              <div className='gap-2 flex items-center'>
                <input className='w-4 h-4 appearance-none border-1 border-gray-400 checked:bg-white/80 rounded-xl' type="radio" name="select" id="professional" />College Student - Final Year
              </div>
              <div className='gap-2 flex items-center'>
                <input className='w-4 h-4 appearance-none border-1 border-gray-400 checked:bg-white/80 rounded-xl' type="radio" name="select" id="professional" />College Student - 1st to Pre-final Year
              </div>
              <div className='gap-2 flex items-center'>
                <input className='w-4 h-4 appearance-none border-1 border-gray-400 checked:bg-white/80 rounded-xl' type="radio" name="select" id="professional" />Other
              </div>
              <div>
                <div>
                  <div className="w-full">
                    <label className="text-white text-sm block mb-2">
                      Select topic of interest
                    </label>

                    {/* Select Box */}
                    <div
                      onClick={() => setOpen(!open)}
                      className="flex justify-between items-center px-3 py-3 bg-[#181818] border border-gray-600 rounded-xl cursor-pointer"
                    >
                      <span className="text-gray-300">
                        {selected || "Select your options/choices"}
                      </span>

                      <FontAwesomeIcon
                        icon={faChevronDown}
                        className={`transition duration-300 ${open ? "rotate-180" : ""
                          }`}
                      />
                    </div>

                    {/* Dropdown */}
                    {open && (
                      <div className="mt-1 bg-[#0d0d0d] border border-gray-700 rounded-b-xl overflow-hidden">
                        {options.map((option) => (
                          <div
                            key={option}
                            onClick={() => {
                              setSelected(option);
                              setOpen(false);
                            }}
                            className="px-5 py-5 text-white hover:bg-[#1d1d1d] cursor-pointer transition"
                          >
                            {option}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                <div className='flex flex-col mt-5 gap-2 mulishfont'>
                  <label className='text-[14px]'>Name</label>
                  <input required type='text' name='text'placeholder='Enter name' 
                  className='bg-[#181818] rounded-lg px-2 p-2 border border-gray-600 text-white'></input>
                </div>
                <div className='flex flex-col mt-5 gap-2'>
                  <label className='text-[14px]'>Phone Number</label>
                  <input required type='tel' name='tel' placeholder='Enter phone number' 
                  className='bg-[#181818] rounded-lg px-2 p-2 border border-gray-600 text-white'></input>
                </div>
                <div className='flex flex-col mt-5 gap-2'>
                  <label className='text-[14px]'>Email</label>
                  <input required type='email' name='email' placeholder="Enter email" 
                  className='bg-[#181818] rounded-lg px-2 p-2 border border-gray-600 text-white'></input>
                </div>
                <div className='w-full mt-8 h-auto'>
                  <button type='submit' className='h-13 text-xl w-full bg-[#F66C3B] text-white p-2 rounded-lg mulishfontbold'>Find your course</button>
                </div> 
                <h1 className='text-[10px] mulishfont mt-2 w-full'>
                  I authorise Coding Ninjas to contact me with course updates & 
                  offers via Email/SMS/Whatsapp/Call. I have read and agree to Privacy Policy & Terms of use
                </h1>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Credentialform;