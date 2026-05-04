import React from "react";

export default function About() {
  return (
    <div
      className="mx-auto text-center h-screen flex flex-col justify-center "
      id="about"
    >
      <div>
        <h2 className="text-xs uppercase mb-2">About</h2>
        <h1 className="text-6xl max-w-5xl mx-auto mb-6 font-medium">
          I pair strong visual designskills with a focus on user-centered
          design.
        </h1>
        <p className="max-w-lg mx-auto text-sm font-medium">
          With 10 years of experience in the design industry I have been helping
          to bring brands to life through thoughtful design that resonates.
        </p>
      </div>
    </div>
  );
}
