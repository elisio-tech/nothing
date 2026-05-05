import React from "react";

import "@/app/globals.css";
import Hero from "@/app/components/Hero";
import Works from "@/app/components/Works";
import About from "@/app/components/About";
import Profile from "@/app/components/Profile";
import Experience from "@/app/components/Experience";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <div>
      <Hero />
      <Works />
      <About />
      <Profile />
      <Experience />
      <Footer />
    </div>
  );
}
