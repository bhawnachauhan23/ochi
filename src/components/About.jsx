import { motion } from "framer-motion";
import React, { useState } from "react";

function About() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-.2"
      className="w-full py-20 px-12 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black ">
      <h1 className="w-11/12 font-['Neue_Montreal'] text-[3.8vw] leading-[4.5vw] tracking-tight">
        Ochi is a strategic partner for fast-growing tech businesses that need
        to raise funds, sell products, explain complex ideas, and hire great
        people.
      </h1>
      <div className="w-full flex border-t-[1px] pt-5 mt-20 border-[#a1b562] ">
        <p className="w-1/2 font-['Neue_Montreal']">What you can expect:</p>
        <div className="w-1/2 flex justify-between items-end">
          <div className="w-1/2 flex flex-col gap-6">
            <p className="font-['Neue_Montreal']">
              We create tailored presentations to help you persuade your
              colleagues, clients, or investors. Whether it’s live or digital,
              delivered for one or a hundred people.
            </p>
            <p className="font-['Neue_Montreal']">
              We believe the mix of strategy and design (with a bit of coffee)
              is what makes your message clear, convincing, and captivating.
            </p>
          </div>
          <p className="w-1/2 font-['Neue_Montreal'] px-28">
            S: Instagram Behance Facebook Linkedin
          </p>
        </div>
      </div>
      <div className="w-full flex gap-5 border-t-[1px] pt-5 mt-24 border-[#a1b562] ">
        <div className="w-1/2 ">
          <h1 className="font-['Neue_Montreal'] text-[4vw] tracking-tight">
            Our approach:
          </h1>
          <motion.button
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            whileHover={{ backgroundColor: "#2F4F4F" }}
            className="flex gap-9 items-center uppercase px-7 py-4 bg-zinc-900 mt-2 rounded-full text-white">
            Read more
            <div className="w-2 h-2 bg-zinc-100 rounded-full"></div>
          </motion.button>
        </div>
        <motion.div
          style={{
            
            scale: isHovered ? 0.95 : 1,
            transition: {
              
              duration: 5,
              ease: "easeIn",
            },
          }}
          className="w-1/2 h-[70vh] rounded-2xl bg-[url('./Homepage-Photo.jpg')]"></motion.div>
      </div>
    </div>
  );
}

export default About;
