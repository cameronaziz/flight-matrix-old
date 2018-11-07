import React from 'react';
import Link from 'gatsby-link';
import logo from '../../images/logo.png';
// import NavMenu from './NavMenu';

const Header = () => {
  return (
    <nav className="bg-teal">
      <div className="flex flex-wrap items-center justify-between max-w-xl mx-auto p-4 md:p-8">
        <Link to="/" className="flex items-center no-underline text-white">
          <img alt="Logo" src={logo} height="54" width="54" style={{ margin: '0 10px' }} />
          <span className="text-5xl tracking-tight">
            Flight Matrix
          </span>
        </Link>
        {/* <NavMenu /> */}
      </div>
    </nav>
  );
};

export default Header;
