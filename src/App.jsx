import React from "react";
import Header from "./Component/Header";
import Footer from "./Component/Footer"; // Importing Footer
<script
  src="https://kit.fontawesome.com/95442de5cd.js"
  crossorigin="anonymous"
></script>;

const App = () => {
  return (
    <div
      className="relative min-h-screen flex flex-col text-center bg-cover bg-center"
      style={{ backgroundImage: "url('/one.jpg')" }}
    >
      <header className="fixed top-0 left-0 w-full z-10 bg-black bg-opacity-50">
        <div className="flex justify-between items-center w-full px-8 py-4">
          <div className="text-4xl font-bold text-blue-200">The Dude</div>
          <div className="text-xl uppercase tracking-widest text-white">
            Menu
          </div>
        </div>
      </header>
      <div className="relative z-0 mt-20 flex-grow flex items-center justify-center p-6 text-left">
        <main>
          <p className="text-2xl uppercase tracking-widest text-gray-200 mb-16 animate-slideDown">
            Hello,
          </p>
          <h1 className="text-6xl md:text-6xl font-bold leading-tight text-gray-200 mb-14">
            My Name is David Marvellous
          </h1>
          <p className="text-3xl md:text-2xl font-bold leading-tight text-white mb-8">
            I am a Web Developer
          </p>
          <div className="flex justify-left space-x-4">
            <button className="border border-white py-2 px-6 text-sm uppercase tracking-widest text-white hover:bg-white hover:text-blue-900 transition duration-300 transform hover:scale-105 rounded">
              Start a Project
            </button>
            <button className="border border-white py-2 px-6 text-sm uppercase tracking-widest text-white hover:bg-white hover:text-blue-900 transition duration-300 transform hover:scale-105 rounded">
              Contact Me
            </button>
          </div>
        </main>
        <footer className="absolute bottom-1/2 right-8 flex flex-col items-center space-y-4">
          <a href="#" className="text-white" aria-label="Facebook">
            <i className="fab fa-facebook-f"></i>
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.675 0h-21.35C.6 0 0 .6 0 1.325v21.35C0 23.4.6 24 1.325 24h21.35C23.4 24 24 23.4 24 22.675V1.325C24 .6 23.4 0 22.675 0zm-3.15 12.5h-3.5v9h-4v-9h-2.5v-3.5h2.5v-2.5c0-3.5 1.5-5.5 5.5-5.5h3v3.5h-2c-.5 0-1 .5-1 1v2.5h3.5l-.5 3.5z" />
            </svg>
          </a>
          <a href="#" className="text-white" aria-label="Twitter">
            <i className="fab fa-twitter"></i>
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.953 4.57c-.885.392-1.83.656-2.825.775 1.014-.607 1.794-1.564 2.165-2.724-.951.56-2.005.973-3.127 1.195-.896-.956-2.173-1.55-3.594-1.55-2.72 0-4.923 2.203-4.923 4.923 0 .386.045.761.127 1.124-4.092-.205-7.72-2.165-10.148-5.144-.426.733-.666 1.58-.666 2.487 0 1.715.872 3.22 2.188 4.103-.807-.026-1.566-.247-2.228-.616v.062c0 2.396 1.703 4.394 3.96 4.847-.415.112-.853.171-1.296.171-.316 0-.624-.031-.927-.086.624 1.953 2.433 3.375 4.577 3.415-1.676 1.313-3.785 2.095-6.07 2.095-.394 0-.785-.023-1.17-.067 2.174 1.394 4.768 2.206 7.548 2.206 9.055 0 14.003-7.496 14.003-13.986 0-.213-.005-.426-.014-.637.961-.693 1.8-1.56 2.46-2.549z" />
            </svg>
          </a>

          <a href="#" className="text-white" aria-label="Behance">
            <i className="fab fa-behance"></i>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-8"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
              />
            </svg>
          </a>
        </footer>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-sm uppercase tracking-widest text-white">
          Scroll Down
        </div>
      </div>
    </div>
  );
};

export default App;
