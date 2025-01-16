import React from "react";

const About = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">About Our School</h1>
      <p className="mb-2">
        Welcome to our primary school! We are dedicated to providing a nurturing
        and stimulating environment for our students.
      </p>
      <h2 className="text-xl font-semibold mt-4">Our Mission</h2>
      <p className="mb-2">
        Our mission is to foster a love of learning and to help each child reach
        their full potential.
      </p>
      <h2 className="text-xl font-semibold mt-4">Our Vision</h2>
      <p className="mb-2">
        We envision a community where every child is empowered to succeed and
        thrive.
      </p>
      <h2 className="text-xl font-semibold mt-4">Our Values</h2>
      <ul className="list-disc ml-5">
        <li>Respect</li>
        <li>Integrity</li>
        <li>Collaboration</li>
        <li>Excellence</li>
      </ul>
    </div>
  );
};

export default About;
