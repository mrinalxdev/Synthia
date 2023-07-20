import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="max-w-[90%] m-auto mt-2 ">
      <div className="flex flex-row justify-between items-center">
        <div className="text-3xl  logo">
          <Link to="/">SchoolDevs</Link>
        </div>

        {/* NavElements */}
        <div>
          <div className="px-3 font-mono">
            <Link to="/" className="px-9">
              Our Community
            </Link>
            <Link to="/" className="px-9">
              Our Discord
            </Link>
            <Link to="/" className="px-9">
              Our Twitter
            </Link>
          </div>
        </div>
        <div>
          <Link>
            <button className="border-[2px] px-6 py-2 rounded-3xl border-[#071952] transition-all duration-150 hover:bg-[#071952] hover:text-[#fff]">
              Let's Learn
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
