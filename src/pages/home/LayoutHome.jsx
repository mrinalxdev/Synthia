import React from "react";
import Platform from "./Platform";
import LinksHome from "./LinksHome";
import GetStarted from "./GetStarted";


const LayoutHome = () => {
  return (
    <div>
      <div className="flex m-4 items-center justify-between">
        <Platform />
        <GetStarted />
      </div>
      <LinksHome />
    </div>
  );
};

export default LayoutHome;
