import React from "react";

const Contact = () => {
  const currentYear = new Date().getFullYear();

  return (
    <section
      id="contact"
      className="bg-cover bg-center text-white py-12 px-6 relative"
      style={{ backgroundImage: "url('/two.jpg')" }} // Set the background image
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>{" "}
      {/* Overlay for opacity */}
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <h2 className="text-5xl font-bold mb-6">Contact Me</h2>
        <p className="text-lg leading-8 mb-8">
          Have a question or want to work together? Feel free to reach out! I'm
          always open to exciting new projects and opportunities.
        </p>

        {/* Contact Form */}
        <form
          action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSczF15eFd_wexLMOzz9WAsJDtx9Ptnc9-LJgjxBCk4TUpzN6A/formResponse"
          method="POST"
          target="_blank"
          className="max-w-3xl mx-auto bg-gray-800 p-8 rounded-lg shadow-lg"
        >
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-left text-gray-400 font-semibold mb-2"
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="entry.1530968004"
              placeholder="Enter your name"
              className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-left text-gray-400 font-semibold mb-2"
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="entry.2113749448"
              placeholder="Enter your email"
              className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-left text-gray-400 font-semibold mb-2"
            >
              Your Message
            </label>
            <textarea
              id="message"
              name="entry.854561098"
              rows="5"
              placeholder="Enter your message"
              className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-teal-500 text-lg font-semibold rounded-lg hover:bg-teal-600 transition duration-300"
          >
            Send Message
          </button>
        </form>

        {/* Copyright Message */}
        <div className="mt-8">
          <p className="text-lg">&copy; {currentYear} All rights reserved.</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
