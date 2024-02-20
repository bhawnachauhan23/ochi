import React from "react";

function Cards(){
  return (
    <div className="w-full h-screen flex items-center px-12 gap-5">
      <div className="cardcontainer w-1/2 h-[60vh]">
        <div className="card relative w-full h-full rounded-xl bg-[#004D43] flex justify-center items-center">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
            alt=""
          />
          <button className="absolute left-8 bottom-8 px-3 py-1 rounded-full text-[#CDEA68] border-[1px] border-[#CDEA68]">
            &copy;2019-2022
          </button>
        </div>
      </div>
      <div className="cardcontainer flex gap-5 w-1/2 h-[60vh]">
        <div className="card relative w-1/2 h-full rounded-xl bg-[#0f1a18] flex justify-center items-center">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
            alt=""
          />
          <button className="absolute font-['Neue_Montreal'] text-[1vw] left-8 bottom-8 px-3 py-1 rounded-full text-white border-[1px] border-white uppercase">
            rating 5.0on clutch
          </button>
        </div>
        <div className="card relative w-1/2 h-full rounded-xl bg-[#0f1a18] flex justify-center items-center">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
            alt=""
          />
          <button className="absolute font-['Neue_Montreal'] text-[1vw] left-8 bottom-8 px-3 py-1 rounded-full uppercase text-white border-[1px] border-white">
            business bootcamp alumini
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
