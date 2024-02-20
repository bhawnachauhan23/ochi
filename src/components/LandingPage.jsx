import { motion } from "framer-motion";
import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";

function LandingPage(){
  return (
    <div data-scroll data-scroll-speed='-.3' className="w-full h-screen bg-zinc-800 pt-1">
      <div className="flex justify-between items-center">
        <div className="textstructure mt-44 px-12">
          {["we create", "eye opening", "presentations"].map((item, index) => {
            return (
              <div className="masker">
                <div className="w-fit flex items-center overflow-hidden">
                  {index === 1 && (
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "8vw" }}
                      transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                      className="mr-[1vw] w-[8vw] rounded-md h-[5.6vw] bg-[url('./content-image01.jpg')] bg-cover relative -top-[0.1vw]"></motion.div>
                  )}
                  <h1 className="pt-[2vw] -mb-[1vw] text-[8.8vw] uppercase leading-[.65] font-['Founders_Grotesk_X_Condensed'] font-bold">
                    {item}
                  </h1>
                </div>
              </div>
            );
          })}
        </div>
        <div className="w-35 h-10 flex items-center justify-center mr-[-2.6vw] mt-10 bg-red-500 rotate-[270deg] px-5 py-7 ">
          <h1>Site of the Day</h1>
        </div>
      </div>
      <div className="border-t-[1px] border-zinc-800 mt-24 flex justify-between items-center py-4 px-12">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => (
          <p className="text-md font-light tracking-tight leading-none">
            {item}
          </p>
        ))}
        <div className="start flex items-center gap-2">
          <div className="px-5 py-1 border-[1px] border-zinc-400 font-light text-md uppercase rounded-full">
            start the project
          </div>
          <div className="w-10 h-10 flex items-center justify-center border-[1px] border-zinc-400 rounded-full">
            <span className="rotate-[45deg]">
              <FaArrowUpLong />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
