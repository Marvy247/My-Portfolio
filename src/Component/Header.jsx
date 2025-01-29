import React, { useState } from "react";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false); // State to manage nav visibility

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen); // Toggle the navigation visibility
  };

  const closeNav = () => {
    setIsNavOpen(false); // Close the navigation
  };

  return (
    <header className="p-4 flex justify-between items-center sticky top-0 z-50">
      <h1 className="text-stone-300 text-6xl font-bold transition-transform duration-500 hover:scale-110 md:text-5xl sm:text-3xl">
        The Dude
      </h1>
      <div className="md:hidden">
        <button onClick={toggleNav} className="text-white text-2xl">
          <div className="hamburger-icon">
            <span className="block w-8 h-1 bg-white mb-1"></span>
            <span className="block w-8 h-1 bg-white mb-1"></span>
            <span className="block w-8 h-1 bg-white"></span>
          </div>
        </button>
      </div>
      {isNavOpen && (
        <div className="fixed top-0 left-0 w-full h-1/4 bg-black bg-opacity-75 z-40">
          <div className="flex justify-between items-center p-4">
            <button onClick={closeNav} className="text-white text-2xl">
              &times; {/* X icon */}
            </button>
          </div>
          <nav className="flex flex-col items-center justify-center h-full">
            <ul className="space-y-4">
              <li>
                <a
                  href="#"
                  onClick={closeNav} // Close on link click
                  className="text-white text-2xl hover:bg-blue-700 hover:text-white px-4 py-3 rounded"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={closeNav} // Close on link click
                  className="text-white text-2xl hover:bg-blue-700 hover:text-white px-4 py-3 rounded"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={closeNav} // Close on link click
                  className="text-white text-2xl hover:bg-blue-700 hover:text-white px-4 py-3 rounded"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )}
      <nav className={`ml-auto ${isNavOpen ? "block" : "hidden"} md:block`}>
        <ul className="flex space-x-4">
          <li>
            <a
              href="#"
              className="text-white text-xl hover:bg-blue-700 hover:text-white px-4 py-3 rounded"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="text-white text-xl hover:bg-blue-700 hover:text-white px-4 py-3 rounded"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-white text-xl hover:bg-blue-700 hover:text-white px-4 py-3 rounded"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <hr className="my-4" />
    </header>
  );
};

export default Header;
