import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blue-500 p-4 text-center">
      <p className="text-white">
        © {currentYear} My Website. All rights reserved.
      </p>
      <div className="flex justify-center space-x-4 mt-2">
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/facebook.png" alt="Facebook" className="w-6 h-6" />
        </a>
        <a href="https://www.x.com" target="_blank" rel="noopener noreferrer">
          <img src="/x.png" alt="X" className="w-6 h-6" />
        </a>
        <a
          href="https://www.whatsapp.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/whatapp.jpeg" alt="WhatsApp" className="w-6 h-6" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
