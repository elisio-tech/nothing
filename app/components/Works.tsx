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
    <div className="mt-24 mx-16">
      <div className="flex items-center gap-2">
        <div className="w-1 h-1 bg-zinc-900" />
        <h3>Featured work</h3>
      </div>
      <div>
        {jobs.map(({ name, service }) => (
          <div key={name}>
            <div />
            <h1>{name}</h1>
            <div>
              {service.map((title, i) => (
                <h4 key={i}>{title}</h4>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
