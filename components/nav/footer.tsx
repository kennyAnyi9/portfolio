"use client";
import { cn } from "@/lib/utils";
import React, { useState, useEffect } from "react";

export function Footer({ className }: React.HTMLAttributes<HTMLElement>) {
  const [currentTime, setCurrentTime] = useState<string | null>(null);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, "0");
      const minutes = now.getMinutes().toString().padStart(2, "0");
      const seconds = now.getSeconds().toString().padStart(2, "0");
      const milliseconds = now.getMilliseconds().toString().padStart(3, "0");
      setCurrentTime(`${hours}:${minutes}:${seconds}.${milliseconds}`);
    };

    updateTime();
    const intervalId = setInterval(updateTime, 1); // Update every millisecond

    return () => clearInterval(intervalId);
  }, []);

  return (
    <footer className={cn(className)}>
      <div className="w-full border-t border-[#181818] flex items-center h-10 py-5 mt-10 lg:mt-20">
        <div className="max-w-2xl m-auto flex justify-between w-full">
          <p className="text-sm text-gray-600">
            Pray at the alter of hardwork 🙇🏿‍♂️
          </p>
          <p className="text-sm font-thin font-mono text-gray-600">
            {currentTime}
          </p>
        </div>
      </div>
    </footer>
  );
}
