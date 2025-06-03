import React, { useState } from 'react';
import { MdOutlineTravelExplore } from "react-icons/md";
import { PiDotsNineBold } from "react-icons/pi";
import ResponsiveMenu from './ResponseiveMenu';

const NavbarMenu = [
  { "id": 1, "name": "Home", "link": "#" },
  { "id": 3, "name": "Shop", "link": "/" },
  { "id": 4, "name": "About", "link": "/" },
  { "id": 5, "name": "Pages", "link": "/" },
  { "id": 6, "name": "News", "link": "/" },
  { "id": 7, "name": "Contact", "link": "/" }
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
<div className='fixed top-0 left-0 right-0 z-50 shadow-2xl bg-white rounded-b-lg'>
<nav className='w-full cursor-pointer container flex justify-between py-4 items-center shadow-2xl rounded-b-lg'>
        {/* Logo Section */}
        <div className='flex gap-2 items-center'>
          <MdOutlineTravelExplore className='text-2xl text-primary' />
          <h1 className='text-4xl font-bold text-muted text-primary duration-300'>T
  <span className='text-3xl transform text-blackColor duration-300'>ravel.</span>
</h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 items-center">
          <ul className='flex gap-5'>
            {NavbarMenu.map(item => (
              <li 
                key={item.id} 
                className='text-gray-500 hover:text-primary hover:font-semibold transition-all'
              >
                <a href={item.link}>{item.name}</a>
              </li>
            ))}
          </ul>
          <button className='btn'>Book Now</button>
        </div>

        {/* Mobile Menu Trigger */}
        <PiDotsNineBold 
          className='md:hidden text-3xl text-primary cursor-pointer'
          onClick={() => setOpen(!open)} 
        />
      </nav>

      <ResponsiveMenu open={open} setOpen={setOpen} />
    </div>
  );
};

export default Navbar;