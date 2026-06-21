import React from 'react'
import gemini from '../../assets/Herosections1icons/Logos/gemin-logo.webp'
import sql from '../../assets/Herosections1icons/Logos/mysql-logo.webp'
import prav from '../../assets/Herosections1icons/Image/IITM_pravartak.webp'
import iitmpravlogo from '../../assets/Herosections1icons/Logos/IITM_pravartak_Frame.webp'

import eict from '../../assets/Herosections1icons/Image/E&ICT_Academy.webp'
import meta from '../../assets/Herosections1icons/Logos/meta-logo.svg'
import eictlogo from '../../assets/Herosections1icons/Logos/E&ICT_Academy_Logo.svg'

import vish from '../../assets/Herosections1icons/Image/Vishlesana_i-hub.webp'
const Cards = () => {
    const cards = [
        {
            name: "IITM Pravartak, TIH IIT Madras",
            title: "Professional Certification in Data Analytics with GenAI",
            date: "6 months | 20K+ Enrolled",
            collogo: iitmpravlogo,
            logo: gemini,
            logo1: sql,
            withlogotxt: "10+ AI Tools",
            image: prav,
            certificaretitle: "IIT Certification",
        },
        {
            name: "E&ICT Academy, IIT Guwahati",
            title: "PG Certification in Data Analytics with GenAI",
            date: "6 months | Enrolment currently closed",
            collogo: eictlogo,
            logo: meta,
            logo1: gemini,
            withlogotxt: "8+ AI Tools",
            image: eict,
            certificaretitle: "IIT Certification",
        },
        {
            name: "IITM Pravartak, TIH IIT Madras",
            title: "Professional Certification in Data Analytics with GenAI",
            date: "6 months | Enrolment currently closed",
            collogo: iitmpravlogo,
            logo: gemini,
            logo1: sql,
            withlogotxt: "10+ AI Tools",
            image: vish,
            certificaretitle: "IIT Certification",
        },
    ];
    return (
        <>
            <div className='overflow-x-auto h-[100vh] bg-[#010101] gap-10 flex justify-center w-full p-5 absolute top-[205%]'>
                {cards.map((card, index) => {
                    return (
                        <>
                            <div key={index} className='cursor-pointer'>
                                <div id={card.name}
                                    className='h-102 w-85 bg-[#1A1A1A] border-1 border-[#2D2D2D] rounded-3xl'>
                                    <div className='w-full flex flex-col gap-2 justify-center p-3'>
                                        <img src={card.image} alt={card.name} className='w-full' />
                                        <div className='flex flex-row text-center items-center'>
                                            <img src={card.collogo} alt={card.name} className='w-14 ml-1 mt-1 rounded h-14 border-8 border-[#141414] bg-[#141414]' />
                                            <span className='font-semibold text-[14px] ml-5 mt-1'>{card.name}</span>
                                        </div>
                                        <div className='w-77 mt-2  border-t-1 border-t-[#2D2D2D] flex flex-col h-20 py-3'>
                                            <span className='text-xl mulishfontbold'>{card.title}</span>
                                            <span className='mulishfont text-[#7F7F7F] mt-3 text-[13px] '>{card.date}</span>
                                            <div className='flex flex-row gap-4 mt-5'>
                                                <div className='flex flex-row gap-2 px-4 py-1 justify-center items-center bg-[#2D2D2D] rounded-xl'>
                                                    <img src={card.logo} alt={card.name} className='w-5 h-5' />
                                                    <img src={card.logo1} alt={card.name} className='w-5 h-5' />
                                                    <span className='mulishfontbold text-[13px]'>{card.withlogotxt}</span>
                                                </div>
                                                <div className='px-3 py-1 justify-center bg-[#2D2D2D] rounded-xl'>
                                                    <h1 className='mulishfontbold text-[13px]'>{card.certificaretitle}</h1>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                })}
            </div>
        </>
    )
}

export default Cards;