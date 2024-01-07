import React from 'react';
import { Link } from 'react-router-dom';
import '../input.css';


const Navbar = () => {
  return (
    <nav className="bg-sky-950 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="font-puffinLiquid text-3xl text-sky-200">
              Ben Newman 
              <div className="text-2xl font-puffinLevel text-sky-200">Front End Developer</div>
            </Link>
          </div>
          <div className="flex text-xl p-2.5 font-puffinYoko">
          <Link
              to="/"
              className="text-sky-400 hover:text-sky-200 hover:bg-sky-800 hover:shadow-sky-950 shadow-inner hover:text-white p-2.5 rounded-full  "
            >
              Home
            </Link>
            <Link
              to="/gamepage"
              className="text-sky-400 hover:text-sky-200 hover:bg-sky-800 hover:shadow-sky-950 shadow-inner hover:text-white p-2.5 rounded-full  "
            >
              Box O' Matches !!
            </Link>
            <Link
              to="/contact"
              className="text-sky-400 hover:text-sky-200 hover:bg-sky-800 hover:shadow-sky-950 shadow-inner hover:text-white p-2.5 rounded-full  "
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
