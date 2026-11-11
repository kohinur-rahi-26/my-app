import Link from 'next/link';
import React from 'react';
import NavLinks from './NavLinks';
import NavbarButtons from './NavbarButtons';

const Navbar = () => {
  const navLinks =(
    <>
     <li className='text-[#C2F800]'>
  <NavLinks href={"/"} > Workouts</NavLinks> 
  </li>
  <li>
  <NavLinks href={"/myplan"} >My Plan</NavLinks> 
  </li>
  
  </>
  )


  return (
    <div>
      <div className="navbar   bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={-1}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {navLinks}
        
      </ul>
    </div>
    <img
      alt="Tailwind CSS hero component"
      src="/assets/logo.png"
      className="max-w-sm rounded-lg shadow-2xl"
    />
    <a className="btn btn-ghost text-xl">FITLOG</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">{navLinks}
      
    </ul>
  </div>
  <div className='navbar-end'>
   <NavbarButtons />
  </div>
</div>
    </div>
  );
};

export default Navbar;