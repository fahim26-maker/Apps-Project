import React from 'react';
import logo from "../../assets/logo-D9NHcesw 1.png"
import x from "../../assets/Frame 1171277687.png"
import iN from "../../assets/Frame 1171277689.png"
import fB from "../../assets/Frame 1171277690.png"
const Footer = () => {
    return (
        <section>
       <footer className='bg-black flex justify-between'>
        <div className='flex py-7 px-10'>
            <img src={logo} alt="" />
            <h1 className='text-2xl text-white'>HERO.IO</h1>
        </div>
        <div className='px-10 mt-5'>
            <h1 className='text-white'>Social Links</h1>
            <div className='flex gap-4'>
            <img src={x} alt="" />
            <img src={iN} alt="" />
            <img src={fB} alt="" />
            </div>
        </div>

       </footer>
       <h1 className='text-[#FAFAFA] bg-black text-center p-2'>Copyright © 2025 - All right reserved</h1>
    </section>
    );
};

export default Footer;