import React from "react";

const HomeContent = () => {
  return (
    <div className="relative z-0 flex-grow flex items-center px-4 sm:px-40 mt-4 text-left h-screen">
      {/* Adjusted padding for responsiveness */}
      <main>
        <p className="text-4xl md:text-3xl uppercase tracking-widest text-gray-200 mb-16 animate-slideDown">
          {/* Adjusted text size */}
          Hello,
        </p>
        <h1 className="text-6xl md:text-6xl font-bold leading-tight text-gray-200 mb-14 animate-slideIn">
          {/* Adjusted text size */}
          My Name is David Marvellous
        </h1>
        <p className="text-4xl md:text-3xl font-bold leading-tight text-white mb-16 animate-fadeIn">
          {/* Adjusted text size */}I am a Web Developer
        </p>
        <div className="flex justify-left space-x-4">
          <button className="bg-blue-500 border border-white py-2 px-6 text-sm uppercase tracking-widest text-white hover:bg-blue-800 transition duration-800 transform hover:scale-110 rounded">
            <a href="https://github.com/Marvy247" target="_blank">
              View My Projects
            </a>
          </button>
          <button className="bg-blue-500 border border-white py-2 px-6 text-sm uppercase tracking-widest text-white hover:bg-blue-800 transition duration-800 transform hover:scale-110 rounded">
            <a href="#contact" target="_self">
              Contact Me
            </a>
          </button>
        </div>
      </main>
    </div>
  );
};

export default HomeContent;
