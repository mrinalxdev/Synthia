import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="border-8 border-gray-600 px-9 rounded-3xl max-w-[890px] m-auto mt-4 mb-4 text-center p-3 flex justify-between items-center">
      <div className="text-4xl">
        <h1>🖥️</h1>
      </div>

      <ul className="flex">
        <li className="px-8 font-mono"><Link to="/">Home</Link></li>
        <li className="px-8 font-mono"><Link to="/main">Organization</Link></li>
        <li className="pl-8 font-mono"><Link to="/main">Discord</Link></li>
      </ul>
    </div>
  );
};

export default Navbar;
