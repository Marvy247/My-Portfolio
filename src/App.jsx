import React from "react";
import Header from "./Component/Header";
import Footer from "./Component/Footer"; // Importing Footer

const App = () => {
  return (
    <div>
      <Header />
      <section
        id="home"
        className="p-0" // Removed padding to eliminate whitespace
        style={{
          backgroundImage: "url('/one.jpg')",
          backgroundSize: "cover",
          height: "100vh",
          marginTop: "0", // Set margin-top to 0 to start immediately after the navbar
          position: "relative", // Ensure it does not overlap the navbar
          zIndex: 1, // Lower z-index for the home section
          borderRadius: "0", // Ensure no rounded corners
        }}
      >
        <div className="text-left  p-52">
          <h1 className="text-5xl mb-32 font-bold text-gray-200">Hello,</h1>{" "}
          <h1 className="text-7xl mb-11 font-bold text-orange-400">
            I'm David Marvellous
          </h1>{" "}
          {/* Main name styled */}
          <p className="text-2xl mt-4 text-white">
            I am a Software Developer
          </p>{" "}
        </div>
        {/* Subtitle styled */}
      </section>
      <section
        id="about"
        className="p-4"
        style={{ backgroundImage: "url('/path/to/about-background.jpg')" }}
      >
        <h2 className="text-2xl font-bold mb-4">About Us</h2>
        <p>This is the about section content.</p>
      </section>
      <section
        id="services"
        className="p-4"
        style={{ backgroundImage: "url('/path/to/services-background.jpg')" }}
      >
        <h2 className="text-2xl font-bold mb-4">Our Services</h2>
        <ul className="list-disc pl-5">
          <li>Web Development</li>
          <li>Mobile App Development</li>
          <li>UI/UX Design</li>
          <li>SEO Services</li>
          <li>Digital Marketing</li>
        </ul>
      </section>
      <section
        id="albums"
        className="p-4"
        style={{ backgroundImage: "url('/path/to/albums-background.jpg')" }}
      >
        <h2 className="text-2xl font-bold mb-4">Albums</h2>
        <p>This is the albums section content.</p>
      </section>
      <section
        id="contact"
        className="p-4"
        style={{ backgroundImage: "url('/path/to/contact-background.jpg')" }}
      >
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
        <p>This is the contact section content.</p>
      </section>
      <Footer /> {/* Adding Footer component */}
    </div>
  );
};

export default App;
