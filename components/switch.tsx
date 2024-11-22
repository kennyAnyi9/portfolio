"use client";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import AnimatedBackground from "./ken-ui/animated-background";

export function SegmentedControl() {
  const [activeTab, setActiveTab] = useState("About");

  const skills = ["JavaScript", "React", "Node.js", "CSS", "HTML"];
  const toolkit = ["VS Code", "Git", "Webpack", "npm", "Docker"];

  const renderContent = () => {
    switch (activeTab) {
      case "About":
        return (
          <div className="mt-4 p-4 bg-[#252525] rounded-lg">
            <p>
              I'm a passionate developer with a love for creating intuitive and
              efficient web applications.
            </p>
          </div>
        );
      case "Skills":
        return (
          <div className="mt-4 p-4 bg-[#252525] rounded-lg">
            <h3 className="mb-2 text-lg font-semibold">My Skills</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <Badge key={index} variant="secondary">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        );
      case "Toolkit":
        return (
          <div className="mt-4 p-4 bg-[#252525] rounded-lg">
            <h3 className="mb-2 text-lg font-semibold">My Toolkit</h3>
            <div className="flex flex-wrap gap-2">
              {toolkit.map((tool, index) => (
                <Badge key={index} variant="outline">
                  {tool}
                </Badge>
              ))}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="w-fit">
      <div className="rounded-[8px] p-[2px] bg-[#252525]">
        <AnimatedBackground
          defaultValue="About"
          className="rounded-lg bg-[#191919]"
          transition={{
            ease: "easeInOut",
            duration: 0.2,
          }}
        >
          {["About", "Skills", "Toolkit"].map((label, index) => (
            <button
              key={index}
              data-id={label}
              type="button"
              className={`inline-flex w-20 items-center justify-center text-center transition-transform active:scale-[0.98] ${
                activeTab === label ? "font-bold" : ""
              }`}
              onClick={() => setActiveTab(label)}
            >
              {label}
            </button>
          ))}
        </AnimatedBackground>
      </div>
      {renderContent()}
    </div>
  );
}
