import React, { useState } from "react";
import logo from '../../assets/logo.jpg'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#fedcff] p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
        <div className="grid">
           <img src={logo} alt="" className="h-12 w-12 rounded-full" style={{border: '2px solid gray'}} />
           <p className="font-bold">OPPO</p>
           </div>
        </div>
        <div className="hidden md:flex">
          <a href="/" className="text-[#3a1212] font-bold px-3 py-2 hover:bg-[#99a329]">HOME</a>
          <a href="/about" className="text-[#672424] font-bold px-3 py-2 hover:bg-[#919a29]">ABOUT</a>
          <a href="/service" className="text-[#611f1f] font-bold px-3 py-2 hover:bg-[#b8c433]">SERVICE</a>
          <a href="/contact" className="text-[#19130b] font-bold px-3 py-2 hover:bg-[#d3e03d]">CONTACT</a>
        </div>
        <div className="md:hidden">
          <button
            className="text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
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
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
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
      </div>
      {isOpen && (
        <div className="md:hidden mt-2">
          <a href="#" className="block text-white px-3 py-2 hover:bg-gray-700">Home</a>
          <a href="#" className="block text-white px-3 py-2 hover:bg-gray-700">About</a>
          <a href="#" className="block text-white px-3 py-2 hover:bg-gray-700">Services</a>
          <a href="#" className="block text-white px-3 py-2 hover:bg-gray-700">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
