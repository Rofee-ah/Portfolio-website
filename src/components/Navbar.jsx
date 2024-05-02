import React from 'react';
// import logo from '../assets/pictures/rof.png';
import { FaLinkedin} from "react-icons/fa"
import { FaGithub} from "react-icons/fa"
import {FaSquareXTwitter} from "react-icons/fa6"
import {FaInstagram} from "react-icons/fa"



const Navbar = () => {
  return (
    <nav className='mb-20 flex items-center justify-between py-6'>
      <div className='flex flex-shrink-0 items-center'>
        {/* <img src={logo} alt='logo' className='h-20 w-20' /> */}
        <h1 className='text-white text-4xl'>RL</h1>
      </div>
    
      <div className='m-8 flex item-center justify-center gap-4 text-2xl'>
       <a href="https://www.linkedin.com/in/rofiat-lawal-/"> <FaLinkedin/></a>
        <a href='https://github.com/Rofee-ah'><FaGithub/></a>
       <a href="https://www.linkedin.com/in/rofiat-lawal-/"><FaSquareXTwitter/></a> 
       <a href="https://github.com/Rofee-ah"><FaInstagram/></a> 
      </div>
    </nav>
  );
};

export default Navbar;
