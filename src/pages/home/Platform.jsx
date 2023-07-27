import React from "react";
import { Link } from "react-router-dom";

const Platform = () => {
  return (
    <div className="bg-gray-600 p-3 w-[430px] rounded-3xl h-[490px]">
      <h1 className="bg-gray-600 text-center uppercase text-[25px] font-bold">
        Why to choose this platfor
        <span className="bg-gray-600 text-[#00f9a0]">m </span>?
      </h1>
      <p className="bg-gray-600 text-center mt-6 text-[18px]">
        I have benn planning to build this platform where school students who
        are eagered to headstart their journey in tech from there school days .{" "}
      </p>{" "}
      <br />
      <p className="bg-gray-600 text-center text-[18px]">
        I have named this platform as School
        <span className="text-[#00f9a0] bg-gray-600">Devs</span> as throughtout
        the journey I will share all things to that I have learnt till now !!{" "}
      </p>
      <p className="bg-gray-600 text-center text-[18px] mt-6">
        You can check the Roadmap I will be following all by yourself !!
      </p>
      <div className="bg-gray-600 flex justify-center items-center mt-5">
        <Link to="/main" className="bg-slate-600">
          <button className="bg-[#00f9a0] text-black px-10 py-3 ease-in-out duration-150 font-mono rounded-3xl hover:border-4 hover:border-[#00f9a0] hover:bg-transparent hover:text-white">
            Roadmap
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Platform;
