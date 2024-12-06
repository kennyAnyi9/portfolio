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
  { name: "blog", shortcut: "b", path: "/posts" },
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
      if (!isTyping) {
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
        else if (e.key === "Enter" && selectedIndex !== -1) {
          handleNavigation(commands[selectedIndex].path);
        }
        else if (e.key === "/") {
          e.preventDefault();
          setIsTyping(true);
          inputRef.current?.focus();
        }
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
    <div className="relative flex font-mono items-center justify-between gap-2 px-2 p-2 border-b">
      <span className="hidden lg:flex text-sm gap-2 flex-row space-x-2 w-fit">
        <Terminal size={16} className="my-auto text-foreground" />
        {isTyping ? (
          <form onSubmit={handleSubmit} className="flex items-center">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onBlur={handleBlur}
              className="bg-transparent border-none outline-none text-foreground text-sm w-32"
              placeholder="Type a command..."
              autoFocus
            />
          </form>
        ) : (
          <span className="text-muted-foreground text-xs">Press "/" to type a command</span>
        )}
      </span>
      <div className="inline-flex gap-1 items-center text-xs">
        {commands.map((item, index) => (
          <Badge
            key={index}
            variant="outline"
            className={`inline-flex gap-2 border border-muted cursor-pointer font-extralight text-muted-foreground transition-colors rounded-sm px-1 text-xs
              ${index === selectedIndex
                ? "bg-accent hover:bg-accent"
                : "bg-background hover:bg-accent/50"
              }`}
            onClick={() => handleNavigation(item.path)}
          >
            {item.name} <span className="hidden lg:block rounded-sm bg-muted text-muted-foreground px-2">{item.shortcut}</span>
          </Badge>
        ))}
      </div>
      {showTooltip && (
        <div className="hidden lg:absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-popover text-popover-foreground text-xs py-1 px-2 rounded">
          Press first letter to quick navigate (h: home, b: blog, p: projects, s: store)
        </div>
      )}
    </div>
  );
};

export default Navigation;
