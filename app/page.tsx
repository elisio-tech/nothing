import React from "react";

import "@/app/globals.css";
import Hero from "@/app/components/Hero";
import Works from "@/app/components/Works";
import About from "@/app/components/About";
import Profile from "@/app/components/Profile";

export default function Home() {
  return (
    <div>
      <Hero />
      <Works />
      <About />
      <Profile />
    </div>
  );
}
