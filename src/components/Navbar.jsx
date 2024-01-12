import React from 'react';
import { Link } from 'react-router-dom';
import '../input.css';


const Navbar = () => {
  return (
    <nav className="bg-sky-950 p-4 shadow-xl shadow-dmbg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between lg:h-16 md:h-16 sm:h-8 xs:h-8">
          <div className="flex items-center">
            <Link to="/" className="font-puffinLiquid lg:text-4xl md:text-4xl sm:text-2xl xs:text-sm p-3 text-sky-400">
              Ben Newman 
              <div className="lg:text-2xl md:text-2xl sm:text-lg xs:text-sm font-puffinRegular text-sky-400">Front End Developer</div>
            </Link>
          </div>
          <div className="flex align-middle text-2xl p-4 lg:space-x-6 md:space-x-4 sm:space-x-2 xs:space-x-0 rounded hover:bg-sky-900 hover:shadow-lg shadow-dmbg ">
          <Link
              to="/"
              className="font-puffinRegular hover:font-puffinYoko text-sky-400 hover:text-sky-200 hover:bg-sky-950 hover:shadow-dmbg text-center shadow-inner hover:text-white p-2.5 rounded-md lg:text-xl md:text-xl sm:text-xl xs:text-md x"
            >
              Home
            </Link>
            <Link
              to="/gamepage"
              className="font-puffinRegular hover:font-puffinYoko text-sky-400 hover:text-sky-200 hover:bg-sky-950 hover:shadow-dmbg text-center shadow-inner hover:text-white p-2.5 rounded-md lg:text-xl md:text-xl sm:text-xl xs:text-sm "
            >
              Box O' Matches
            </Link>
            <Link
              to="/contact"
              className="font-puffinRegular hover:font-puffinYoko text-sky-400 hover:text-sky-200 hover:bg-sky-950 hover:shadow-dmbg text-center shadow-inner hover:text-white p-2.5 rounded-md lg:text-xl md:text-xl sm:text-xl xs:text-sm "
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
