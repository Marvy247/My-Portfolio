import React from "react";

const Header = () => {
  console.log("Header component is rendering"); // Added console log
  return (
    <header className="p-4 flex justify-between items-center sticky top-0">
      <h1 className="text-white text-4xl font-bold transition-transform duration-500 hover:scale-110">
        The Dude
      </h1>
      <nav className="ml-auto">
        <ul className="flex space-x-4">
          <li>
            <a
              href="#home"
              className="text-white hover:bg-blue-700 hover:text-white px-2 py-1 rounded"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="text-white hover:bg-blue-700 hover:text-white px-2 py-1 rounded"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#services"
              className="text-white hover:bg-blue-700 hover:text-white px-2 py-1 rounded"
            >
              Services
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className="text-white hover:bg-blue-700 hover:text-white px-2 py-1 rounded"
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
