import React from 'react';
import logo from "../../assets/logo-D9NHcesw 1.png";
import git from "../../assets/fi_2111432.png";
import { Link, NavLink } from 'react-router';

const Navbar = () => {
  const links = (
    <div className="flex flex-col md:flex-row md:space-x-4 space-y-2 md:space-y-0 items-center">
      <Link to={"/"}  className="text-sm md:text-base hover:text-purple-600">Home</Link>
      <Link to={"/apps"}  className="text-sm md:text-base hover:text-purple-600">Apps</Link>
      <Link to={"/installation"}  className="text-sm md:text-base hover:text-purple-600">Installation</Link>
    </div>
  );

  return (
    <div className="flex flex-col md:flex-row justify-between items-center p-5 w-11/12 mx-auto space-y-4 md:space-y-0">
      {/* Logo and Title */}
      <div className="flex items-center space-x-2">
        <img src={logo} alt="Logo" className="h-7" />
        <Link to={"/"}><h1 className="text-transparent bg-clip-text bg-gradient-to-r from-[#632EE3] to-[#9F62F2] font-semibold text-lg md:text-xl">
          HERO.IO
        </h1></Link>
      </div>

      {/* Navigation Links */}
      <div>
        {links}
      </div>

      {/* Contribute Button */}
      <div>
        <button className="">
          <a href="https://github.com/fahim26-maker" className='flex items-center px-4 py-2 text-white bg-gradient-to-r from-[#632EE3] to-[#9F62F2] font-semibold rounded-xl hover:opacity-90 transition'><img src={git} alt="GitHub" className="h-4 mr-2" />
          Contribute
        </a></button>
      </div>
    </div>
  );
};

export default Navbar;