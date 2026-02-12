import React from "react";
import LeftColumn from "./LeftColumn";
import CenterVisual from "./CenterVisual";
import RightColumn from "./RightColumn";

const MainGridContainer = () => {
  return (
    <div className="mx-auto max-w-7xl px-6 py-24 relative">
      {/* Title */}
      <h2 className="text-center text-5xl md:text-7xl font-bold  text-white mb-10">
        MISSION GUIDELINES
      </h2>

      {/* MAIN FLEX CONTAINER */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* LEFT COLUMN */}
        <LeftColumn/>

        {/* CENTER VISUAL */}
        <CenterVisual/>

        {/* RIGHT COLUMN */}
        <RightColumn/>
      </div>
    </div>
  );
};

export default MainGridContainer;
