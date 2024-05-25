import React from 'react';
import { Navbar } from 'flowbite-react'; 
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  // Using useLocation hook from react-router-dom to get the current path
  const { pathname } = useLocation();

  return (
    <Navbar className='border-b-2'>
      {/* Brand/logo */}
      <Link to="/" className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'>
        <span className='px-1 py-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>Smart Route Shield</span>
      </Link>

      {/* Navbar links that will show if the size is big enough otherwise the toggker will be used to display these */}
      <Navbar.Collapse>
        {/* Home link */}
        <Navbar.Link active={pathname === '/'} >
          <Link to='/'>Home</Link>
        </Navbar.Link>
        
        {/* About link */}
        <Navbar.Link active={pathname === '/about'} >
          <Link to='/about'>About</Link>
        </Navbar.Link>
        
        {/* Statistics link */}
        <Navbar.Link active={pathname === '/statistics'} >
          <Link to='/statistics'>Statistics</Link>
        </Navbar.Link>

        <Navbar.Link active={pathname === '/hotspot'} >
        <a href="src\pages\Hotspot.html">Hotspot</a>
        </Navbar.Link>
        <Navbar.Link active={pathname === '/safestroute'} >
        <Link to='/safestroute'>xRoute</Link>
     
        </Navbar.Link>


       
      </Navbar.Collapse>
    </Navbar>
  );
}
