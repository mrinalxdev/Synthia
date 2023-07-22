import React from "react";
import hero from "../../assets/hero.svg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className=" h-[450px]  w-[95%] m-auto mt-[4rem]">
      <div className="flex ">
        {/* TEXT  */}
        <div className="">
          <div className="mt-4 ml-2 mb-3 text-[3rem] font-bold">
            <h1 className="font-sans">
              The Tower of Syntax <br /> Climbing the first rungs
            </h1>
          </div>
          <div className="max-w-[650px] ml-2 mr-4 mt-[2rem] leading-7 text-[18px]">
            <p>
              In the Tower of Syntax, you'll learn the building blocks of
              programming languages and gain a solid foundation. As you climb
              each rung, you'll uncover the power of web development and many
              more in the world of technology.
            </p>
          </div>

          <div className="mt-8 flex ml-2 justify-center">
            <Link>
              <button className="border-4 hover:border-4 w-[250px] p-4 text-[16px] font-mono rounded-2xl hover:border-[#071952]">
                Short Intro 👉
              </button>
            </Link>
          </div>
        </div>
        {/* IMAGE  */}
        <div>
          <img src={hero} className="w-[390px] pt-[20px] ml-[80px] h-full" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
