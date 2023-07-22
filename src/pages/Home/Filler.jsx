import React from "react";
import { Link } from "react-router-dom";
import filler1 from "../../assets/filler.svg";
import filler2 from "../../assets/filler-2.svg"
import filler3 from "../../assets/filler-3.svg"

const Filler = () => {
  return (
    <div className="mt-5 flex gap-2 h-[550px] p-5">
      {/* Cards  */}
      <div className="w-[33%]">
        <div className="border-2 h-[450px] m-2 rounded-xl cursor-pointer filler hover:rounded-3xl">
          <div className=" text-[22px]">
            <div className="w-[310px] m-auto pt-7">
              <img src={filler1} alt="" />
            </div>
            <h1 className="p-4 text-center font-semibold pt-4">
              How its going to help ?
            </h1>
            <p className="text-[16px] text-center px-4">
              For the one who is intrested for learning stuffs like Web
              Development, System Design and Containerization with{" "}
            </p>
          </div>
          <div className="mt-5 flex justify-center items-center">
            <Link to="https://roadmap.sh/" className="bg-[#071952] px-[40px] py-2 font-mono rounded-xl text-white transition-all duration-150 hover:border-4 hover:bg-transparent hover:text-black">
              <button>Roadmaps</button>
            </Link>
          </div>
        </div>
      </div>

      <div className="w-[33%]">
        <div className="border-2 h-[450px] m-2 rounded-xl cursor-pointer filler hover:rounded-3xl">
          <div className=" text-[22px]">
            <div className="w-[210px] m-auto pt-7">
              <img src={filler2} alt="" />
            </div>
            <h1 className="p-4 text-center font-semibold pt-4">
              How are you getting guided ?
            </h1>
            <p className="text-[16px] text-center px-4">
              Throughout the journey you will be guided and taught by me . At some concepts there will be video provided 🤝
            </p>
          </div>
          <div className="mt-5 flex justify-center items-center">
            <Link to="https://github.com/mrinalxdev" className="bg-[#071952] px-[40px] py-2 font-mono rounded-xl text-white transition-all duration-150 hover:border-4 hover:bg-transparent hover:text-black">
              <button>Who am I to teach ? </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="w-[33%]">
      <div className="border-2 h-[450px] m-2 rounded-xl cursor-pointer filler hover:rounded-3xl">
          <div className=" text-[22px]">
            <div className="w-[310px] m-auto mt-[60px] pt-7">
              <img src={filler3} alt="" />
            </div>
            <h1 className="p-4 text-center font-semibold pt-7">
              Want to Code with me ??
            </h1>
            <p className="text-[16px] text-center px-4">
             If you are willing to build great projects and solve some natty bugs lets jam together and in google meet or discord ? How's that idea ?
            </p>
          </div>
          <div className="mt-5 flex justify-center items-center">
            <Link to="https://discord.gg/We6bV3pF" className="bg-[#071952] px-[40px] py-2 font-mono rounded-xl text-white transition-all duration-150 hover:border-4 hover:bg-transparent hover:text-black">
              <button>Discord</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filler;
