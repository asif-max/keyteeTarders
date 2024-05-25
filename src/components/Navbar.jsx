import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div>
      <div className="fixed top-0 left-0 w-full bg-transparent p-4 text-white px-10 flex justify-between items-center py-4 z-10 backdrop-blur-sm">
        <div className="flex items-center">
          <a href="#home" className="hidden md:block text-3xl font-bold font-inria cursor-pointer hover:text-gray-300">
            KeyTee Traders
          </a>
          <a href="#home" className="block md:hidden text-3xl font-bold font-inria cursor-pointer hover:text-gray-300">
            K T
          </a>
        </div>
        <ul className="hidden md:flex md:gap-24 md:pr-24 md:text-md">
          <li className="hover:text-green-500 cursor-pointer transform hover:scale-110 transition duration-300">
            <a href="#home">Home</a>
          </li>
          <li className="hover:text-green-500 cursor-pointer transform hover:scale-110 transition duration-300">
            <a href="#about">About Us</a>
          </li>
          <li className="hover:text-green-500 cursor-pointer transform hover:scale-110 transition duration-300">
            <a href="#products">Products</a>
          </li>
          <li className="hover:text-green-500 cursor-pointer transform hover:scale-110 transition duration-300">
            <a href="#reviews">Reviews</a>
          </li>
        </ul>
        <div className="flex items-center">
          <button className="bg-white hover:bg-slate-600 hover:text-white text-black px-6 py-2 rounded-md font-semibold border transform hover:scale-110 transition duration-300 hidden md:block">
            <a href="#contact">Contact Us</a>
          </button>
          <div className="block md:hidden ml-4 relative">
            <FontAwesomeIcon 
              icon={isDropdownOpen ? faTimes : faBars} 
              className="text-2xl cursor-pointer " 
              onClick={handleDropdownToggle} 
            />
            {isDropdownOpen && (
              <div className=" -mr-[2rem]  absolute pl-2  right-2 mt-2 w-screen  h-96 rounded-md shadow-lg z-10 bg-black bg-opacity-90 animate-dropdown">
                <ul className="flex flex-col items-center p-2 gap-10">
                  <li className="hover:text-green-500 cursor-pointer transform hover:scale-110 transition duration-300 mb-2 mt-6">
                    <a href="#home" onClick={() => setIsDropdownOpen(false)}>Home</a>
                  </li>
                  <li className="hover:text-green-500 cursor-pointer transform hover:scale-110 transition duration-300 mb-2">
                    <a href="#about" onClick={() => setIsDropdownOpen(false)}>About Us</a>
                  </li>
                  <li className="hover:text-green-500 cursor-pointer transform hover:scale-110 transition duration-300 mb-2">
                    <a href="#products" onClick={() => setIsDropdownOpen(false)}>Products</a>
                  </li>
                  <li className="hover:text-green-500 cursor-pointer transform hover:scale-110 transition duration-300 mb-2">
                    <a href="#reviews" onClick={() => setIsDropdownOpen(false)}>Reviews</a>
                  </li>
                  <li className="hover:text-green-500 cursor-pointer transform hover:scale-110 transition duration-300 mb-2">
                    <a href="#contact" onClick={() => setIsDropdownOpen(false)}>Contact Us</a>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
