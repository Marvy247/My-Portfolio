import React from "react";

const Header = () => {
  console.log("Header component is rendering"); // Added console log
  return (
    <header className="bg-gray-800 text-white p-4">
      <h1 className="text-2xl">My Portfolio</h1>
    </header>
  );
};

export default Header;
