import React from 'react';
import pS from "../../assets/pstore.png"
import aS from "../../assets/appstore.png"
import iPhone from "../../assets/Iphone.png"
import clock from "../../assets/Ellipse 24.png"
import right from "../../assets/Ellipse 26.png"
import power from "../../assets/Ellipse 28.png"
import time from "../../assets/Ellipse 25.png"
import home from "../../assets/Ellipse 27.png"
import fight from "../../assets/Ellipse 29.png"

const Banner = () => {
    return (
        <section className='bg-[#FFF0E1]'>
            <div className='text-center'>
                <h1 className='font-bold text-4xl pt-10'>We Build <br /><span className='text-transparent bg-clip-text bg-gradient-to-r from-[#632EE3] to-[#9F62F2]'>Productive</span> Apps</h1>
            <p className='text-[#627382]'>At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.<br/> Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
        </div>
        <div className='text-center p-7'>
            <button className='btn bg-white p-2 mr-3 border border-gray-300'><a href="https://play.google.com/store/games?hl=en" className='flex gap-2'><img src={pS} alt="" className='h-6 ' /> Google Play</a></button>
            <button className='btn bg-white p-2 border border-gray-300'><a href="https://www.apple.com/app-store/"  className='flex gap-2'><img src={aS} alt="" className='h-6'/>App Store</a></button>
        </div>
        <div className=' relative'>
            <img src={iPhone} alt="" className='mx-auto'/>
            <img src={clock} alt="" className='  absolute left-110 top-15'/>
            <img src={right} alt="" className=' absolute left-80 top-40'/>
            <img src={power} alt="" className=' absolute left-60 top-80'/>
            <img src={time} alt="" className=' absolute left-260 top-15'/>
            <img src={home} alt="" className=' absolute left-290 top-40'/>
            <img src={fight} alt="" className=' absolute left-310 top-80'/>
        </div>
        <div className=' bg-gradient-to-r from-[#632EE3] to-[#9F62F2] p-10'>
            <h1 className='text-white text-4xl text-center p-6'>Trusted by Millions, Built for You</h1>
            <div className='flex gap-8 text-center place-content-center place-items-center text-white '>
            <div className='space-y-4'>
                <p className='text-sm'>Total Downloads</p>
                <p className='text-5xl'>29.6M</p>
                <p className='text-sm'>21% more than last month</p>
            </div>
            <div className='space-y-4'>
                <p className='text-sm'>Total Reviews</p>
                <p className='text-5xl'>906K</p>
                <p className='text-sm'>46% more than last month</p>
            </div>
            <div className='space-y-4'>
                <p className='text-sm'>Active Apps</p>
                <p className='text-5xl'>132+</p>
                <p className='text-sm'>31 more will Launch</p>
            </div>
        </div>
        </div>
        <div className='py-10 space-y-4'>
            <h1 className='text-4xl font-bold text-center'>Trending Apps</h1>
            <p className='text-[#627382] text-center'>Explore All Trending Apps on the Market developed by us</p>
        </div>
        </section>
    );
};

export default Banner;