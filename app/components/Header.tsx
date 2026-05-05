"use client";

import React, { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Header() {
  const navItems = ["Projects", "About", "Contact"];
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = ["projects", "about", "contact"];

    sections.forEach((id) => {
      ScrollTrigger.create({
        trigger: `#${id}`,
        start: "top center",
        end: "bottom center",

        onEnter: () => setActiveSection(id),
        onEnterBack: () => setActiveSection(id),
        onLeaveBack: () => setActiveSection(""),
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-10 bg-white border-b border-gray-200">
      <nav className="flex justify-between items-center mx-16">
        <a href="#home">Design</a>

        <div className="flex gap-56 border-l py-4 pl-24 border-gray-200">
          {navItems.map((link, i) => {
            const sectionId = link.toLowerCase();
            const isActive = activeSection === sectionId;

            return (
              <a
                key={i}
                href={`#${sectionId}`}
                className="font-medium text-sm relative group hover:text-gray-600 transition-colors ease-in-out"
              >
                <span className="text-lg pr-1 text-gray-600 font-cormorant">
                  0{i + 1}
                </span>

                {link}

                {isActive && (
                  <div className="w-1 h-1  bg-zinc-600 absolute -bottom-4 group-hover:bg-zinc-400 transition left-1/2 -translate-x-1/2" />
                )}
              </a>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
