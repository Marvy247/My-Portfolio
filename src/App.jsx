import React from "react";
import Header from "./Component/Header";
import Footer from "./Component/Footer"; // Importing Footer

const App = () => {
  return (
    <div>
      <Header />
      <section
        id="home"
        className="p-4"
        style={{ backgroundImage: "url('/path/to/home-background.jpg')" }}
      >
        <h1 className="text-2xl font-bold">Welcome to My Website</h1>
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
