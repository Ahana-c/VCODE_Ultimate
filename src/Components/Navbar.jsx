<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 96887d7 (Added Signin and Signup)
import React from 'react';
import '../styles/Navbar.css'; 
import image from "../images/csi_logo.png";

function Navbar() {
  return (
    <nav className="navbar">
      <img src={image} style={{width:"80px", height:"80px", marginRight: "13px",}}/>
      <div class="vertical-line"></div>
      <img src="VCODE.png" alt="Logo" className="logo" />
    </nav>
  );
}

export default Navbar;
<<<<<<< HEAD
=======
=======
import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import {NavLink} from 'react-router-dom'
import Login from '../Pages/Login'

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
      <h1 className='w-full text-3xl font-bold text-[#00df9a]'>VCODE</h1>
      <ul className='hidden md:flex'>
        <li className='p-4'>Home</li>
        <li className='p-4'>About</li>
        <li className='p-4'>Contact</li>
        {/* <button className="bg-[#00df9a] w-[200px] rounded-md font-medium  mx-auto text-black">
					Get Started
				</button> */}
        <li className='p-4 bg-[#00df9a] w-[70px] rounded-md font-medium mx-4 mx-auto'>
          <NavLink to="/login">Login</NavLink>
        </li>
        <li className='py-4 mx-4'><strong>/</strong></li>
        <li className='p-4 bg-[#00df9a] w-[90px] rounded-md font-medium mx-4 mx-auto'>
          <NavLink to="/register">Register</NavLink>
        </li>
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
      </div>
      <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>VCODE</h1>
          <li className='p-4 border-b border-gray-600'>Home</li>
          <li className='p-4 border-b border-gray-600'>About</li>
          <li className='p-4'>Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;
>>>>>>> ec7cc13 (Added signin/signup)
>>>>>>> 96887d7 (Added Signin and Signup)
