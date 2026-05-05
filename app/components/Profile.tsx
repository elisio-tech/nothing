import React from "react";

export default function Profile() {
  return (
    <div className="bg-white pt-24" id="contact">
      <div className="mx-16 flex justify-between gap-4 mb-8">
        <div>
          <div className="flex items-center gap-2 font-medium">
            <div className="w-1 h-1 bg-zinc-900" />
            <h3>Profile</h3>
          </div>
          <h1 className="text-4xl max-w-6xl mt-8 font-medium mb-24">
            For over 10 years I have been striving to create bold experiences
            that connect brands with their audience through design that
            resonates.
          </h1>

          <p className="max-w-md text-sm">
            Specializing in experience design, art direction, and digital
            design, I strive to give each project a distinct personality and
            visual identity.
          </p>
        </div>
        <div className="bg-gray-100 w-64 h-32 self-end-safe" />
        <div className="bg-gray-100 w-[40%] h-[70vh]  mb-44" />
      </div>
    </div>
  );
}
