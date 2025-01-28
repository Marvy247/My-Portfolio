import React from "react";

const HomeContent = () => {
  console.log("HomeContent component is rendering"); // Added console log
  return (
    <div className="relative z-0 mt-20 flex-grow flex items-center pl-60 p-2 text-left">
      <main>
        <p className="text-4xl uppercase tracking-widest text-gray-200 mb-16 animate-slideDown">
          Hello,
        </p>
        <h1 className="text-8xl md:text-7xl font-bold leading-tight text-gray-200 mb-14 animate-slideIn">
          My Name is David Marvellous
        </h1>
        <p className="text-3xl md:text-3xl font-bold leading-tight text-white mb-8 animate-fadeIn">
          I am a Web Developer
        </p>
        <div className="flex justify-left space-x-4">
          <button className="border border-white py-2 px-6 text-sm uppercase tracking-widest text-white hover:bg-white hover:text-blue-900 transition duration-800 transform hover:scale-110 rounded">
            Start a Project
          </button>
          <button className="border border-white py-2 px-6 text-sm uppercase tracking-widest text-white hover:bg-white hover:text-blue-900 transition duration-800 transform hover:scale-110 rounded">
            Contact Me
          </button>
        </div>
      </main>
    </div>
  );
};

export default HomeContent;
