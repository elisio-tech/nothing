import React from "react";
import Header from "./components/Header";
import "@/app/globals.css";
import Hero from "@/app/components/Hero";
import Works from "./components/Works";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Works />
    </div>
  );
}
