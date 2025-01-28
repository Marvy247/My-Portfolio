import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="bg-gray-900 text-white py-12 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Contact Me</h2>
        <p className="text-lg leading-8 mb-8">
          Have a question or want to work together? Feel free to reach out! I'm
          always open to exciting new projects and opportunities.
        </p>

        {/* Contact Form */}
        <form
          action="https://formspree.io/f/your-form-id" // Replace 'your-form-id' with your Formspree endpoint
          method="POST"
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
              name="name"
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
              name="email"
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
              name="message"
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

        {/* Social Links */}
        <div className="mt-8">
          <h3 className="text-2xl font-bold mb-4">Follow Me</h3>
          <div className="flex justify-center gap-6">
            <a
              href="https://github.com/Marvy247"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-400 hover:text-teal-600 transition duration-300"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/your-linkedin-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-400 hover:text-teal-600 transition duration-300"
            >
              LinkedIn
            </a>
            <a
              href="mailto:marvellousdvd@gmail.com"
              className="text-teal-400 hover:text-teal-600 transition duration-300"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
