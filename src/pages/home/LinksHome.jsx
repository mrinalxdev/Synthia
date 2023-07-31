import React from "react";
import { Link } from "react-router-dom";

const LinksHome = () => {
  return (
    <div className="border rounded-3xl p-5 text-center border-[#00f9a0] w-[70%] m-auto mt-10 mb-3">
      Need a short intro before entering this field .. 👉{" "}
      <Link className="text-gray-600"> This is the link </Link>👈
    </div>
  );
};

export default LinksHome;
