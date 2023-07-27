import React from "react";
import Platform from "./Platform";
import LinksHome from "./LinksHome";
import GetStarted from "./GetStarted";


const LayoutHome = () => {
  return (
    <div>
      <div className="flex m-auto items-center justify-between max-w-[1240px] p-2">
        <Platform />
        <GetStarted />
      </div>
      <LinksHome />
    </div>
  );
};

export default LayoutHome;
