import { ArrowUp, MoveUpRight } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Footer() {
  const links = ["Twitter", "Github"];
  return (
    <footer className="bg-black text-white " id="contact">
      <div className="mx-16 flex flex-col justify-between">
        <div className=" h-screen ">
          <div className="flex pt-24 gap-4 justify-end">
            {links.map((link) => (
              <Link
                key={link}
                href={"/"}
                className="flex items-center justify-center gap-2 text-sm"
              >
                {link} <MoveUpRight size={12} />
              </Link>
            ))}
          </div>

          <div className="flex justify-between items-center">
            <h1 className="text-[10rem]">Contact</h1>
            <div className="flex flex-col gap-8">
              <a
                href="#home"
                className="cursor-pointer text-xs uppercase flex gap-x-4 items-center hover:opacity-70"
              >
                Scroll <ArrowUp size={18} className="animate-bounce" />
              </a>

              <h2>@2025</h2>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
