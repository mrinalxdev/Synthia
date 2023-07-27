import React from "react";
import { Link } from "react-router-dom";

const GetStarted = () => {
  return (
    <div className="bg-gray-600 rounded-3xl w-[750px] h-[540px]">
      <h1 className="bg-gray-600 text-center font-bold text-3xl p-3 m-3 ">
        Let's Learn and Buil
        <span className="bg-gray-600 text-[#00f9a0]">d</span> !!
      </h1>

      <p className="bg-gray-600 p-5 text-center text-[20px] leading-9">
        We understand that life can get busy, but that should never be a barrier
        to your dreams. With SchoolDevs, you have the freedom to learn at your
        own pace and on your own schedule. Whether you prefer to dedicate a few
        hou<span className="text-[#00f9a0] bg-gray-600">rs</span>  each day or immerse yourself in intensive study, our platform
        adapts to your needs.
      </p>
      <p className="bg-gray-600 p-5 text-center text-[20px] leading-9">
        Join a thriving community of like-minded learners from around the globe!
        Collaborate, exchange ideas, and build valuable connections that can
        last a lifetime. Our inte<span className="text-[#00f9a0] bg-gray-600">ractive</span> forums and live sessions provide the
        perfect space for fruitful discussions and peer-to-peer learning.
      </p>
      <div className="bg-gray-600 flex justify-center items-center">
        <Link to="https://roadmap.sh/" className="bg-slate-600">
          <button className="bg-[#00f9a0] text-black px-10 py-3 ease-in-out duration-150 font-mono rounded-3xl hover:border-4 hover:border-[#00f9a0] hover:bg-transparent hover:text-white">
            Let's Get Started
          </button>
        </Link>
      </div>
    </div>
  );
};

export default GetStarted;
