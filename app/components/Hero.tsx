import React from "react";

export default function Hero() {
  return (
    <div className=" ">
      <div className="h-screen flex justify-between flex-col  mx-16">
        <div className="flex justify-between items-center mt-18 text-sm font-medium">
          <div className="flex items-center gap-2">
            <div className="w-1 h-1 bg-zinc-600" />
            <h3>Product & Visual Designer</h3>
          </div>

          <h3>Functionality & Aesthetics</h3>
        </div>

        <div className="flex justify-between mb-6 items-baseline-last">
          <h1 className="text-7xl font-medium ">
            I am a Frontend specialising <br /> in crafting digital experiences.
          </h1>
          <button className="text-xs uppercase">Scroll </button>
        </div>
      </div>
    </div>
  );
}
