import React from 'react'
import thunder from '../../assets/Herosectionicons/thunder.webp'
import hand from '../../assets/Herosectionicons/hand.webp'
import chatgpt from '../../assets/Herosectionicons/chatgpt.svg'
import crewai from '../../assets/Herosectionicons/crewai.svg'
import fastapi from '../../assets/Herosectionicons/fastapi.svg'
import googlegemini from '../../assets/Herosectionicons/googlegemini.svg'
import huggingface from '../../assets/Herosectionicons/huggingface.svg'
import keras from '../../assets/Herosectionicons/keras.svg'
import langchain from '../../assets/Herosectionicons/langchain.svg'
import llm from '../../assets/Herosectionicons/llm.svg'
import nodejslight from '../../assets/Herosectionicons/nodejslight.svg'
import pytorch from '../../assets/Herosectionicons/pytorch.svg'
import sage from '../../assets/Herosectionicons/sage.webp'


const Thundercta = () => {
    const logos = [chatgpt, crewai, fastapi, googlegemini, huggingface, keras, langchain, llm, nodejslight, pytorch, sage]
    return (
        <>
            <div className='flex flex-col items-end z-[100] w-[58%]'>
                <div className='w-full flex mr-1 justify-center mt-[7x]'>
                    <div className='gap-1 flex w-fit bg-[#150A0E] px-7 py-3 rounded-3xl border-[#603C2F] border-1'>
                        <div className='h-7 w-7'><img src={thunder} alt="thunder" /></div>
                        <h2 className='flex items-center mulishfont text-lg'>Ready to 10X your career!</h2>
                    </div>
                </div>
                <div className='p-3 mr-18 flex justify-center text-center w-154 mt-3'>
                    <h1 className='break-word leading-18 mulishfontexbold text-6xl text-transparent font-bold bg-clip-text bg-gradient-to-b from-white to-[#6B90E8]'>Give your career an unfair AI advantage</h1>
                </div>
                <div className='absolute z-[-20] top-[11.5%] right-[21%] h-full w-[98%]'>
                    <img src={hand} alt='hand' />
                </div>

            </div>
            <div className='h-screen flex items-center mt-8 absolute ml-50 text-lg z-[-20]'>
                <h1>The right AI tools integrated into your curriculum</h1>
            </div>
            
            <div className="h-[100vh] overflow-hidden w-[58%] absolute top-[115%]">
                <div className="flex animateslide h-[10%] p-3 gap-16 absolute z-[-20]">
                    {[...logos, ...logos].map((logo, index) => (
                        <img key={index} src={logo} alt=""/>
                    ))}
                </div>
            </div>

        </>
    )
}

export default Thundercta;