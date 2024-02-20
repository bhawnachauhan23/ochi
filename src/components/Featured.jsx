import { motion, useAnimation } from "framer-motion";
import React from "react";

function Featured() {
  const cards = [useAnimation(), useAnimation()];
  const handleHover = (index) => {
    cards[index].start({ y: "0", scale: "1.2" });
  };
  const handleHoverEnd = (index) => {
    cards[index].start({ y: "100%" });
  };
  return (
    <div data-scroll data-scroll-section className="relative w-full py-20">
      <div className="w-full px-12 border-b-[1px] border-zinc-700 pb-16">
        <h1 className='text-6xl font-["Neue_Montreal"] tracking-tight'>
          Featured projects
        </h1>
      </div>
      <div className="px-12">
        <div className="cards flex gap-5 mt-10">
          <motion.div
            onHoverStart={() => handleHover(0)}
            onHoverEnd={() => handleHoverEnd(0)}
            className="cardcontainer relative w-1/2 h-[75vh]">
            <h1 className="absolute flex overflow-hidden -translate-x-1/2 top-[50%] -translate-y-1/2 z-[999] text-[#CDEA68] text-8xl font-semibold leading-none tracking-tight left-full ">
              {"FYDE".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={cards[0]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
                  className="inline-block">
                  {item}
                </motion.span>
              ))}
            </h1>
            <motion.div
              whileHover={{ scale: 0.95 }}
              transition={{ ease: "linear", duration: 0.3 }}
              className="card w-full h-full rounded-xl overflow-hidden">
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
                alt=""
              />
            </motion.div>
          </motion.div>
          <motion.div
            onHoverStart={() => handleHover(1)}
            onHoverEnd={() => handleHoverEnd(1)}
            className="cardcontainer relative w-1/2 h-[75vh]">
            <h1 className="absolute flex overflow-hidden translate-x-1/2 top-[50%] -translate-y-1/2 z-[999] text-[#CDEA68] text-8xl font-semibold leading-none tracking-tight right-full ">
              {"VISE".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={cards[1]}
                  transition={{ ease: [.4, 0, 0.2, 1], delay: index * 0.05 }}
                  className="inline-block">
                  {item}
                </motion.span>
              ))}
            </h1>
            <motion.div
              whileHover={{ scale: 0.95 }}
              transition={{ ease: [.4, 0, 0.2, 1], duration: 0.3 }}
              className="card w-full h-full rounded-xl overflow-hidden">
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
                alt=""
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
