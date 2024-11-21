'use client'
import React, {useState} from 'react';
import Link from 'next/link'
import {FaShoppingCart} from 'react-icons/fa';
import { HiMenuAlt3 } from 'react-icons/hi'; //Hamburger icon
import { HiX } from 'react-icons/hi'; //close icon

const Header = () => {
  const[isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () =>{
    setIsMenuOpen(!isMenuOpen);//toggle menu open/close
  };
   
  const closeMenu =()=>{
    setIsMenuOpen(false); //close the menu
  }
  return (
    <header className='bg-blue-950 text-white py-5 flex justify-between items-center px-10 relative z-10'>
        <h1 className='text-2xl font-bold'>Stevemax Watche's</h1>

        {/* desktop navbar */}
        <nav className='hidden md:flex gap-10 text-white font-bold'>
            <Link href='/' onClick={closeMenu}>Home</Link>
            <Link href='/about' onClick={closeMenu}>About</Link>
            <Link href='/watches' onClick={closeMenu}>Watches</Link>
            <Link href='/contact' onClick={closeMenu}>Contact</Link>
            <FaShoppingCart className='text-white text-xl' />
        </nav>

        {/* mobile navbar(Hamburger menu) */}
        <div className='md:hidden flex items-center'>
          <HiMenuAlt3
          className='text-white text-3xl cursor-pointer'
          onClick={toggleMenu} // toggle menu on click
          />
        </div>

        {/* mobile menu */}
        <div className={`${
          isMenuOpen ? 'block': 'hidden'} absolute top-0 left-0 w-full bg-blue-950 p-5 md:hidden z-20`}>

        {/* close button */}
        <div className='flex justify-start'>
          <HiX
          className='text-white text-3xl cursor-pointer'
          onClick={toggleMenu}  //close  menu when clicked 
          />
        </div>

        <nav className='flex flex-row items-center gap-3 text-white font-bold'>
            <Link href='/' onClick={closeMenu}>Home</Link>
            <Link href='/about' onClick={closeMenu}>About</Link>
            <Link href='/watches' onClick={closeMenu}>Watches</Link>
            <Link href='/contact' onClick={closeMenu}>Contact</Link>
            <FaShoppingCart className='text-white text-xl' />
        </nav>
        </div>
    </header>
  )
}

export default Header