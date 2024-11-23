'use client'
import React, { useState, useEffect, useRef } from "react";
import { Terminal } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useRouter } from "next/navigation";

interface CommandConfig {
  name: string;
  shortcut: string;
  path: string;
}

const commands: CommandConfig[] = [
  { name: "home", shortcut: "h", path: "/" },
  { name: "blog", shortcut: "b", path: "/blog" },
  { name: "projects", shortcut: "p", path: "/projects" },
  { name: "store", shortcut: "s", path: "/store" }
];

const Navigation = () => {
  const [input, setInput] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [isTyping, setIsTyping] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  const handleCommand = (command: string) => {
    const foundCommand = commands.find(
      cmd => cmd.name.toLowerCase() === command.toLowerCase()
    );
    if (foundCommand) {
      handleNavigation(foundCommand.path);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Only handle shortcuts if not typing in input
      if (!isTyping) {
        // Handle arrow key navigation
        if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
          e.preventDefault();
          setSelectedIndex((prev) => {
            if (e.key === "ArrowLeft") {
              return prev <= 0 ? commands.length - 1 : prev - 1;
            } else {
              return prev >= commands.length - 1 ? 0 : prev + 1;
            }
          });
        }
        // Handle Enter key for selected command
        else if (e.key === "Enter" && selectedIndex !== -1) {
          handleNavigation(commands[selectedIndex].path);
        }
        // Handle "/" to start typing
        else if (e.key === "/") {
          e.preventDefault();
          setIsTyping(true);
          inputRef.current?.focus();
        }
        // Handle shortcuts (h, b, p, s)
        else {
          const foundCommand = commands.find(
            cmd => cmd.shortcut.toLowerCase() === e.key.toLowerCase()
          );
          if (foundCommand) {
            handleNavigation(foundCommand.path);
          }
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isTyping, selectedIndex]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      handleCommand(input.trim());
      setInput("");
    }
    setIsTyping(false);
  };

  const handleBlur = () => {
    setIsTyping(false);
    setInput("");
  };

  useEffect(() => {
    setShowTooltip(true);
    const timer = setTimeout(() => setShowTooltip(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative flex font-mono items-center justify-between gap-2 px-2 p-2 border-b border-white/10">
      <span className="flex text-sm text-white dark:text-gray-400 gap-2 flex-row space-x-2 w-fit">
        <Terminal size={16} className="my-auto" />
        {isTyping ? (
          <form onSubmit={handleSubmit} className="flex items-center">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onBlur={handleBlur}
              className="bg-transparent border-none outline-none text-white text-sm w-32"
              placeholder="Type a command..."
              autoFocus
            />
          </form>
        ) : (
          <span className="opacity-50 text-xs">Press "/" to type a command</span>
        )}
      </span>
      <div className="inline-flex gap-1 text-white items-center text-xs opacity-50">
        {commands.map((item, index) => (
          <Badge
            key={index}
            variant="outline"
            className={`inline-flex gap-2 cursor-pointer transition-colors rounded-sm px-1 opacity-50 text-xs
              ${index === selectedIndex
                ? "bg-white/20 hover:bg-white/20"
                : "bg-zinc-800 hover:bg-zinc-700"
              }`}
            onClick={() => handleNavigation(item.path)}
          >
            {item.name} <span className="rounded-sm bg-white text-black opacity-50 text-xs px-2">{item.shortcut}</span>
          </Badge>
        ))}
      </div>
      {showTooltip && (
        <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-xs py-1 px-2 rounded">
          Press first letter to quick navigate (h: home, b: blog, p: projects, s: store)
        </div>
      )}
    </div>
  );
};

export default Navigation;
