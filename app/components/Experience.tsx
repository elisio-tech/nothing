import { ArrowDownToLine, ArrowRight } from "lucide-react";
import React from "react";

export default function Experience() {
  const experiences = [
    {
      role: "Lead Designer",
      company: "Born Group",
      start: "2021",
      end: "Now",
    },
    {
      role: "Senior Product Designer",
      company: "W12",
      start: "2019",
      end: "2021",
    },
    {
      role: "Middleweight Designer",
      company: "Nimbletank",
      start: "2018",
      end: "2019",
    },
    {
      role: "Junior Designer",
      company: "Mullen Lowe Profero",
      start: "2013",
      end: "2015",
    },
  ];
  return (
    <div className="mt-24">
      <div className="mx-16 grid grid-cols-2 h-[41vh]">
        <div>
          <div className="flex items-center gap-2 font-medium">
            <div className="w-1 h-1 bg-zinc-900" />
            <h3>About</h3>
          </div>
          <h1 className="mt-8 text-5xl font-medium mb-4">My Experience</h1>
          <p className="text-sm text-gray-700 mb-8">
            Throughout my career I’ve had the privilege of working with some
            very talented people at a great bunch of companies.
          </p>

          <button className="flex items-center gap-x-2 mb-8 text-sm font-medium">
            Download CV
            <div className="flex justify-center items-center w-9 h-9 rounded-full border border-zinc-300 hover:bg-black cursor-pointer group">
              <ArrowDownToLine
                size={18}
                className="group-hover:text-white transition duration-300 ease-in-out"
              />
            </div>
          </button>
        </div>

        <div className="flex flex-col self-baseline-last">
          {experiences.map((experience, i) => (
            <div key={i}>
              <div className="flex justify-between items-center border-b py-6">
                <h1 className="text-xl font-medium">{experience.role}</h1>
                <h3 className="place-self-start text-xl font-medium">
                  {experience.company}
                </h3>
                <div className="inline-flex items-center gap-x-1 text-sm">
                  <p>{experience.start}</p>
                  <ArrowRight size={12} />
                  <p>{experience.end}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
