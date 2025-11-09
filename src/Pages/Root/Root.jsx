import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../../Components/Footer/Footer';
import SlowNetworkLoader from '../../Components/SlowNetworkLoader/SlowNetworkLoader';
const Root = () => {
    return (
       <div  className="flex flex-col min-h-screen " >
        <SlowNetworkLoader url="http://localhost:5173/"/>
        <Navbar />
       <div className="flex-grow bg-[#FFF0E1]">
        <Outlet />
       </div>
       <Footer />
       </div>
    );
};

export default Root;