import React from "react";
import LocomotiveScroll from 'locomotive-scroll';
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Eyes from "./components/Eyes";
import Featured from "./components/Featured";
import Cards from "./components/Cards";
import Footer from "./components/Footer";



function App(){
  const locomotiveScroll = new LocomotiveScroll();
  
  return (
    <div className="w-full min-h-screen text-white bg-zinc-800">
      <Navbar />
      <LandingPage />
      <Marquee />
      <About />
      <Eyes />
      <Featured />
      <Cards />
      <Footer />
      
    </div>
  );
};

export default App;
