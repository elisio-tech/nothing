import Link from "next/link";
import React from "react";

export default function Header() {
  const navItems = ["Projects", "About", "Contact"];
  return (
    <header className="fixed top-0 left-0 right-0 z-10 bg-white border-b border-gray-200">
      <nav className="flex justify-between items-center mx-16">
        <Link href={"/"}>Design</Link>
        <div className="flex gap-44 border-l py-3 pl-24  border-gray-200">
          {navItems.map((link, i) => (
            <Link href={link} key={i} className="font-medium text-sm">
              <span className="text-lg pr-1 text-gray-600 font-cormorant">
                0{i + 1}
              </span>
              {link}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
