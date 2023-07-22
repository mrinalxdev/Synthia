import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Dev.png"

const Navbar = () => {
  return (
    <div className="max-w-[90%] m-auto mt-2 sm:max">
      <div className="flex flex-row justify-between items-center">
        <div className="text-4xl  logo">
          <Link to="/">
            <h1>💻</h1>
          </Link>
        </div>
        {/* NavElements */}
        <div>
          <div className="px-3 font-mono">
            <Link to="https://discord.gg/We6bV3pF" className="px-9">
               Community
            </Link>
            <Link to="/" className="px-9">
               Mentoring
            </Link>
            <Link to="/" className="px-9">
               Twitter
            </Link>
          </div>
        </div>
        <div>
          <Link>
            <button className="px-7 py-2 border-2 border-[#071952] rounded-3xl  transition-all duration-150 hover:bg-[#071952] hover:text-[#fff]">
              Let's Learn
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
