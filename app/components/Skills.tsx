import React from "react";

export default function Skills() {
  const skills = ["UI Design", "Frontend", "Backend"];
  return (
    <div className="mx-16">
      <div className="flex items-center gap-2 font-medium">
        <div className="w-1 h-1 bg-zinc-900" />
        <h3>Skills</h3>
      </div>
      <div>
        <div>
          <h1>My Skillset</h1>
          <p>
            Over the course of my career, I’ve strived to develop a diverse set
            of core skills.
          </p>
        </div>

        <div>
          {skills.map((skill, i) => (
            <div key={skill}>
              <p>0{i + 1}</p>
              <h3>{skill}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
