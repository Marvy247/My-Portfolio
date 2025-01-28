import React, { useEffect, useState } from "react";

const Footer = () => {
  console.log("Footer component is rendering"); // Added console log
  const [fadeOut, setFadeOut] = useState(false);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
    }, 1000); // Delay before fading out
    return () => clearTimeout(timer);
  }, []);

  return (
    <footer
      className={`fixed  right-7 top-96 mt-16 flex flex-col items-center space-y-4 ${
        fadeOut ? "fade-out" : ""
      }`}
    >
      <a
        href="https://www.facebook.com/david.marvelous.984"
        target="_blank"
        className="text-white transition-transform transform hover:scale-150"
        aria-label="Facebook"
      >
        <i className="fab fa-facebook-f"></i>
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M22.675 0h-21.35C.6 0 0 .6 0 1.325v21.35C0 23.4.6 24 1.325 24h21.35C23.4 24 24 23.4 24 22.675V1.325C24 .6 23.4 0 22.675 0zm-3.15 12.5h-3.5v9h-4v-9h-2.5v-3.5h2.5v-2.5c0-3.5 1.5-5.5 5.5-5.5h3v3.5h-2c-.5 0-1 .5-1 1v2.5h3.5l-.5 3.5z" />
        </svg>{" "}
      </a>
      <a
        href="https://x.com/DavidMarvyy"
        target="_blank"
        className="text-white transition-transform transform hover:scale-150"
        aria-label="Twitter"
      >
        <i className="fab fa-twitter"></i>
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.953 4.57c-.885.392-1.83.656-2.825.775 1.014-.607 1.794-1.564 2.165-2.724-.951.56-2.005.973-3.127 1.195-.896-.956-2.173-1.55-3.594-1.55-2.72 0-4.923 2.203-4.923 4.923 0 .386.045.761.127 1.124-4.092-.205-7.72-2.165-10.148-5.144-.426.733-.666 1.58-.666 2.487 0 1.715.872 3.22 2.188 4.103-.807-.026-1.566-.247-2.228-.616v.062c0 2.396 1.703 4.394 3.96 4.847-.415.112-.853.171-1.296.171-.316 0-.624-.031-.927-.086.624 1.953 2.433 3.375 4.577 3.415-1.676 1.313-3.785 2.095-6.07 2.095-.394 0-.785-.023-1.17-.067 2.174 1.394 4.768 2.206 7.548 2.206 9.055 0 14.003-7.496 14.003-13.986 0-.213-.005-.426-.014-.637.961-.693 1.8-1.56 2.46-2.549z" />
        </svg>
      </a>

      <a
        href="mailto:marvellousdvd@gmail.com?subject=Hello&body=I%20wanted%20to%20reach%20out%20to%20you."
        target="_blank"
        className="text-white transition-transform transform hover:scale-150"
        aria-label="Behance"
      >
        <i className="fab fa-behance"></i>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-12"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
          />
        </svg>
      </a>
    </footer>
  );
};

export default Footer;
