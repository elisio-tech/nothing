import React from "react";

export default function Works() {
  const jobs = [
    {
      name: "Wagamama redesig",
      service: ["UI Design", "UX Design", "Art Directing"],
    },
    {
      name: "Verizon Steam TV",
      service: ["UI Design", "UX Design"],
    },
    {
      name: "BF Future Costumer Journey",
      service: ["UI Design"],
    },
    {
      name: "PCN Bank",
      service: ["Web Developer"],
    },
  ];
  return (
    <div className="mx-16" id="projects">
      <div className="flex items-center gap-2 font-medium pt-18">
        <div className="w-1 h-1 bg-zinc-900" />
        <h3>Featured work</h3>
      </div>
      <div className="mt-14 flex flex-col gap-12">
        {jobs.map(({ name, service }, i) => (
          <div
            key={name}
            className={`mb-12 w-[56%]   ${i % 2 === 0 ? "self-start" : "self-end"}`}
          >
            <div className="mb-4 bg-zinc-100 h-[70vh] cursor-pointer" />
            <h1 className="text-5xl mb-4 font-medium">{name}</h1>

            <div className="flex items-center gap-2">
              {service.map((title, i) => (
                <p
                  key={i}
                  className="px-4 py-1 border border-zinc-200 text-zinc-800 text-xs"
                >
                  {title}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
