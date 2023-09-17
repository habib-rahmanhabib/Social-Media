import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const  Navmenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800">
      <div className="container mx-auto">
        <div className="flex justify-between items-center py-3 px-5">
          <h1 className="text-2xl font-semibold text-white">Social Madia</h1>
          <div className="md:hidden">
            <button
              className="text-white p-2 focus:outline-none"
              onClick={toggleMenu}
            >
              {isOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>
          <ul
            className={`${
              isOpen ? 'absolute p-3 bg-black  right-0 mt-40' : 'hidden'
            } md:flex md:space-x-4  text-white`}
          >
            <li>
              <Link
                to="/"
                className="hover:text-gray-400"
              
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/news-feed"
                className="hover:text-gray-400"
              
              >
                News feed
              </Link>
            </li>
            <li>
              <Link
                to="/group-message"
                className="hover:text-gray-400"
               
              >
               Group Message
              </Link>
            </li>
           
            <li >
              <Link
                to="/signUp"
                className="hover:text-gray-400"
               
              >
              Sign Up
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}





export default Navmenu;
