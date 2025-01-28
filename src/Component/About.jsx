import React from "react";

const About = () => {
  return (
    <section id="about" className="bg-gray-900 text-white h-screen py-12 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">About Me</h2>
        <p className="text-lg leading-8 mb-8">
          Hello! I'm a passionate web developer with expertise in modern web
          technologies, including{" "}
          <span className="text-teal-400 font-semibold">JavaScript</span>,
          <span className="text-teal-400 font-semibold"> React</span>,
          <span className="text-teal-400 font-semibold"> TypeScript</span>,
          <span className="text-teal-400 font-semibold"> Node.js</span>, and{" "}
          <span className="text-teal-400 font-semibold"> Solidity</span>. I
          specialize in building interactive, user-friendly web applications and
          decentralized blockchain solutions.
        </p>
        <p className="text-lg leading-8 mb-8">
          I thrive on solving complex problems and delivering high-quality,
          scalable solutions. Whether it's front-end development, back-end
          architecture, or smart contract programming, I love creating impactful
          projects that make a difference.
        </p>
        <p className="text-lg leading-8">
          Beyond coding, I'm a lifelong learner and tech enthusiast who enjoys
          staying up-to-date with the latest trends and innovations. Let's work
          together to bring your ideas to life!
        </p>
        <a
          href="#projects"
          className="mt-8 inline-block px-6 py-3 text-lg font-semibold bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition duration-300"
        >
          View My Projects
        </a>
      </div>
    </section>
  );
};

export default About;
