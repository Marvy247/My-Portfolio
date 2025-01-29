import React from "react";
import Header from "./Component/Header";
import Footer from "./Component/Footer"; // Importing Footer
import HomeContent from "./Component/HomeContent";
import About from "./Component/About";
import Contact from "./Component/Contact";
<script
  src="https://kit.fontawesome.com/95442de5cd.js"
  crossorigin="anonymous"
></script>;

const App = () => {
  return (
    <div
      className="relative min-h-screen flex flex-col text-center bg-cover bg-center"
      style={{ backgroundImage: "url('/one.jpg')", backgroundSize: "cover" }}
    >
      <Header />
      <HomeContent />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
