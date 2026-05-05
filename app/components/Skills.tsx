import React from "react";

export default function Skills() {
  const skills = ["Frontend", "Backend"];
  return (
    <div className="mx-16">
      <div className="flex items-center gap-2 font-medium">
        <div className="w-1 h-1 bg-zinc-900" />
        <h3>Skills</h3>
      </div>
      <div>
        <div className="flex justify-between">
          <div>
            <h1 className="text-5xl mt-4 font-medium mb-4">My Skillset</h1>
            <p>
              Over the course of my career, I’ve strived to develop a diverse
              set of core skills.
            </p>
          </div>
          <div className="">
            {skills.map((skill, i) => (
              <div key={skill} className="border w-[20%] h-[20vh]">
                <p>0{i + 1}</p>
                <h3>{skill}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
