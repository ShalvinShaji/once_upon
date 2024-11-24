import React from "react";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <div className="header flex flex-col justify-center items-center mt-14 mb-10">
      <p className="text-5xl font-extrabold text-[#e4e4e7] leading-tight">
        Once<span className="text-[#7957A8]">U</span>pon
      </p>
      <p className="bg-[#e4e4e7] font-bold	 text-[#0a0a0a] text-lg px-2 py-1 rounded-lg">
        AI Story <span className="">Builder</span>
      </p>
      <div className="flex  justify-center items-center mt-5">
        <Navigation />
      </div>
    </div>
  );
};

export default Header;
