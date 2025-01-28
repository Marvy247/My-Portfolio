import React, { useEffect } from "react";

const About = () => {
  useEffect(() => {
    const aboutSection = document.getElementById("about");
    let scrollInterval;

    const scrollContent = () => {
      aboutSection.scrollBy({ top: 1, behavior: "smooth" });
    };

    scrollInterval = setInterval(scrollContent, 50); // Adjust the interval as needed

    // Clear the interval on user interaction
    const stopScrolling = () => clearInterval(scrollInterval);
    aboutSection.addEventListener("mouseover", stopScrolling);
    aboutSection.addEventListener("mouseleave", () => {
      scrollInterval = setInterval(scrollContent, 50);
    });

    return () => {
      clearInterval(scrollInterval);
      aboutSection.removeEventListener("mouseover", stopScrolling);
      aboutSection.removeEventListener("mouseleave", () => {
        scrollInterval = setInterval(scrollContent, 50);
      });
    };
  }, []);

  return (
    <section
      id="about"
      className="relative bg-cover bg-center h-screen py-12 px-6"
      style={{ backgroundImage: "url('/three.jpg')" }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <h2 className="text-6xl p-16 font-bold mb-6 text-gray-200">About Me</h2>
        <p className="text-2xl leading-9 mb-12 text-gray-200">
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
        <p className="text-2xl leading-8 mb-8 text-gray-200">
          I thrive on solving complex problems and delivering high-quality,
          scalable solutions. Whether it's front-end development, back-end
          architecture, or smart contract programming, I love creating impactful
          projects that make a difference.
        </p>
        <p className="text-2xl leading-8 text-gray-200">
          Beyond coding, I'm a lifelong learner and tech enthusiast who enjoys
          staying up-to-date with the latest trends and innovations. Let's work
          together to bring your ideas to life!
        </p>
      </div>
    </section>
  );
};

export default About;
