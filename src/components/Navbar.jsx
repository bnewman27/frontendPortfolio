import React from 'react';
import { Link } from 'react-router-dom';
import '../input.css';


const Navbar = () => {
  return (
    <nav className="bg-dmbg text-sky-400 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="font-puffinChrome text-4xl">
              My Portfolio
            </Link>
          </div>
          <div className="flex font-puffinLiquid">
            <Link
              to="/gamepage"
              className="text-sky-400 hover:text-sky-200 hover:bg-sky-800 hover:shadow-sky-950 shadow-inner hover:text-white px-3 py-2 rounded-full  "
            >
              Box O' Matches !!
            </Link>
            <Link
              to="/contact"
              className="text-sky-400 hover:text-sky-200 hover:bg-sky-800 hover:shadow-sky-950 shadow-inner hover:text-white px-3 py-2 rounded-full  "
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
