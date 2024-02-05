import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from '@headlessui/react';
import '../input.css';

const Navbar = () => {
  const links = [
   
    { href: '/', label: <svg xmlns="http://www.w3.org/2000/svg"stroke-width="1.5" className="w-full h-8  stroke-sky-400 hover:stroke-sky-200 fill-none">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                        </svg>
   },
    { href: '/GamePage', label: <svg xmlns="http://www.w3.org/2000/svg"stroke-width="1.5" className="w-full h-8  stroke-sky-400 hover:stroke-sky-200 fill-none ">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 0 0 2.25-2.25V6.75a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 6.75v10.5a2.25 2.25 0 0 0 2.25 2.25Zm.75-12h9v9h-9v-9Z" />
                                </svg>
   },
    { href: '/contact', label: <svg xmlns="http://www.w3.org/2000/svg"stroke-width="1.5" className="w-full h-8  stroke-sky-400 hover:stroke-sky-200 fill-none ">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m.75 12 3 3m0 0 3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                                </svg>
   },
  ];

  return (
    <nav className="bg-sky-950 p-4 shadow-inner shadow-dmbg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between lg:h-16 md:h-16 sm:h-8 xs:h-8 ">
          <div className="flex items-center ">
            <Link
              to="/"
              className="font-puffinLiquid lg:text-4xl md:text-4xl sm:text-lg xs:text-xs p-3 text-sky-400"
            >
              Ben Newman
              <div className="lg:text-2xl md:text-2xl sm:text-sm xs:text-xs font-puffinRegular text-sky-400 sm:text-hidden">
                Front End Developer
              </div>
            </Link>
          </div>
          <Menu>
            {({ open }) => (
              <>
                <Menu.Button className="font-puffinLiquid p-4 rounded-full bg-sky-950 hover:bg-sky-900 stroke-sky-400 hover:stroke-sky-950 fill-none shadow hover:shadow-inner shadow-dmbg hover:shadow-dmbg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    strokeWidth={3}
                    strokeHeigth={3}
                    className={`${
                      open ? 'w-6 h-6 hover:animate-pulse active:animate-ping ' : 'w-6 h-6 hover:animate-pulse active:animate-ping'
                    }`}
                  >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                  </svg>
                </Menu.Button>
                <Menu.Items className="grid grid-cols-3 space-x-4 p-4 items-center align-middle">
                  {links.map((link) => (
                    <Menu.Item className=" " key={link.href}>
                      {({ active }) => (
                        <a
                          href={link.href}
                          className={`${
                            active ? ' text-sky-200 ' : ' text-sky-400 '
                          }`}
                        >
                          {link.label}
                        </a>
                      )}
                    </Menu.Item>
                  ))}
                </Menu.Items>
              </>
            )}
          </Menu>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
